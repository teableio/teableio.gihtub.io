---
description: 介绍如何在指定的表中更新一条记录
---

# 更新记录

### 路径

PATCH /table/{tableId}/record/{recordId}

### 请求

#### 路径参数

* tableId (string): 表的唯一标识符。
* recordId (string): 要更新的记录的唯一标识符。

#### 请求体

* **fieldKeyType（可选）**
  * 描述：指定字段键的类型
  * 类型：字符串
  * 可选值：
    * "name"：使用字段名作为键
    * "id"：使用字段 ID 作为键
  * 示例：`"name"` 或 `"id"`
  * 说明：如果不指定，默认使用字段名作为键。

* **typecast（可选）**
  * 描述：是否自动转换字段值类型
  * 类型：布尔值
  * 可选值：true 或 false
  * 示例：`true`
  * 说明：如果设置为 true，系统会尝试将输入值转换为正确的字段值类型。

* **record（必填）**
  * 描述：要更新的记录数据
  * 类型：对象
  * 示例：
    ```javascript
    {
      "fields": {
        "Name": "John Doe",
        "Age": 31,
        "Email": "john.doe@example.com"
      }
    }
    ```
  * 说明：`fields` 对象包含要更新的字段名和对应的新值。

* **order（可选）**
  * 描述：指定更新后记录在指定视图中的位置
  * 类型：对象
  * 包含以下属性：
    * viewId (string): 视图的 ID
    * anchorId (string): 锚点记录的 ID
    * position (string): 相对于锚点记录的位置，可选值为 "before" 或 "after"
  * 示例：
    ```javascript
    {
      "viewId": "viwABCDEFGHIJKLMN",
      "anchorId": "rec123456789ABCDE",
      "position": "after"
    }
    ```

### 响应

#### 成功响应

* 状态码: 200 OK
* 响应体: 返回更新后的记录数据。

**示例响应体**
