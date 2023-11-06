# 数值

表格支持数值类型的字段,用于输入和存储数字数据。该字段可应用于财务统计、物品管理等多个业务场景中。

数值字段只能输入数字,包括整数和小数,比如“12”、“3.1415”等。字段将自动过滤除数字外的其他字符。数值字段可以设置数字的范围限制,只允许在指定区间内输入。

数值字段可用于排序和筛选,快速查找出最大值、最小值等。公式中也可以引用数值字段进行数学运算。

### 格式化

数值字段支持三种格式化类型，用户可以根据实际需要自主选择。

<details>

<summary>数字</summary>

按照普通数字显示，比如 1, 2.0

</details>

<details>

<summary>货币</summary>

按照给定的货币符号显示，比如 ￥1.00

</details>

<details>

<summary>百分比</summary>

按照百分比格式显示，比如 1%。注意，1% 的存储值是 0.01, 100% 的存储值是 1，百分值可以超过 100%

</details>

<div align="left">

<figure><img src="../../../.gitbook/assets/image (33).png" alt="" width="323"><figcaption><p>设置格式化</p></figcaption></figure>

</div>

### 精度

产品提供从整数到小数后五位的6个精度等级供用户选择。

<div align="left">

<figure><img src="../../../.gitbook/assets/image (34).png" alt="" width="326"><figcaption><p>设置精度</p></figcaption></figure>

</div>

### 显示方式

数值字段现有3种显示方式。

<details>

<summary>默认</summary>

不带有特殊的显示方式，仅将数值本身呈现在单元格内。

</details>

<details>

<summary>环状图</summary>

用户可以选择显示环状图，可设置目标值、图形颜色、是否显示数字。

</details>

<details>

<summary>条状图</summary>

用户可以选择显示条状图，可设置目标值、图形颜色、是否显示数字。

</details>

<div align="left">

<figure><img src="../../../.gitbook/assets/image.png" alt="" width="328"><figcaption></figcaption></figure>

</div>

格式化不仅可以在数值字段使用，还可以在公式字段、汇总字段、引用里面使用，详情请看[格式化](../tong-yong/ge-shi-hua.md)
