---
description: All configurable environment variables
---

# Environment Variables

| Environment Variable                         | Description                                                                                       | Default Value    | Required | Example                                          |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------- | -------- | ------------------------------------------------ |
| PUBLIC\_ORIGIN                               | Public origin for generating full URLs, must be set to your application's access address          | -                | Yes      | https://app.teable.io                            |
| SECRET\_KEY                                  | Key for JWT, sessions, and sharing; use a strong password                                         | defaultSecretKey | Yes      | yourStrongSecretKey                              |
| PRISMA\_DATABASE\_URL                        | Database connection URL, must be configured                                                       | -                | Yes      | postgresql://teable:teable@127.0.0.1:5432/teable |
| BACKEND\_STORAGE\_PROVIDER                   | Storage provider, options: local, minio, s3                                                       | local            | -        | s3                                               |
| BACKEND\_STORAGE\_S3\_REGION                 | S3 cloud storage region, required when BACKEND\_STORAGE\_PROVIDER is s3                           | -                | -        | us-east-2                                        |
| BACKEND\_STORAGE\_S3\_ENDPOINT               | S3 cloud storage endpoint, required when BACKEND\_STORAGE\_PROVIDER is s3                         | -                | -        | https://s3.us-east-2.amazonaws.com               |
| BACKEND\_STORAGE\_S3\_ACCESS\_KEY            | S3 cloud storage access key, required when BACKEND\_STORAGE\_PROVIDER is s3                       | -                | -        | your\_access\_key                                |
| BACKEND\_STORAGE\_S3\_SECRET\_KEY            | S3 cloud storage secret key, required when BACKEND\_STORAGE\_PROVIDER is s3                       | -                | -        | your\_secret\_key                                |
| BACKEND\_CACHE\_PROVIDER                     | Cache provider, options: sqlite, memory, redis                                                    | sqlite           | -        | redis                                            |
| BACKEND\_CACHE\_REDIS\_URI                   | Redis cache connection URI, required when BACKEND\_CACHE\_PROVIDER is redis                       | -                | -        | redis://default:teable@127.0.0.1:6379/0          |
| MICROSOFT\_CLARITY\_ID                       | Microsoft Clarity metrics ID, used to enable Microsoft Clarity analytics                          | -                | -        | your-metrics-id                                  |
| UMAMI\_WEBSITE\_ID                           | Umami website ID, used to enable Umami  analytics                                                 |                  |          | your-umami-website-id                            |
| UMAMI\_URL                                   | Umami script url, required if you enabled umami                                                   |                  |          | https://umami.example.com/script.js              |
| TEMPLATE\_SPACE\_ID                          | Space ID where template base is located, used for basic information in template center operations | -                | -        | your-template-space-id                           |
| TEMPLATE\_SITE\_LINK                         | Template site link, must be set to enable creation from templates                                 | -                | -        | https://template.teable.io                       |
| PORT                                         | Port on which the application runs                                                                | 3000             | -        | 3000                                             |
| LOG\_LEVEL                                   | Log level, options: fatal, error, warn, info, debug, trace                                        | info             | -        | debug                                            |
| ENABLE\_GLOBAL\_ERROR\_LOGGING               | Whether to enable 4xx error logging                                                               | false            | -        | true                                             |
| PUBLIC\_DATABASE\_PROXY                      | External database access proxy, configure to enable external access to space databases            | -                | -        | 127.0.0.1:5432                                   |
| API\_DOC\_DISENABLED                         | Whether to disable API documentation                                                              | false            | -        | true                                             |
| BACKEND\_GITHUB\_CLIENT\_ID                  | GitHub OAuth client ID                                                                            | -                | -        | github\_client\_id                               |
| BACKEND\_GITHUB\_CLIENT\_SECRET              | GitHub OAuth client secret                                                                        | -                | -        | github\_client\_secret                           |
| BACKEND\_GOOGLE\_CLIENT\_ID                  | Google OAuth client ID                                                                            | -                | -        | google\_client\_id                               |
| BACKEND\_GOOGLE\_CLIENT\_SECRET              | Google OAuth client secret                                                                        | -                | -        | google\_client\_secret                           |
| BACKEND\_GOOGLE\_CALLBACK\_URL               | Google OAuth callback URL                                                                         | -                | -        | https://app.teable.io/api/auth/google/callback   |
| BACKEND\_OIDC\_CLIENT\_ID                    | OIDC client ID                                                                                    | -                | -        | google\_client\_id                               |
| BACKEND\_OIDC\_CLIENT\_SECRET                | OIDC client secret                                                                                | -                | -        | google\_client\_secret                           |
| BACKEND\_OIDC\_CALLBACK\_URL                 | OIDC callback URL                                                                                 | -                | -        | https://app.teable.io/api/auth/oidc/callback     |
| BACKEND\_OIDC\_USER\_INFO\_URL               | OIDC user info URL                                                                                | -                | -        | https://openidconnect.googleapis.com/v1/userinfo |
| BACKEND\_OIDC\_TOKEN\_URL                    | OIDC token URL                                                                                    | -                | -        | https://oauth2.googleapis.com/token              |
| BACKEND\_OIDC\_AUTHORIZATION\_URL            | OIDC authorization URL                                                                            | -                | -        | https://accounts.google.com/o/oauth2/auth        |
| BACKEND\_OIDC\_ISSUER                        | OIDC issuer URL                                                                                   | -                | -        | https://accounts.google.com                      |
| BACKEND\_OIDC\_OTHER                         | OIDC other configurations, in JSON format                                                         | -                | -        | {"scope": \["email", "profile"]}                 |
| SOCIAL\_AUTH\_PROVIDERS                      | List of social authentication providers, separated by commas                                      | -                | -        | github,google,oidc                               |
| BACKEND\_MAIL\_HOST                          | Mail server host                                                                                  | -                | -        | smtp.gmail.com                                   |
| BACKEND\_MAIL\_PORT                          | Mail server port                                                                                  | -                | -        | 465                                              |
| BACKEND\_MAIL\_SECURE                        | Whether to use secure connection                                                                  | -                | -        | true                                             |
| BACKEND\_MAIL\_SENDER                        | Sender's email address                                                                            | -                | -        | noreply@company.com                              |
| BACKEND\_MAIL\_SENDER\_NAME                  | Sender's name                                                                                     | -                | -        | noreply                                          |
| BACKEND\_MAIL\_AUTH\_USER                    | Mail server authentication username                                                               | -                | -        | username                                         |
| BACKEND\_MAIL\_AUTH\_PASS                    | Mail server authentication password                                                               | -                | -        | usertoken                                        |
| BACKEND\_SESSION\_EXPIRES\_IN                | Session expiration time                                                                           | 7d               | -        | 7d                                               |
| BACKEND\_SESSION\_SECRET                     | Session secret, uses SECRET\_KEY if not set                                                       | SECRET\_KEY      | -        | your\_session\_secret                            |
| BACKEND\_JWT\_EXPIRES\_IN                    | JWT expiration time                                                                               | 20d              | -        | 20d                                              |
| BACKEND\_JWT\_SECRET                         | JWT secret, uses SECRET\_KEY if not set                                                           | SECRET\_KEY      | -        | your\_jwt\_secret                                |
| BACKEND\_RESET\_PASSWORD\_EMAIL\_EXPIRES\_IN | Reset password email expiration time                                                              | 30m              | -        | 30m                                              |
| MAX\_UNDO\_STACK\_SIZE                       | the undo redo stack size                                                                          | 200              |          | 200                                              |
| UNDO\_EXPIRATION\_TIME                       | the undo redo expiration time (s)                                                                 | 86400            |          | 86400                                            |