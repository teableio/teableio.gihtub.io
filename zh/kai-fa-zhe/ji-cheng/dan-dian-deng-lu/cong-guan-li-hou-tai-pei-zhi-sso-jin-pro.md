---
description: 专业版及以上空间站，公有云版本与私有化版本均支持
---

# 从管理后台配置 SSO （仅 PRO)

支持的 SSO Provider

* 标准OIDC
* 飞书

## OIDC

[参靠通用环境变量配置](dian-dan-deng-lu.md)

## 飞书

### 1. 进入飞书创建自建应用

**飞书客户端 -> 工作台 -> 创建应用**

得到 App ID 和 App Secret

<figure><img src="../../../.gitbook/assets/image (4) (1).png" alt=""><figcaption></figcaption></figure>

### 2. 进入 Teable 创建认证提供商

**公有云版本 (app.teable.cn)  -> 空间 -> 空间设置 -> 认证设置**

> 需要空间可管理权限

<figure><img src="../../../.gitbook/assets/image (3).png" alt="" width="319"><figcaption></figcaption></figure>

或

**私有部署环境 -> 管理面板 -> 认证设置**

> 需要实例管理员账号



<figure><img src="../../../.gitbook/assets/image (4).png" alt="" width="317"><figcaption></figcaption></figure>

#### 填写 APP ID, APP Secret

第一步创建飞书自建应用的时候可以得到这两个值

<figure><img src="../../../.gitbook/assets/image (6).png" alt="" width="563"><figcaption></figcaption></figure>

**点击复制，得到 providerId 备用**

<figure><img src="../../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

### 3. 回到飞书自建应用进行配置

#### 3.1 权限设置

开发配置 -> 权限管理

搜索勾选

`contact:user.base:readonly`

`contact:user.email:readonly`

#### 3.2 安全设置

开发配置 -> 安全设置

重定向 URL：&#x20;

`https://app.teable.cn/api/auth/authentication/__providerId__/callback`

{% hint style="info" %}
将 `__providerId__` 其替换为第二步复制来的 providerId



私有化按本请将 `app.teable.cn 替换成私有化实力的域名或 IP`
{% endhint %}

#### 3.3 网页应用设置

应用能力 -> 网页应用

网页应用配置，点击设置

{% tabs %}
{% tab title="为公有云设置" %}
桌面端主页，移动端主页：

`https://app.teable.cn/auth/login?spaceId=spcxxxxxxx`

注意将 spexxxxxxx 替换成您的 [spaceId](../../api/huo-qu-id.md#spaceid)
{% endtab %}

{% tab title="为私有化版本设置" %}
桌面端主页，移动端主页：

设置为您的私有化实例访问的 URL，比如 `https://your-teable.com`
{% endtab %}
{% endtabs %}



### 访问登录链接

公有云登录链接需要带上您的 `spaceId`

例如`https://app.teable.cn/auth/login?spaceId=spcxxxxxxxx`这时候登录页面就会出现添加的飞书登录的登录按钮



私有化直接访问应用 URL 即可展示登陆按钮



<figure><img src="../../../.gitbook/assets/image (3) (1).png" alt="" width="375"><figcaption></figcaption></figure>
