# 环境变量



### 安全配置

<table><thead><tr><th width="331.3333333333333">变量名</th><th>描述</th><th>默认值</th></tr></thead><tbody><tr><td>NEXT_ENV_IMAGES_ALL_REMOTE</td><td>是否允许优化所有远程图像，以防止恶意使用</td><td>false</td></tr></tbody></table>



### 后端配置

<table><thead><tr><th width="379.3333333333333">变量名</th><th width="211">描述</th><th>默认值</th></tr></thead><tbody><tr><td>PUBLIC_ORIGIN</td><td>服务访问地址<br>http://127.0.0.1:3000</td><td></td></tr><tr><td>API_DOC_DISENABLED</td><td>是否禁用api文档</td><td>false</td></tr><tr><td></td><td></td><td></td></tr><tr><td>PRISMA_DATABASE_URL</td><td>数据库URL</td><td></td></tr><tr><td>PUBLIC_DATABASE_ADDRESS</td><td>用于外部数据库访问</td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td>BACKEND_CACHE_PROVIDER</td><td>缓存存储模式:<br>memory<br>sqlite<br>redis</td><td>sqlite</td></tr><tr><td>BACKEND_CACHE_REDIS_URI</td><td>redis必填，redis连接地址:<br>redis://:password@127.0.0.1:6380/4<br>redis://username:password@127.0.0.1:6380/4</td><td></td></tr><tr><td>BACKEND_CACHE_SQLITE_URI</td><td>sqlite必填，sqlite连接地址</td><td>sqlite://.assets/.cache.db</td></tr><tr><td></td><td></td><td></td></tr><tr><td>BACKEND_MAIL_HOST</td><td><p>需要发送邮件时填写如下</p><p>邮件服务 HOST</p></td><td></td></tr><tr><td>BACKEND_MAIL_PORT</td><td>邮件服务 PORT</td><td>465</td></tr><tr><td>BACKEND_MAIL_SECURE</td><td>使用 TLS/STARTTLS 安全发送电子邮件</td><td>true</td></tr><tr><td>BACKEND_MAIL_SENDER</td><td>发件人地址</td><td></td></tr><tr><td>BACKEND_MAIL_SENDER_NAME</td><td>发件人名称</td><td></td></tr><tr><td>BACKEND_MAIL_AUTH_USER</td><td>邮件服务账号</td><td></td></tr><tr><td>BACKEND_MAIL_AUTH_PASS</td><td>邮件服务密码<br>一般不是直接 web 登录密码，是独立设置的邮件授权码</td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td>BACKEND_STORAGE_PROVIDER</td><td>对象存储模式:<br>local<br>minio</td><td>local</td></tr><tr><td>BACKEND_STORAGE_PUBLIC_BUCKET</td><td>公开资源桶名</td><td>public</td></tr><tr><td>BACKEND_STORAGE_PRIVATE_BUCKET</td><td>私有资源桶名</td><td>private</td></tr><tr><td>BACKEND_STORAGE_LOCAL_PATH</td><td>local模式必填，</td><td>.assets/uploads</td></tr><tr><td>BACKEND_STORAGE_MINIO_ENDPOINT</td><td>mino模式必填，minio服务域名</td><td></td></tr><tr><td>BACKEND_STORAGE_MINIO_PORT</td><td>mino模式必填，minio服务端口</td><td>9000</td></tr><tr><td>BACKEND_STORAGE_MINIO_USE_SSL</td><td>mino模式必填，使用https?</td><td>false</td></tr><tr><td>BACKEND_STORAGE_MINIO_ACCESS_KEY</td><td>mino模式必填，minio用户名</td><td></td></tr><tr><td>BACKEND_STORAGE_MINIO_SECRET_KEY</td><td>mino模式必填，minio密码</td><td></td></tr><tr><td>STORAGE_PREFIX</td><td>预览资源前缀地址<br>local: 非必填，<br>minio: minio服务域名+端口</td><td></td></tr></tbody></table>

