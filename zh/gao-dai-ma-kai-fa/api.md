# API

欢迎使用Teable API！Teable提供强大的API，支持几乎所有产品功能，允许开发者通过API Token调用。本文档将指导您如何获取API Token，并使用我们的Swagger和Redoc界面来访问和测试API。

### 获取API Token

为了使用Teable的API，您需要先获取一个API Token。请按照以下步骤操作：

1. 登录您的Teable账户。
2. 点击左下角的头像，进入您的个人设置。
3. 点击“设置”按钮。
4. 在设置菜单中，找到并点击“获取Access Token”。
5. 配置您的Token权限。根据您的需求选择合适的权限设置。
6. 点击生成Token，您的API Token将被创建。

请妥善保管您的API Token，不要泄露给他人，以保证账户的安全。

### API 文档

Teable提供了Swagger和Redoc两种界面，以便于开发者查看和测试API。

#### Swagger界面

Swagger界面提供了一个交互式的API文档，您可以在其中直接测试API调用。

* 访问地址：[Swagger文档](https://app.teable.io/docs)

在Swagger界面中，您可以找到所有可用的API端点，查看它们的详细信息和参数要求，并直接执行测试请求。

#### Redoc界面

Redoc界面提供了一个更为简洁和易于阅读的API文档版本。

* 访问地址：[Redoc文档](https://app.teable.io/redocs)

通过Redoc界面，您可以浏览所有API端点的文档，了解如何使用它们，但不能在此界面中直接测试API。

### 示例请求

以下是使用curl进行API请求的一个示例：

```bash
curl -X GET "https://app.teable.io/api/example-endpoint" \
     -H "Authorization: Bearer YOUR_API_TOKEN" \
     -H "Accept: application/json"
```

请将`YOUR_API_TOKEN`替换为您的实际API Token。

### 结论

通过Teable API，您可以轻松地集成和扩展Teable的功能。确保按照文档准确地使用API，并妥善保管您的API Token。

如果在使用过程中遇到任何问题或需要技术支持，请通过我们的支持渠道联系我们。我们非常乐意帮助您解决问题，确保您能够充分利用Teable提供的强大功能。

### 常见问题解答

#### Q: API Token的权限应该如何设置？

A: API Token的权限应根据您的具体需求来设置。如果您仅需要读取数据，选择只读权限即可；如果需要执行写操作，选择相应的写权限。为了安全考虑，建议按照最小权限原则配置Token权限。

#### Q: 如何管理已生成的API Token？

A: 您可以在Teable的个人设置页面创建个管理您的API Tokens。在那里，您可以查看Token的权限，删除不再需要的Token。注意，只有在创建 Token 的时候可以有机会查看 Token，请将 Token 保存在安全的位置。

#### Q: Swagger界面和Redoc界面有什么区别？

A: Swagger界面提供了一个交互式环境，允许您直接在浏览器中测试API调用。而Redoc界面提供了一个更为简洁和易于阅读的文档视图，适合于快速查阅API的详细信息。两者提供的内容是相同的，只是呈现方式不同。

#### Q: 如果我遇到API调用错误该怎么办？

A: 首先，请确保您的API Token是有效的，并且拥有正确的权限。其次，仔细检查您的请求格式是否符合文档描述。如果问题仍然存在，您可以查看API响应中的错误代码和消息，通常它们能提供错误的详细信息。如有需要，欢迎联系我们的技术支持团队。

### 联系支持

如果您有任何疑问或需要帮助，请通过以下方式联系我们：

* 邮箱：support@teable.io
* Github Issue: github.com/teableio/teable/issues

感谢您选择Teable。我们期待看到您如何使用Teable API来创造令人惊叹的应用！

