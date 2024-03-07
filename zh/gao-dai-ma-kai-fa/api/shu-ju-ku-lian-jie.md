# 数据库连接

本文档将指导您如何在 Teable 中设置和管理数据库连接，包括创建只读连接、获取 BaseId、关闭连接以及了解数据库表中的内容和如何修改数据库列名。

### 创建数据库连接

1. **进入表格**：首先，打开您想要连接的表格。
2. **选择 API 按钮**：在右侧找到并点击 API 按钮。
3. **选择 Postgresql Connection**：在弹出的选项中，选择 Postgresql Connection。
4. **进入设置界面**：点击创建，系统将自动创建一个只读的 Postgres 用户，包括用户名、密码和数据库链接地址。

#### 连接方式

* **标准 PostgreSQL 客户端**：如 Datagrip, Navcat, TablePlus 等。
* **应用程序代码**：通过选择合适的连接方式。
* **低代码软件**：如 Appsmith, Budibase 等。
* **BI 产品**：如 PowerBI, Metabase, Superset 等。

### 获取 BaseId

1. **进入 Base 界面**：点击进入 base 界面，URL 上方以 `bse` 开头的字符串就是 baseId。
2. **数据库设计界面**：进入数据库设计界面（表格右上角的⚙图标），里面的 schema 名就是 baseId。

### 关闭数据库连接

1. **进入 Database Connection 界面**：在 Database Connection 界面点击删除，即可关闭连接。
2. **密码清除**：旧的密码将被清除。重新新建将会是新的连接。

### 数据库表中的内容

1. **用户创建的字段**：您在表格中创建的所有字段。
2. **Teable 系统字段**：包括 `__id`（唯一 ID）、`__version`（版本号）、`__auto_number`（自增数字，主键）、`__created_time`（创建时间）、`__last_modified_time`（最近修改时间）、`__created_by`（创建人 ID）和 `__last_modified_by`（最近修改人 ID）。
3. **视图索引字段**：以 `__row` 开头的字段，用于维护当前视图中记录的顺序。
4. **外键**：如果存在关联字段，会创建逻辑外键，命名以 `__fk` 开头。
5. **中间表**：以 `junction_` 开头的表，用于处理 ManyToMany 关系。

### 修改数据库列名

直接修改数据库内容是危险的，可能会破坏应用程序的逻辑，导致崩溃或数据丢失。Teable 不提供可写的数据库连接。如果需要修改数据，请通过 Teable API 进行，API 提供了更精细的权限控制和良好的操作封装。

### 总结

通过以上步骤，您可以在 Teable 中成功设置和管理数据库连接，了解数据库表中的内容，并通过 Teable API 安全地修改数据。
