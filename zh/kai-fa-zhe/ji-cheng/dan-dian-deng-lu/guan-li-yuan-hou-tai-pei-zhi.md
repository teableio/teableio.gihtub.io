---
description: 自部署专业版及以上用户
---

# 管理员后台配置

支持的 SSO Provider

* 标准OIDC
* 飞书

### 进入空间站设置

<figure><img src="../../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

### 创建认证提供商

以飞书为例，需要先去飞书创建自建应用

<figure><img src="../../../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

1. 需要开通以下权限



`contact:user.base:readonly`

`contact:user.email:readonly`

2. 填入飞书应用的 App ID 和 App Secret 进行安全设置
3. 进行安全设置

重定向 URL： `https://app.teable.cn/api/auth/authentication/{providerId}/callback`

`providerId` 点击复制获取

<figure><img src="../../../.gitbook/assets/image (107).png" alt="" width="373"><figcaption></figcaption></figure>

3. 配置飞书网页应用

进入飞书开放平台的开发者后台 -> 点击添加应用能力 -> 点击添加网页应用 -> 将主页配置为 `https://app.teable.cn`

### 访问登录链接

例如`https://app.teable.cn/auth/login`

这时候登录页面就会出现添加的飞书登录的登录按钮

<figure><img src="../../../.gitbook/assets/image (3).png" alt="" width="375"><figcaption></figcaption></figure>

