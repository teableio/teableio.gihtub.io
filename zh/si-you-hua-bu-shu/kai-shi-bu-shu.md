---
description: Teable 私有化版本提供多种部署方案，根据下方文档可以自助完成部署
---

# 开始部署

## 部署方案概览

1. [一键云部署（推荐）](kai-shi-bu-shu.md#yi-jian-yun-bu-shu-tui-jian)
2. [Docker Compose  部署](kai-shi-bu-shu.md#docker-compose)
3. [Kubernetes 集群部署](kai-shi-bu-shu.md#kubernetes-k8s)

## 镜像版本

Teable 镜像分为企业版和社区版两个版本，在镜像名称后添加 -ee 后缀即可切换。

### 企业版

```sh
# 应用
registry.cn-shenzhen.aliyuncs.com/teable/teable-ee:latest
# 数据库初始化
registry.cn-shenzhen.aliyuncs.com/teable/teable-db-migrate-ee:latest
```

企业版可免费使用社区版包含的本全部功能，并支持使用 License 订阅企业版本独有功能，企业版功能可在[价格页面](https://app.teable.cn/setting/license-plan)查阅。企业版本数据与社区版本兼容，版本可以互相切换。

### 社区版

```sh
# 应用
registry.cn-shenzhen.aliyuncs.com/teable/teable:latest
# 数据库初始化
registry.cn-shenzhen.aliyuncs.com/teable/teable-db-migrate:latest
```

社区版是由开源代码构建出来的镜像，不包含企业版本的任何功能。数据与企业版兼容，可随时切换为企业版本。



详细部署方案

***

## 一键云部署 (推荐)

**适用规模：**&#x4EFB;意

| 优点          | 缺点     |
| ----------- | ------ |
| 无需任何配置，一键启动 | 依赖云服务商 |
| 可以弹性伸缩      |        |
| 运维简单        |        |

**系统要求**：

* 应用节点最低 1c/2g
* 数据库最低 1c/2g

#### Sealos

有免费额度，对国内支持友好，按量计费

[**一键部署企业版**](https://cloud.sealos.io/?openapp=system-template%3FtemplateName%3Dteable)


#### 阿里云计算巢
[![Deploy on AlibabaCloud ComputeNest](https://service-info-public.oss-cn-hangzhou.aliyuncs.com/computenest.svg)](https://computenest.console.aliyun.com/service/instance/create/default?ServiceName=Teable%20%E7%A4%BE%E5%8C%BA%E7%89%88)



### 下一步

[配置邮件服务](kai-shi-bu-shu.md#qi-yong-you-jian-fu-wu)





***



## Docker Compose 部署

**适用规模**：推荐 0-500人

| 优点    | 缺点        |
| ----- | --------- |
| 部署简单  | 单机部署，扩容繁琐 |
| 自主可控  |           |
| 灵活可配置 |           |



**服务器环境**

确保您的服务器满足以下基本要求：

* 操作系统：建议使用Linux发行版，如Ubuntu 20.04 LTS。
* 内存：至少4GB RAM。
* CPU：至少2核。
* 磁盘空间：至少40GB的可用空间。
* 网络：具有稳定的互联网连接，并允许必要的端口访问。

#### 先决条件

在开始之前，请确保您具备以下条件：

* 理解Docker和容器化原理的基本知识。
* 在您的机器上安装了Docker和Docker Compose。访问官方Docker文档了解安装指南。

### **安装 Docker**

```bash
# 下载最新版本的 Docker
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun


# 验证安装是否正确
docker --version
docker-compose --version
```

### 安装应用

#### 1. 创建 docker-compose 文件

进入服务器, 创建并进入 teable 文件夹

```bash
mkdir teable

cd teable
```

创建一个 `docker-compose.yaml`  以及一个 `.env` 文件，并粘贴下面内容，已使用国内镜像源以保证顺畅安装

```sh
vim docker-compose.yaml
```

#### **最小化部署：**

{% tabs %}
{% tab title="企业版" %}
docker-compose.yaml:

```yaml
version: '3.9'

services:
  teable:
    image: registry.cn-shenzhen.aliyuncs.com/teable/teable-ee:latest
    restart: always
    ports:
      - '3000:3000'
    volumes:
      - teable-data:/app/.assets:rw
    env_file:
      - .env
    environment:
      - NEXT_ENV_IMAGES_ALL_REMOTE=true
    networks:
      - teable
    depends_on:
      teable-db-migrate:
        condition: service_completed_successfully
      teable-cache:
        condition: service_healthy
    healthcheck:
      test: ['CMD', 'curl', '-f', 'http://localhost:3000/health']
      start_period: 5s
      interval: 5s
      timeout: 3s
      retries: 3

  teable-db:
    image: postgres:15.4
    restart: always
    ports:
      - '42345:5432'
    volumes:
      - teable-db:/var/lib/postgresql/data:rw
    environment:
      - POSTGRES_DB=${POSTGRES_DB}
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    networks:
      - teable
    healthcheck:
      test: ['CMD-SHELL', "sh -c 'pg_isready -U ${POSTGRES_USER} -d ${POSTGRES_DB}'"]
      interval: 10s
      timeout: 3s
      retries: 3

  teable-db-migrate:
    image: registry.cn-shenzhen.aliyuncs.com/teable/teable-db-migrate-ee:latest
    environment:
      - PRISMA_DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}
    networks:
      - teable
    depends_on:
      teable-db:
        condition: service_healthy

  teable-cache:
    image: registry.cn-shenzhen.aliyuncs.com/teable/redis:7.2.4
    restart: always
    expose:
      - '6379'
    volumes:
      - teable-cache:/data:rw
    networks:
      - teable
    command: redis-server --appendonly yes --requirepass ${REDIS_PASSWORD}
    healthcheck:
      test: ['CMD', 'redis-cli', '--raw', 'incr', 'ping']
      interval: 10s
      timeout: 3s
      retries: 3

networks:
  teable:
    name: teable-network

volumes:
  teable-db: {}
  teable-data: {}
  teable-cache: {}

```

.env:

```bash
# 替换下面默认密码, 推荐使用 8 位以上的强密码。
POSTGRES_PASSWORD=replace_this_password
REDIS_PASSWORD=replace_this_password
SECRET_KEY=replace_this_secret_key

# 请将下面替换为可公开访问的地址
PUBLIC_ORIGIN=http://127.0.0.1:3000

# ---------------------

# Postgres
POSTGRES_HOST=teable-db
POSTGRES_PORT=5432
POSTGRES_DB=teable
POSTGRES_USER=teable

# Redis
REDIS_HOST=teable-cache
REDIS_PORT=6379
REDIS_DB=0

# App
PRISMA_DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}
BACKEND_CACHE_PROVIDER=redis
BACKEND_CACHE_REDIS_URI=redis://default:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}/${REDIS_DB}
```


{% endtab %}

{% tab title="社区版" %}
{% hint style="info" %}
注意：社区版最小部署缺少 redis 无法直接升级企业版，建议增加 redis 组件（下方方案)
{% endhint %}

**不包括 Redis**

docker-compose.yaml:

```yaml
version: '3.9'

services:
  teable:
    image: registry.cn-shenzhen.aliyuncs.com/teable/teable:latest
    restart: always
    ports:
      - '3000:3000'
    volumes:
      - teable-data:/app/.assets:rw
    env_file:
      - .env
    environment:
      - NEXT_ENV_IMAGES_ALL_REMOTE=true
    networks:
      - teable
    depends_on:
      teable-db-migrate:
        condition: service_completed_successfully
    healthcheck:
      test: ['CMD', 'curl', '-f', 'http://localhost:3000/health']
      start_period: 5s
      interval: 5s
      timeout: 3s
      retries: 3

  teable-db:
    image: postgres:15.4
    restart: always
    ports:
      - '42345:5432'
    volumes:
      - teable-db:/var/lib/postgresql/data:rw
    environment:
      - POSTGRES_DB=${POSTGRES_DB}
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    networks:
      - teable
    healthcheck:
      test: ['CMD-SHELL', "sh -c 'pg_isready -U ${POSTGRES_USER} -d ${POSTGRES_DB}'"]
      interval: 10s
      timeout: 3s
      retries: 3

  teable-db-migrate:
    image: registry.cn-shenzhen.aliyuncs.com/teable/teable-db-migrate:latest
    environment:
      - PRISMA_DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}
    networks:
      - teable
    depends_on:
      teable-db:
        condition: service_healthy

networks:
  teable:
    name: teable-network

volumes:
  teable-db: {}
  teable-data: {}

```

.env:

```bash
# 替换下面默认密码, 推荐使用 8 位以上的强密码。
POSTGRES_PASSWORD=replace_this_password
SECRET_KEY=replace_this_secret_key

# 请将下面替换为可公开访问的地址
PUBLIC_ORIGIN=http://127.0.0.1:3000

# ---------------------

# Postgres
POSTGRES_HOST=teable-db
POSTGRES_PORT=5432
POSTGRES_DB=teable
POSTGRES_USER=teable

# App
PRISMA_DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}

```

***

**包括 Redis**

docker-compose-yam&#x6C;**:**

```yaml
version: '3.9'

services:
  teable:
    image: registry.cn-shenzhen.aliyuncs.com/teable/teable:latest
    restart: always
    ports:
      - '3000:3000'
    volumes:
      - teable-data:/app/.assets:rw
    env_file:
      - .env
    environment:
      - NEXT_ENV_IMAGES_ALL_REMOTE=true
    networks:
      - teable
    depends_on:
      teable-db-migrate:
        condition: service_completed_successfully
      teable-cache:
        condition: service_healthy
    healthcheck:
      test: ['CMD', 'curl', '-f', 'http://localhost:3000/health']
      start_period: 5s
      interval: 5s
      timeout: 3s
      retries: 3

  teable-db:
    image: registry.cn-shenzhen.aliyuncs.com/teable/postgres:15.4
    restart: always
    ports:
      - '42345:5432'
    volumes:
      - teable-db:/var/lib/postgresql/data:rw
    environment:
      - POSTGRES_DB=${POSTGRES_DB}
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    networks:
      - teable
    healthcheck:
      test: ['CMD-SHELL', "sh -c 'pg_isready -U ${POSTGRES_USER} -d ${POSTGRES_DB}'"]
      interval: 10s
      timeout: 3s
      retries: 3

  teable-db-migrate:
    image: registry.cn-shenzhen.aliyuncs.com/teable/teable-db-migrate:latest
    environment:
      - PRISMA_DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}
    networks:
      - teable
    depends_on:
      teable-db:
        condition: service_healthy

  teable-cache:
    image: registry.cn-shenzhen.aliyuncs.com/teable/redis:7.2.4
    restart: always
    expose:
      - '6379'
    volumes:
      - teable-cache:/data:rw
    networks:
      - teable
    command: redis-server --appendonly yes --requirepass ${REDIS_PASSWORD}
    healthcheck:
      test: ['CMD', 'redis-cli', '--raw', 'incr', 'ping']
      interval: 10s
      timeout: 3s
      retries: 3

networks:
  teable:
    name: teable-network

volumes:
  teable-db: {}
  teable-data: {}
  teable-cache: {}

```

env:

```bash
# 替换下面默认密码, 推荐使用 8 位以上的强密码。
POSTGRES_PASSWORD=replace_this_password
REDIS_PASSWORD=replace_this_password
SECRET_KEY=replace_this_secret_key

# 请将下面替换为可公开访问的地址
PUBLIC_ORIGIN=http://127.0.0.1:3000

# ---------------------

# Postgres
POSTGRES_HOST=teable-db
POSTGRES_PORT=5432
POSTGRES_DB=teable
POSTGRES_USER=teable

# Redis
REDIS_HOST=teable-cache
REDIS_PORT=6379
REDIS_DB=0

# App
PRISMA_DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}
BACKEND_CACHE_PROVIDER=redis
BACKEND_CACHE_REDIS_URI=redis://default:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}/${REDIS_DB}

```
{% endtab %}
{% endtabs %}

#### **增加存储服务（可选）：**

Teable 默认使用本地存储管理附件资源，可以添加 minio 或云存储来获取更强大、稳定的服务

{% tabs %}
{% tab title="docker-compose 增加 minio" %}
**docker-compose 增加 minio**

minio 提供了额外的存储管理界面（9001 端口）以及更强大的稳定的文件服务

docker-compose.yaml:

```yaml
version: '3.9'

services:
  # ...前面的内容
  teable-storage:
    image: registry.cn-shenzhen.aliyuncs.com/teable/minio:RELEASE.2024-02-17T01-15-57Z
    ports:
      - "9000:9000"
      - "9001:9001"
    environment:
      - MINIO_ACCESS_KEY=${MINIO_ACCESS_KEY}
      - MINIO_SECRET_KEY=${MINIO_SECRET_KEY}
    volumes:
      - teable-storage:/data:rw
    networks:
      - teable
    command: server /data --console-address ":9001"
  createbuckets:
    image: registry.cn-shenzhen.aliyuncs.com/teable/mc
    networks:
      - teable
    entrypoint: >
      /bin/sh -c "
      /usr/bin/mc alias set teable-storage http://teable-storage:9000 ${MINIO_ACCESS_KEY} ${MINIO_SECRET_KEY};
      /usr/bin/mc mb teable-storage/public;
      /usr/bin/mc anonymous set public teable-storage/public;
      /usr/bin/mc mb teable-storage/private;
      exit 0;
      "
    depends_on:
      teable-storage:
        condition: service_started

networks:
  teable:
    name: teable-network

volumes:
  teable-db: {}
  teable-cache: {}
  # 增加一个卷
  teable-storage: {}

```

.env:

```bash
# 替换下面默认密码, 推荐使用 8 位以上的强密码。
POSTGRES_PASSWORD=replace_this_password
REDIS_PASSWORD=replace_this_password
SECRET_KEY=replace_this_secret_key

# 如果启用 https，请将 PROTOCAL 设置为 https。
PROTOCAL=http
# 请将 PUBLIC_HOST 设置为当前部署的主机的 IP 或者域名。无法使用 localhost 或 127.0.0.1。
PUBLIC_HOST=192.168.x.x
# 请将最后端口修改为正式访问地址的端口，如 为 80 或 443 可去掉:和端口号。
PUBLIC_ORIGIN=${PROTOCAL}://${PUBLIC_HOST}:3000

# ---------------------

# Postgres
POSTGRES_HOST=teable-db
POSTGRES_PORT=5432
POSTGRES_DB=teable
POSTGRES_USER=teable

# Redis
REDIS_HOST=teable-cache
REDIS_PORT=6379
REDIS_DB=0

# Minio
MINIO_ACCESS_KEY=teable_minio_access
MINIO_SECRET_KEY=${SECRET_KEY}

# App
PRISMA_DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}
BACKEND_CACHE_PROVIDER=redis
BACKEND_CACHE_REDIS_URI=redis://default:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}/${REDIS_DB}
BACKEND_STORAGE_PROVIDER=minio
BACKEND_STORAGE_PUBLIC_BUCKET=public
BACKEND_STORAGE_PRIVATE_BUCKET=private
BACKEND_STORAGE_MINIO_USE_SSL=false # 如果启用 https 请修改该值为 true
BACKEND_STORAGE_MINIO_ENDPOINT=${PUBLIC_HOST}
BACKEND_STORAGE_MINIO_PORT=9000
BACKEND_STORAGE_MINIO_ACCESS_KEY=${MINIO_ACCESS_KEY}
BACKEND_STORAGE_MINIO_SECRET_KEY=${MINIO_SECRET_KEY}
STORAGE_PREFIX=${PROTOCAL}://${PUBLIC_HOST}:${BACKEND_STORAGE_MINIO_PORT}
```

**添加外部 minio**
{% endtab %}

{% tab title="连接外部 minio" %}
开始之前，你需要在 minio 上创建两个桶。一个公开桶存储头像和表单头图，一个私有桶用来存储附件内容。

.env:

```sh
# ...前面的内容
# 使用 minio provider
BACKEND_STORAGE_PROVIDER=minio
# 公共桶名称
BACKEND_STORAGE_PUBLIC_BUCKET=public
# 私有桶名称
BACKEND_STORAGE_PRIVATE_BUCKET=private
# minio 服务 endpoint ip 或域名
BACKEND_STORAGE_MINIO_ENDPOINT=minio.example.com
# minio 端口
BACKEND_STORAGE_MINIO_PORT=443
# minio access key
BACKEND_STORAGE_MINIO_ACCESS_KEY=_minio_access_key_
# minio secret key
BACKEND_STORAGE_MINIO_SECRET_KEY=_minio_secret_key_
# 完整的访问地址
STORAGE_PREFIX=https://minio.example.com
```
{% endtab %}

{% tab title="连接阿里云 oss" %}
开始之前，你需要在阿里云上创建两个桶。一个公开桶存储头像和表单头图，一个私有桶用来存储附件内容。

.env:

```sh
# ...前面的内容
# 使用 s3 标准 provider
BACKEND_STORAGE_PROVIDER: s3
# 可用区名称
BACKEND_STORAGE_S3_REGION: oss-cn-shenzhen
# 端点，注意要带上协议，一般是 https
BACKEND_STORAGE_S3_ENDPOINT: https://oss-cn-shenzhen.aliyuncs.com
# access key
BACKEND_STORAGE_S3_ACCESS_KEY: access_key
# secret key
BACKEND_STORAGE_S3_SECRET_KEY: secret_key
# 公共桶
BACKEND_STORAGE_PUBLIC_BUCKET: your-public-bucket
# 私有桶
BACKEND_STORAGE_PRIVATE_BUCKET: your-private-bucket

```

上述过程可适用于大部分云厂商，不仅限于阿里云
{% endtab %}
{% endtabs %}



#### 启动应用

在当前目录下执行启动应用，等待启动完毕访问 127.0.0.1:3000 即可进入应用

{% hint style="info" %}
注意如果未配置 https 则无法使用表格中的复制、粘贴功能。
{% endhint %}

```bash
docker-compose pull

docker-compose up -d
```



#### 使用托管的数据库（可选）

如果希望使用托管的数据库和，则可以进一步精简部署过程。

1. 删除 services.teable-db
2. 删除 service.teable-db-migrate.depends\_on
3. 删除 volumes.teable-db&#x20;
4. 更新 .env 替换为托管数据库的配置

**完整示例**&#x20;

`docker-compose.yaml`

{% tabs %}
{% tab title="企业版" %}
```sh
version: '3.9'

services:
  teable:
    image: registry.cn-shenzhen.aliyuncs.com/teable/teable-ee:latest
    restart: always
    ports:
      - '3000:3000'
    env_file:
      - .env
    environment:
      - NEXT_ENV_IMAGES_ALL_REMOTE=true
    networks:
      - teable
    depends_on:
      teable-db-migrate:
        condition: service_completed_successfully
      teable-cache:
        condition: service_healthy
    healthcheck:
      test: ['CMD', 'curl', '-f', 'http://localhost:3000/health']
      start_period: 5s
      interval: 5s
      timeout: 3s
      retries: 3

  teable-db-migrate:
    image: registry.cn-shenzhen.aliyuncs.com/teable/teable-db-migrate-ee:latest
    environment:
      - TZ=${TIMEZONE}
      - PRISMA_DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}
    networks:
      - teable

  teable-cache:
    image: registry.cn-shenzhen.aliyuncs.com/teable/redis:7.2.4
    restart: always
    expose:
      - '6379'
    volumes:
      - teable-cache:/data:rw
    networks:
      - teable
    command: redis-server --appendonly yes --requirepass ${REDIS_PASSWORD}
    healthcheck:
      test: ['CMD', 'redis-cli', '--raw', 'incr', 'ping']
      interval: 10s
      timeout: 3s
      retries: 3
networks:
  teable:
    name: teable-network
    driver: bridge

volumes:
  teable-cache: {}

```
{% endtab %}

{% tab title="社区版" %}
```shell
version: '3.9'

services:
  teable:
    image: registry.cn-shenzhen.aliyuncs.com/teable/teable:latest
    restart: always
    ports:
      - '3000:3000'
    env_file:
      - .env
    environment:
      - NEXT_ENV_IMAGES_ALL_REMOTE=true
    networks:
      - teable
    depends_on:
      teable-db-migrate:
        condition: service_completed_successfully
      teable-cache:
        condition: service_healthy
    healthcheck:
      test: ['CMD', 'curl', '-f', 'http://localhost:3000/health']
      start_period: 5s
      interval: 5s
      timeout: 3s
      retries: 3

  teable-db-migrate:
    image: registry.cn-shenzhen.aliyuncs.com/teable/teable-db-migrate-ee:latest
    environment:
      - TZ=${TIMEZONE}
      - PRISMA_DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}
    networks:
      - teable

  teable-cache:
    image: registry.cn-shenzhen.aliyuncs.com/teable/redis:7.2.4
    restart: always
    expose:
      - '6379'
    volumes:
      - teable-cache:/data:rw
    networks:
      - teable
    command: redis-server --appendonly yes --requirepass ${REDIS_PASSWORD}
    healthcheck:
      test: ['CMD', 'redis-cli', '--raw', 'incr', 'ping']
      interval: 10s
      timeout: 3s
      retries: 3
networks:
  teable:
    name: teable-network
    driver: bridge

volumes:
  teable-cache: {}

```
{% endtab %}
{% endtabs %}

**.env**

填写数据库参数为托管数据库的连接参数即可

```sh
POSTGRES_HOST=your-database.com
POSTGRES_PORT=5432
POSTGRES_DB=teable
POSTGRES_USER=teable
```

{% hint style="info" %}
注意`127.0.0.1` 为容器内网，如果你想连接本机部署的数据库 `POSTGRES_HOST` 请不要使用 `127.0.0.1` 而要是用 `host.docker.internal` 作为本机地址，否则将无法连接
{% endhint %}



**如果使用外部托管 redis 则同理**

* 删除 service.teable-cache
* 删除 service.teable.depends\_on.teable-cache
* 删除 volumes.teable-cache&#x20;
* 更新 .env 替换为托管redis的配置



### 下一步

[配置邮件服务](kai-shi-bu-shu.md#qi-yong-you-jian-fu-wu)

[配置外部数据库连接](kai-shi-bu-shu.md#qi-yong-wai-bu-shu-ju-ku-lian-jie-gong-neng)



***



## Kubernetes (K8s) 集群部署

**适用规模**：不受限

| 优点      | 缺点        |
| ------- | --------- |
| 可以弹性伸缩  | 需要 k8s 环境 |
| 容灾能力强   | 初始资源要求高   |
| 支持广泛的配置 |           |

**集群部署仅支持企业版100人以上 License 计划，请**[**联系我们**](https://app.teable.cn/share/shrg1ljiQXm4goJ7Cu9/view)**获取定制方案**



***



## 启用邮件服务

启用邮件服务可以开启站内的邮件通知，用户自助修改密码等功能，请根据邮件服务提供商的信息配置如下环境变量启用邮件服务

```
BACKEND_MAIL_HOST=mail.example.com
BACKEND_MAIL_PORT=465
BACKEND_MAIL_SECURE=true
BACKEND_MAIL_SENDER=noreply@company.com
BACKEND_MAIL_SENDER_NAME=noreply
BACKEND_MAIL_AUTH_USER=username
BACKEND_MAIL_AUTH_PASS=usertoken
```

## 启用外部数据库连接功能

<figure><img src="../.gitbook/assets/image (88).png" alt="" width="375"><figcaption></figcaption></figure>

Teable 可以在应用中自动创建数据库角色允许外部应用对表格数据的安全访问功能，要启用此功能，需要额外配置 `PUBLIC_DATABASE_PROXY` 环境变量

要将该参数配置为外部可访问的数据库 ip 或域名 + 端口号。如果你使用前面的 docker-compose 部署，则外部访问端口为 45432。其他方式请根据具体配置来进行

```
PUBLIC_DATABASE_PROXY=db-proxy.example.com:port
```



## 更多环境变量配置

[环境变量](huan-jing-bian-liang.md)



***



## 支持与反馈

如果您在部署过程中遇到任何问题，请联系我们的支持团队 support@teable.io 或[提交 issue](https://github.com/teableio/teable/issues)。

## 许可证

Teable 社区版本在 AGPL-3.0 协议下开源。企业版本请[联系我们](https://app.teable.cn/share/shrg1ljiQXm4goJ7Cu9/view)获取商业许可。
