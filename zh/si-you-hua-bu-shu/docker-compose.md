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

### 安装

```sh
# To install the latest stable versions of Docker CLI, Docker Engine, and their

# 1. download the script
$ curl -fsSL https://get.docker.com -o install-docker.sh

# 2. verify the script's content
$ cat install-docker.sh

# 3. (Optional) run the script with --dry-run to verify the steps it executes
$ sh install-docker.sh --dry-run

# 4. run the script either as root, or using sudo to perform the installation.
$ sudo sh install-docker.sh

# 5. verify the installation and output version information
$ docker --version
$ docker-compose --version
```

### 配置&#x20;

### 获取Docker Compose配置文件

本指南将使用Teable项目的Docker Compose配置示例。首先，您需要从GitHub获取配置文件：

```sh
curl -O https://raw.githubusercontent.com/teableio/teable/develop/dockers/examples/cluster/docker-compose.yaml
```

### 部署

配置好`docker-compose.yml`后，通过运行以下命令部署您的应用程序：

```sh
docker-compose up -d
```

此命令以分离模式启动应用程序，在后台运行。

### 管理

要管理您的Docker Compose部署，请使用以下命令：

* 查看正在运行的服务：`docker-compose ps`
* 停止服务：`docker-compose down`
* 在更改配置后更新服务：`docker-compose up -d --no-deps --pull <service_name>`

\
