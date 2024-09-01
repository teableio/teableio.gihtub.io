---
description: 记录中所有字段值类型参考文档
---

# 记录字段值类型

{% hint style="info" %}
查找 (Lookup) 字段不是一种具体的字段类型，而是一种状态，所有的字段都可能有 isLookup 的属性，因为任何字段都可能从关联表被查找过来。查找字段是不可以被编辑的。
{% endhint %}

{% hint style="info" %}
所有字段的返回值都可能存在 `isMultipleCellValue: true` 的情况。

1. 这是因为字段可能被查找（Lookup）的。当关联值可以多选的时候，查找字段的值必然是数组值
2. 字段可配置，比如成员字段和关联字段可以配置单选或者多选，在代码中，你可以通过 `field.isMultipleCellValue` 来判断字段是否为多值。
{% endhint %}

{% hint style="info" %}
不应当用字段类型来判断是否允许写入，而是通过字段上的 isComputed 来判断。
{% endhint %}

### 1. 数字字段 (Number Field)

* type: number
* 写入类型: `number`
* 返回类型:
  * `isMultipleCellValue: false`: `number`
  * `isMultipleCellValue: true`: `number[]`

示例：

```typescript
// 写入值
42

// 返回值 (isMultipleCellValue: false)
42

// 返回值 (isMultipleCellValue: true)
[42, 17, 99]
```

### 2. 单行文本字段 (Single Line Text Field)

* type: singleLineText
* 写入类型: `string`
* 返回类型:
  * `isMultipleCellValue: false`: `string`
  * `isMultipleCellValue: true`: `string[]`

示例：

```typescript
// 写入值
"Hello, Teable!"

// 返回值 (isMultipleCellValue: false)
"Hello, Teable!"

// 返回值 (isMultipleCellValue: true)
["Hello, Teable!", "Welcome", "Good day"]
```

### 3. 长文本字段 (Long Text Field)

* type: longText
* 写入类型: `string`
* 返回类型:
  * `isMultipleCellValue: false`: `string`
  * `isMultipleCellValue: true`: `string[]`

示例：

```typescript
// 写入值
"This is a long text field that can contain multiple paragraphs..."

// 返回值 (isMultipleCellValue: false)
"This is a long text field that can contain multiple paragraphs..."

// 返回值 (isMultipleCellValue: true)
["This is a long text...", "Another long text...", "Yet another long text..."]
```

### 4. 单选字段 (Single Select Field)

* type: singleSelect
* 写入类型: `string` (选项值)
* 返回类型:
  * `isMultipleCellValue: false`: `string`
  * `isMultipleCellValue: true`: `string[]`

示例：

```typescript
// 写入值
"Option A"

// 返回值 (isMultipleCellValue: false)
"Option A"

// 返回值 (isMultipleCellValue: true)
["Option A", "Option B", "Option C"]
```

### 5. 多选字段 (Multiple Select Field)

* type: multipleSelect
* 写入类型: `string[]` (选项值数组)
* 返回类型: `string[]`

示例：

```typescript
// 写入值
["Red", "Blue", "Green"]

// 返回值
["Red", "Blue", "Green"]
```

### 6. 关联字段 (Link Field)

* type: link
* 写入类型:
  * `isMultipleCellValue: false`: `{ id: string }`
  * `isMultipleCellValue: true`: `{ id: string }[]`
* 返回类型:
  * `isMultipleCellValue: false`: `{ id: string, title?: string }`
  * `isMultipleCellValue: true`: `{ id: string, title?: string }[]`

示例：

```typescript
// 写入值 (isMultipleCellValue: false)
{ id: "rec123456" }

// 写入值 (isMultipleCellValue: true)
[{ id: "rec123456" }, { id: "rec789012" }]

// 返回值 (isMultipleCellValue: false)
{ id: "rec123456", title: "Related Record 1" }

// 返回值 (isMultipleCellValue: true)
[
  { id: "rec123456", title: "Related Record 1" },
  { id: "rec789012", title: "Related Record 2" }
]
```

### 7. 公式字段 (Formula Field)

* type: formula
* 写入类型: 不可直接写入
* 返回类型: 取决于公式结果，可能是 `string | number | boolean` 或它们的数组形式

示例：

```typescript
// 返回值 (isMultipleCellValue: false)
42 // 或 "Result" 或 true

// 返回值 (isMultipleCellValue: true)
[42, 17, 99] // 或 ["Result1", "Result2"] 或 [true, false, true]
```

### 8. 附件字段 (Attachment Field)

* type: attachment
* 写入类型: `{ name: string, type: string, token: string }[]`
* 返回类型: `{ id: string, name: string, type: string, token: string, url: string }[]`

示例：

```typescript
// 写入值
[
  { name: "document.pdf", type: "application/pdf", token: "abc123" }
]

// 返回值
[
  { id: "att123", name: "document.pdf", type: "application/pdf", token: "abc123", url: "https://example.com/document.pdf" }
]
```

### 9. 日期字段 (Date Field)

* type: date
* 写入类型: `string` (ISO 8601格式)
* 返回类型:
  * `isMultipleCellValue: false`: `string` (ISO 8601格式)
  * `isMultipleCellValue: true`: `string[]` (ISO 8601格式)

示例：

```typescript
// 写入值
"2023-04-15T10:30:00Z"

// 返回值 (isMultipleCellValue: false)
"2023-04-15T10:30:00Z"

// 返回值 (isMultipleCellValue: true)
["2023-04-15T10:30:00Z", "2023-04-16T14:45:00Z"]
```

### 10. 创建时间字段 (Created Time Field)

* type: createdTime
* 写入类型: 不可直接写入
* 返回类型:
  * `isMultipleCellValue: false`: `string` (ISO 8601格式)
  * `isMultipleCellValue: true`: `string[]` (ISO 8601格式)

示例：

```typescript
// 返回值 (isMultipleCellValue: false)
"2023-04-15T10:30:00Z"

// 返回值 (isMultipleCellValue: true)
["2023-04-15T10:30:00Z", "2023-04-16T14:45:00Z"]
```

### 11. 最后修改时间字段 (Last Modified Time Field)

* type: lastModifiedTime
* 写入类型: 不可直接写入
* 返回类型:
  * `isMultipleCellValue: false`: `string` (ISO 8601格式)
  * `isMultipleCellValue: true`: `string[]` (ISO 8601格式)

示例：

```typescript
// 返回值 (isMultipleCellValue: false)
"2023-04-15T10:30:00Z"

// 返回值 (isMultipleCellValue: true)
["2023-04-15T10:30:00Z", "2023-04-16T14:45:00Z"]
```

### 12. 复选框字段 (Checkbox Field)

* type: checkbox
* 写入类型: `boolean`
* 返回类型:
  * `isMultipleCellValue: false`: `boolean`
  * `isMultipleCellValue: true`: `boolean[]`

示例：

```typescript
// 写入值
true

// 返回值 (isMultipleCellValue: false)
true

// 返回值 (isMultipleCellValue: true)
[true, false, true]
```

### 13. 汇总字段 (Rollup Field)

* type: rollup
* 写入类型: 不可直接写入
* 返回类型: 取决于汇总配置，可能是 `number | string` 或它们的数组形式

示例：

```typescript
// 返回值 (isMultipleCellValue: false)
42 // 或 "Summary Result"

// 返回值 (isMultipleCellValue: true)
[42, 17, 99] // 或 ["Summary 1", "Summary 2"]
```

### 14. 评分字段 (Rating Field)

* type: rating
* 写入类型: `number`
* 返回类型:
  * `isMultipleCellValue: false`: `number`
  * `isMultipleCellValue: true`: `number[]`

示例：

```typescript
// 写入值
4

// 返回值 (isMultipleCellValue: false)
4

// 返回值 (isMultipleCellValue: true)
[4, 3, 5]
```

### 15. 自动编号字段 (Auto Number Field)

* type: autoNumber
* 写入类型: 不可直接写入
* 返回类型:
  * `isMultipleCellValue: false`: `number`
  * `isMultipleCellValue: true`: `number[]`

示例：

```typescript
// 返回值 (isMultipleCellValue: false)
42

// 返回值 (isMultipleCellValue: true)
[42, 43, 44]
```

### 16. 用户字段 (User Field)

* type: user
* 写入类型:
  * `isMultipleCellValue: false`: `{ id: string, title: string }`
  * `isMultipleCellValue: true`: `{ id: string, title: string }[]`
* 返回类型:
  * `isMultipleCellValue: false`: `{ id: string, title: string, email?: string, avatar?: string }`
  * `isMultipleCellValue: true`: `{ id: string, title: string, email?: string, avatar?: string }[]`

示例：

```typescript
// 写入值 (isMultipleCellValue: false)
{ id: "user123", title: "John Doe" }

// 写入值 (isMultipleCellValue: true)
[
  { id: "user123", title: "John Doe" },
  { id: "user456", title: "Jane Smith" }
]

// 返回值 (isMultipleCellValue: false)
{
  id: "user123",
  title: "John Doe",
  email: "john@example.com",
  avatar: "https://example.com/avatar.jpg"
}

// 返回值 (isMultipleCellValue: true)
[
  {
    id: "user123",
    title: "John Doe",
    email: "john@example.com",
    avatar: "https://example.com/avatar1.jpg"
  },
  {
    id: "user456",
    title: "Jane Smith",
    email: "jane@example.com",
    avatar: "https://example.com/avatar2.jpg"
  }
]
```



### 17. 创建者字段 (Created By Field)

* 写入类型: 不可直接写入
* 返回类型:
  * `isMultipleCellValue: false`: `{ id: string, title: string, email?: string, avatar?: string }`
  * `isMultipleCellValue: true`: `{ id: string, title: string, email?: string, avatar?: string }[]`

示例：

```typescript
// 返回值 (isMultipleCellValue: false)
{
  id: "user123",
  title: "John Doe",
  email: "john@example.com",
  avatar: "https://example.com/avatar.jpg"
}

// 返回值 (isMultipleCellValue: true)
[
  {
    id: "user123",
    title: "John Doe",
    email: "john@example.com",
    avatar: "https://example.com/avatar1.jpg"
  },
  {
    id: "user456",
    title: "Jane Smith",
    email: "jane@example.com",
    avatar: "https://example.com/avatar2.jpg"
  }
]
```

### 18. 最后修改者字段 (Last Modified By Field)

* 写入类型: 不可直接写入
* 返回类型:
  * `isMultipleCellValue: false`: `{ id: string, title: string, email?: string, avatar?: string }`
  * `isMultipleCellValue: true`: `{ id: string, title: string, email?: string, avatar?: string }[]`

示例：

```typescript
// 返回值 (isMultipleCellValue: false)
{
  id: "user123",
  title: "John Doe",
  email: "john@example.com",
  avatar: "https://example.com/avatar.jpg"
}

// 返回值 (isMultipleCellValue: true)
[
  {
    id: "user123",
    title: "John Doe",
    email: "john@example.com",
    avatar: "https://example.com/avatar1.jpg"
  },
  {
    id: "user456",
    title: "Jane Smith",
    email: "jane@example.com",
    avatar: "https://example.com/avatar2.jpg"
  }
]
```
