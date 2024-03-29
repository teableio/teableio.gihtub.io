# API

Teable offers a powerful API that supports nearly all product features (seriously), allowing developers to make calls using an API Token. This document will guide you on how to obtain an API Token and access and test the API using our Swagger and Redoc interfaces.

#### Obtaining an API Token

To use Teable's API, you first need to obtain an API Token. Please follow these steps:

1. Log in to your Teable account.
2. Click on the avatar in the lower-left corner to enter your personal settings.
3. Click the “Settings” button.
4. In the settings menu, find and click “Get Access Token”.
5. Configure your Token permissions. Choose the appropriate permissions setting according to your needs.
6. Click to generate a Token, and your API Token will be created.

Please keep your API Token secure and do not share it with others to ensure the security of your account.

#### API Documentation

Teable provides both Swagger and Redoc interfaces for developers to view and test the API.

**Swagger Interface**

The Swagger interface offers an interactive API document where you can directly test API calls.

* Access URL: [Swagger documentation](https://app.teable.io/docs)

In the Swagger interface, you can find all available API endpoints, view their detailed information and parameter requirements, and directly execute test requests.

**Redoc Interface**

The Redoc interface offers a cleaner and more readable version of the API documentation.

* Access URL: [Redoc documentation](https://app.teable.io/redocs)

Through the Redoc interface, you can browse the documentation of all API endpoints and understand how to use them, but you cannot directly test the API in this interface.

#### Example Request

Here is an example of making an API request using curl:

```bash
curl -X GET "https://app.teable.io/api/example-endpoint" \
     -H "Authorization: Bearer YOUR_API_TOKEN" \
     -H "Accept: application/json"
```

Please replace `YOUR_API_TOKEN` with your actual API Token.

#### Conclusion

With the Teable API, you can easily integrate and extend the functionality of Teable. Make sure to use the API accurately according to the documentation, and keep your API Token secure.

If you encounter any issues or need technical support during use, please contact us through our support channels. We are more than happy to help you solve problems and ensure you can fully leverage the powerful features offered by Teable.

#### Frequently Asked Questions

**Q: How should I set the permissions for my API Token?**

A: The permissions for your API Token should be set according to your specific needs. If you only need to read data, choose read-only permissions; if you need to perform write operations, select the corresponding write permissions. For security reasons, it's recommended to configure Token permissions based on the principle of least privilege.

**Q: How can I manage my generated API Tokens?**

A: You can create and manage your API Tokens on Teable's personal settings page. There, you can view the permissions of a Token and delete Tokens that are no longer needed. Note that Tokens can only be viewed at the time of creation, so please keep your Token in a secure location.

**Q: What is the difference between the Swagger and Redoc interfaces?**

A: The Swagger interface provides an interactive environment that allows you to test API calls directly in your browser. The Redoc interface offers a cleaner and more readable document view, suitable for quickly reviewing detailed information about the API. Both provide the same content, but in different presentation formats.

**Q: What should I do if I encounter an API call error?**

A: First, ensure that your API Token is valid and has the correct permissions. Next, carefully check if your request format matches the documentation description. If the problem persists, review the error code and message in the API response, as they usually provide detailed information about the error. If needed, do not hesitate to contact our technical support team.

#### Contact Support

If you have any questions or need help, please contact us through the following means:

* Email: support@teable.io
* Github Issue: github.com/teableio/teable/issues

Thank you for choosing Teable. We look forward to seeing how you use the Teable API to create amazing applications!
