---
description: >-
  This guide will help you upgrade Teable from the docker-standalone to the
  enterprise version. The new version introduces significant changes, including
  the use of Redis as a cache and changes to image
---

# Migrating from docker-standalone to Teable Enterprise

### 1. Backup Your Data

Before starting the upgrade, make sure to backup your data:

### 2. Update docker-compose.yaml

Replace your old docker-compose.yaml with the following:

```yaml
version: '3.9'

services:
  teable:
    image: ghcr.io/teableio/teable-ee:latest
    restart: always
    ports:
      - '3000:3000'
    volumes:
      - teable-data:/app/.assets:rw
      # you may use a bind-mounted host directory instead,
      # so that it is harder to accidentally remove the volume and lose all your data!
      # - ./docker/teable/data:/app/.assets:rw
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
      # you may use a bind-mounted host directory instead,
      # so that it is harder to accidentally remove the volume and lose all your data!
      # - ./docker/db/data:/var/lib/postgresql/data:rw
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
    image: ghcr.io/teableio/teable-db-migrate-ee:latest
    environment:
      - PRISMA_DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}
    networks:
      - teable
    depends_on:
      teable-db:
        condition: service_healthy

  teable-cache:
    image: redis:7.2.4
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
  teable-data: {}
  teable-db: {}
  teable-cache: {}

```

Key changes:

1. Added `teable-cache` service (Redis).
2. Network name changed to `teable`.
3. Added `teable-cache` volume.
4. Added healthcheck for `teable` service.
5. Updated image names to `-ee` versions.

### 3. Update .env File

&#x20;Append the following new variables to your existing .env file:

```env
# Redis
REDIS_HOST=teable-cache
REDIS_PORT=6379
REDIS_DB=0
REDIS_PASSWORD=replace_this_password

BACKEND_CACHE_PROVIDER=redis
BACKEND_CACHE_REDIS_URI=redis://default:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}/${REDIS_DB}
```

### 5. Pull New Images

Before starting the new version, pull the latest images:

```bash
docker-compose pull
```

### 6. Start the New Version

Run the following commands to start the new version:

```bash
docker-compose down
docker-compose up -d
```

### 7. Verify the Upgrade

Access `http://127.0.0.1:3000` to ensure the application is running correctly.

### Important Notes

1. Ensure all important data is backed up before upgrading.
2. Carefully check the configurations in the .env file, especially the Redis password.
3. If you had custom environment variables or configurations, make sure to include them in the new setup.
4. After upgrading, closely monitor the application to ensure all features are working correctly.

By following these steps, you should be able to successfully upgrade Teable to the new version. If you encounter any issues, please check the logs or contact the support team.
