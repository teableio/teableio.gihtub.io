---
description: All configurable environment variables
---

# Environment Variables

#### Security Configuration

| Variable Name                  | Description                                                                 | Default Value |
| ------------------------------ | --------------------------------------------------------------------------- | ------------- |
| NEXT\_ENV\_IMAGES\_ALL\_REMOTE | Whether to allow optimization of all remote images to prevent malicious use | false         |

#### Backend Configuration

| Variable Name                        | Description                                                                                                                                          | Default Value              |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| PUBLIC\_ORIGIN                       | <p>Service access address<br>http://127.0.0.1:3000</p>                                                                                               |                            |
| API\_DOC\_DISENABLED                 | Whether to disable API documentation                                                                                                                 | false                      |
| PRISMA\_DATABASE\_URL                | Database URL                                                                                                                                         |                            |
| PUBLIC\_DATABASE\_PROXY              | The public IP address of the server hosting the database + the database service port exposed by Docker (default is 42345) Example: 10.10.10.10:42345 |                            |
| BACKEND\_CACHE\_PROVIDER             | <p>Cache storage mode:<br>memory<br>sqlite<br>redis</p>                                                                                              | sqlite                     |
| BACKEND\_CACHE\_REDIS\_URI           | <p>Required for redis, redis connection address:<br>redis://:password@127.0.0.1:6380/4<br>redis://username:password@127.0.0.1:6380/4</p>             |                            |
| BACKEND\_CACHE\_SQLITE\_URI          | Required for sqlite, sqlite connection address                                                                                                       | sqlite://.assets/.cache.db |
| BACKEND\_MAIL\_HOST                  | <p>Fill in the following when needing to send emails<br>Email service HOST</p>                                                                       |                            |
| BACKEND\_MAIL\_PORT                  | Email service PORT                                                                                                                                   | 465                        |
| BACKEND\_MAIL\_SECURE                | Use TLS/STARTTLS to securely send emails                                                                                                             | true                       |
| BACKEND\_MAIL\_SENDER                | Sender's address                                                                                                                                     |                            |
| BACKEND\_MAIL\_SENDER\_NAME          | Sender's name                                                                                                                                        |                            |
| BACKEND\_MAIL\_AUTH\_USER            | Email service account                                                                                                                                |                            |
| BACKEND\_MAIL\_AUTH\_PASS            | <p>Email service password<br>Usually not the web login password, but a separate email authorization code set</p>                                     |                            |
| BACKEND\_STORAGE\_PROVIDER           | <p>Object storage mode:<br>local<br>minio</p>                                                                                                        | local                      |
| BACKEND\_STORAGE\_PUBLIC\_BUCKET     | Public resource bucket name                                                                                                                          | public                     |
| BACKEND\_STORAGE\_PRIVATE\_BUCKET    | Private resource bucket name                                                                                                                         | private                    |
| BACKEND\_STORAGE\_LOCAL\_PATH        | Required for local mode,                                                                                                                             | .assets/uploads            |
| BACKEND\_STORAGE\_MINIO\_ENDPOINT    | Required for mino mode, minio service domain                                                                                                         |                            |
| BACKEND\_STORAGE\_MINIO\_PORT        | Required for mino mode, minio service port                                                                                                           | 9000                       |
| BACKEND\_STORAGE\_MINIO\_USE\_SSL    | Required for mino mode, use https?                                                                                                                   | false                      |
| BACKEND\_STORAGE\_MINIO\_ACCESS\_KEY | Required for mino mode, minio username                                                                                                               |                            |
| BACKEND\_STORAGE\_MINIO\_SECRET\_KEY | Required for mino mode, minio password                                                                                                               |                            |
| STORAGE\_PREFIX                      | <p>Preview resource prefix address<br>local: Not required,<br>minio: minio service domain + port</p>                                                 |                            |
