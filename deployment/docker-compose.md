---
description: Start teable with docker
---

# Docker Compose

#### Prerequisites

Before you begin, ensure you have the following:

* Basic knowledge of Docker and containerization principles.
* Docker and Docker Compose installed on your machine. Visit the official Docker documentation for installation guidance.

#### Preparation

**Server Environment**

Ensure your server meets the following minimum requirements:

* Operating System: Linux distributions such as Ubuntu 20.04 LTS are recommended.
* Memory: At least 4GB RAM.
* CPU: At least 2 cores.
* Disk Space: At least 40GB of available space.
* Network: A stable internet connection and allowed necessary port access.

**Installing Docker and Docker Compose**

Refer to the "Installation" section guide to install Docker and Docker Compose on your server.

#### Installing Docker

```sh
# Download the latest version of Docker

# 1. Download the script
$ curl -fsSL https://get.docker.com -o install-docker.sh

# 2. Check if the script is correct
$ cat install-docker.sh

# 3. Perform a dry run
$ sh install-docker.sh --dry-run

# 4. Execute the installation process
$ sudo sh install-docker.sh

# 5. Verify the installation is correct
$ docker --version
$ docker-compose --version
```

#### Configuring Project Docker

We offer two Docker deployment methods:

* **Standalone Mode**: Ideal for individual use. This mode allows launching a Teable instance that only depends on Postgres, with minimal requirements.
  * **Minimum Configuration**: 2 CPUs, 2GB RAM
* **Swarm Mode**: Suitable for team use. This mode introduces Redis for caching and Minio for file services.
  * **Recommended Minimum Configuration**: 2 CPUs, 4GB RAM

***

#### Obtaining Docker Compose Configuration File

First, you need to download this configuration file to your server

```bash
# Clone project
$ git clone --depth 1 https://github.com/teableio/teable

# Copy docker-swarm example
# *OR* change change `docker-swarm` to `standalone`
$ cp -r teable/dockers/examples/docker-swarm/ teable-docker/

# Enter docker folder
$ cd teable-docker

# Modify .env as needed
$ vim .env
```



#### Starting

{% hint style="info" %}
How to match .env? Refer to: Environment Variables

When deploying using the template, you need to manually update the `.env` file in the template, including at least changing the `<MINIO_ENDPOINT>` placeholder
{% endhint %}

After configuring `.env`, run the following command to deploy your application:

```sh
docker-compose up -d
```

This command starts the application in detached mode, running in the background.

#### Accessing the Application

The default port is 80, access the Teable interface through http://\<IP\_ADDRESS>

#### Management

To manage your Docker Compose deployment, use the following commands:

* View running services: `docker-compose ps`
* View service logs:
  * `docker-compose logs -f`
  * `docker-compose logs -f -n 200`
  * `docker-compose logs -f -n 200 <service_name>`
* Stop services: `docker-compose down`
* Update services after changing the configuration: `docker-compose up -d --no-deps <service_name>`

#### Updating Images

```bash
# 1. Pull the latest images
docker-compose pull

# 2. Restart containers
docker-compose up -d

```
