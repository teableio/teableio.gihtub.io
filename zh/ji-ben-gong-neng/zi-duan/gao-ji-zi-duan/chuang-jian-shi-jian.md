# 创建时间

### 简介

创建时间字段是一个自动记录数据条目创建时刻的特殊字段。此字段为用户提供了确切的时间参考，方便了解和追踪数据的生成时间。

### 功能细节

#### 自动记录

* 当新的数据条目被创建时，此字段会自动记录当前的日期和时间。

#### 数据筛选与排序

* 可以根据创建时间来筛选数据条目，助力于查找特定时间段内创建的数据。
* 结合其他字段进行筛选，如“修改人”或“成员字段”，可以精确查找特定时间段内由特定用户创建或修改的数据。

#### 数据分析

* 对于数据的时间序列分析特别有价值，可以帮助了解数据的生成趋势和周期。

### 如何使用

* **自动填充**：在新建数据条目时，无需用户干预，创建时间字段会自动记录当前日期和时间。
* **筛选与排序**：在数据视图中，选择创建时间字段作为筛选或排序条件，从而找到在特定时间段内创建的数据条目。

### 注意事项

* 此字段是自动填充的，并且不可被修改。任何试图修改此字段的操作都将无效。

### 总结

创建时间字段为用户提供了一个准确、可靠的数据生成时间参考，无需任何手动操作。它对于数据追踪、分析和管理都具有关键的作用。