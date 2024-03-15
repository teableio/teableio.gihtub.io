---
description: 本指南旨在详细介绍如何使用Docker Compose进行应用程序的私有部署，重点介绍了设置、配置和管理过程，以便开发者使用。
---

# docker-compose

### 先决条件

在开始之前，请确保您具备以下条件：

* 理解Docker和容器化原理的基本知识。
* 在您的机器上安装了Docker和Docker Compose。访问官方Docker文档了解安装指南。

### 准备工作

#### 服务器环境

确保您的服务器满足以下基本要求：

* 操作系统：建议使用Linux发行版，如Ubuntu 20.04 LTS。
* 内存：至少4GB RAM。
* CPU：至少2核。
* 磁盘空间：至少40GB的可用空间。
* 网络：具有稳定的互联网连接，并允许必要的端口访问。

#### 安装Docker和Docker Compose

请参照“安装”部分的指南，在您的服务器上安装Docker和Docker Compose。

### 安装 Docker

```sh
# 下载最新版本的 Docker

# 1. 下载脚本
$ curl -fsSL https://get.docker.com -o install-docker.sh

# 2. 看下脚本是不是正确
$ cat install-docker.sh

# 3. 执行一次校验
$ sh install-docker.sh --dry-run

# 4. 执行安装过程
$ sudo sh install-docker.sh

# 5. 验证安装是否正确
$ docker --version
$ docker-compose --version
```

### 配置项目 Docker&#x20;

### 获取Docker Compose配置文件

本指南将使用Teable项目的Docker Compose配置示例。首先，您需要下载此配置文件到服务器上

```bash
curl -O https://sss.teable.cn/dev-ops/templates/docker-compose.tar.gz
```

### 配置项目环境

```sh
# 1.创建数据目录
mkdir -p /teable

# 2.获取Docker Compose并且解压
curl -O https://sss.teable.cn/dev-ops/templates/docker-compose.tar.gz
tar -xvzf docker-compose.tar.gz -C /teable

# 3.根据需要修改.env
cd /teable/docker-compose
cat .env
```

### 启动

{% hint style="info" %}
如何匹配.env? 参考: [环境变量](huan-jing-bian-liang.md)

当使用模板进行部署时，您需要手动更新模板的 `.env` 文件，至少包括修改 `<MINIO_ENDPOINT>` 占位符
{% endhint %}

配置好`.env`后，运行以下命令部署您的应用程序：

```sh
docker-compose up -d
```

此命令以分离模式启动应用程序，在后台运行。



### 访问应用

端口默认为80，通过http://\<IP\_ADDRESS>访问Teable界面



### 管理

要管理您的Docker Compose部署，请使用以下命令：

* 查看正在运行的服务：`docker-compose ps`
* 查看服务日志：
  * `docker-compose logs -f`
  * `docker-compose logs -f -n 200`
  * `docker-compose logs -f -n 200 <service_name>`
* 停止服务：`docker-compose down`
* 在更改配置后更新服务：`docker-compose up -d --no-deps <service_name>`



### 更新镜像

```bash
# 1. 拉取最新镜像
docker-compose pull

# 2. 重启容器
docker-compose up -d

```

