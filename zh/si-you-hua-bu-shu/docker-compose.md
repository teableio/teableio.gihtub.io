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
curl -O https://teable.cn/config/docker-compose.yaml
```

### 配置环境变量

1\. 创建 .env 文件



### 启动

下载好`docker-compose.yml`后，在文件所在目录运行以下命令部署您的应用程序：

```sh
docker-compose up -d
```

此命令以分离模式启动应用程序，在后台运行。

### 访问应用

应用将可在本机 80 端口被访问到

### 管理

要管理您的Docker Compose部署，请使用以下命令：

* 查看正在运行的服务：`docker-compose ps`
* 停止服务：`docker-compose down`
* 在更改配置后更新服务：`docker-compose up -d --no-deps --pull <service_name>`

### 更新镜像

```bash
# 1. 拉取最新镜像
docker-compose pull

# 2. 重启容器
docker-compose up -d

```

