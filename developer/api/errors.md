# Errors

> Teable Web API follows the semantics of HTTP status codes.

- 2xx 

  Indicates success.

- 4xx

  User errors.

- 5xx

  Server errors.

Error messages will return a JSON-encoded body containing error and information fields. Below is an example of an error message body:

```json
{
  "message": "not allowed to operate space|read on spcxxxxxx",
  "status": 403,
  "code": "restricted_resource"
}
```



## Success Status Codes

| HTTP Status Code | Description                              |
| :--------------- | :--------------------------------------- |
| 200              | Request has been successfully completed. |



## Error Codes

Below are some enumerated error codes.

### 400 Bad Request

The request body could not be parsed as `JSON`, including when the incoming `Body` parameters do not meet the specifications.

### 401 Unauthorized

Unauthorized access to the endpoint.

### 403 Forbidden

Accessing the resource with API credentials that do not have permission to access protected resources.

### 404 Not Found

Route or resource not found. This error is returned when accessing a nonexistent resource path or when the requested method does not match.

### 500 Internal Server Error

The server encountered an unexpected situation.

### 503 Service Unavailable

The service is temporarily unavailable, possibly due to timeouts or database connection failures.