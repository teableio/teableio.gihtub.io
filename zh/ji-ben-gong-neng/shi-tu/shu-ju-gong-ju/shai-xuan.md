# 筛选

### 简介

筛选功能是数据管理的关键工具，它允许用户基于特定条件快速找到所需的数据集合。本文档提供了筛选功能的详细介绍，包括操作符、字段类型、条件分组等方面的说明，帮助用户充分理解和利用筛选功能进行数据分析和管理。

### 基础规则清单

#### 添加条件

* 用户可以通过点击“添加条件”按钮来设定筛选规则。
* 每个条件包括字段、操作符和值三部分。
* 支持直接输入值或从预设选项中选择值。

#### 添加条件分组

* 通过“添加分组”按钮，用户可以创建条件分组，使用“与”或“或”逻辑连接条件。
* 分组内部可以嵌套更多分组，实现复杂筛选逻辑。

#### 支持的基础类型及操作符

**文本类型**

等于、不等于、包含、不包含、为空、不为空

**数字类型**

\=、≠、>、≥、<、≤、为空、不为空

**日期类型**

在之前、在之后、介于、等于、不等于、为空、不为空

**布尔字段**

是、否

**自定义选项字段**

等于、不等于

#### 操作符及其输入数据类型

* 文本操作符接受字符串类型数据。
* 数字操作符接受数值类型数据。
* 日期操作符接受日期类型数据。
* 布尔操作符无需输入，直接选择。
* 自定义选项操作符接受预定义的选项。

### 字段类型与操作符的映射关系

| 字段类型 | 支持的操作符                                    | 输入数据                     | 图例                                                                                                                                                                          |
| ---- | ----------------------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 单行文本 | 等于、不等于、包含、不包含、为空、不为空                      | 文本输入                     | <img src="../../../.gitbook/assets/image (41).png" alt="" data-size="original">                                                                                             |
| 长文本  | 等于、不等于、包含、不包含、为空、不为空                      | 文本输入                     | <img src="../../../.gitbook/assets/image (42).png" alt="" data-size="original">                                                                                             |
| 用户   | 等于、不等于、包含任一、不包含任一、为空、不为空                  | <p>用户选择列表<br>以及当前用户</p>  | \[暂缺]                                                                                                                                                                       |
| 附件   | 为空、不为空                                    | -                        | <img src="../../../.gitbook/assets/image (43).png" alt="" data-size="original">                                                                                             |
| 多选   | 包含任一、包含所有、完全匹配、不包含任一、为空、不为空               | 选项选择列表                   | ![](<../../../.gitbook/assets/image (45).png>)<img src="../../../.gitbook/assets/image (44).png" alt="" data-size="original">                                               |
| 单选   | 等于、不等于、包含任一、不包含任一                         | 选项选择列表                   | <img src="../../../.gitbook/assets/image (46).png" alt="" data-size="original">![](<../../../.gitbook/assets/image (47).png>)                                               |
| 日期   | 等于、不等于、在之内、之前、之后、在或之前、在或之后、为空、不为空         | <p>预设范围列表<br>精准日期选择框</p> | <img src="../../../.gitbook/assets/image (48).png" alt="" data-size="original">![](<../../../.gitbook/assets/image (49).png>)![](<../../../.gitbook/assets/image (50).png>) |
| 数字   | =、≠、>、≥、<、≤、为空、不为空                        | 数字                       | <img src="../../../.gitbook/assets/image (51).png" alt="" data-size="original">                                                                                             |
| 持续时间 | 等于、不等于、大于、大于等于、小于、小于等于、为空、不为空             | 数字                       | 同数字                                                                                                                                                                         |
| 评级   | 等于、不等于、大于、大于等于、小于、小于等于、为空、不为空             | 数字                       | <img src="../../../.gitbook/assets/image (52).png" alt="" data-size="original">                                                                                             |
| 公式   | 根据结果类型决定操作符                               | 文本、数字、日期                 | <img src="../../../.gitbook/assets/image (53).png" alt="" data-size="original">![](<../../../.gitbook/assets/image (54).png>)                                               |
| 汇总   | 根据结果类型决定操作符                               | 文本、数字、日期                 | <img src="../../../.gitbook/assets/image (36).png" alt="" data-size="original">                                                                                             |
| 计数   | 等于、不等于、大于、大于等于、小于、小于等于、为空、不为空             | 数字                       | 同数字                                                                                                                                                                         |
| 关联   | 等于、不等于、包含、不包含、包含任一、包含所有、完全匹配、不包含任一、为空、不为空 |  关联值选择框                  | <img src="../../../.gitbook/assets/image (55).png" alt="" data-size="original">![](<../../../.gitbook/assets/image (56).png>)                                               |
| 创建时间 | 等于、不等于、在之内、之前、之后、在或之前、在或之后、为空、不为空         | <p>预设范围列表<br>精准日期选择框</p> | 同日期                                                                                                                                                                         |
| 修改时间 | 等于、不等于、在之内、之前、之后、在或之前、在或之后、为空、不为空         | <p>预设范围列表<br>精准日期选择框</p> | 同日期                                                                                                                                                                         |
| 创建者  | 等于、不等于                                    | <p>用户选择列表<br>以及当前用户</p>  | 同用户                                                                                                                                                                         |
| 修改者  | 等于、不等于                                    | <p>用户选择列表<br>以及当前用户</p>  | 同用户                                                                                                                                                                         |
| 自动编号 | =、≠、>、≥、<、≤                               | 数字                       | 同数字                                                                                                                                                                         |
| 按钮   | -                                         | -                        | -                                                                                                                                                                           |



**公式和汇总字段的操作符由其结果类型决定，这可能包括上述所有操作符。**

### 条件分组功能

条件分组允许用户按逻辑运算符（如“与/或”）组合多个条件。这一功能的核心在于它提供了逻辑上的灵活性和组合操作的能力，用户可以基于复杂的需求构建嵌套逻辑，实现精细化的数据筛选。

#### 与/或 逻辑

* **与（AND）逻辑**: 分组内所有条件必须同时满足，才能选出数据。
* **或（OR）逻辑**: 分组内任一条件满足，即可选出数据。

#### 组合操作

* 用户可以创建多层嵌套的条件分组，每一层可以定义自己的逻辑关系。
* 分组可以无限嵌套，从而实现极其复杂的筛选逻辑。

<figure><img src="../../../.gitbook/assets/image (37).png" alt=""><figcaption><p>逻辑操作</p></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (39).png" alt=""><figcaption><p>条件分组组合，与、或组合</p></figcaption></figure>

#### 使用条件分组的步骤

1. **创建分组**: 用户通过界面指令创建一个新的条件分组。
2. **添加条件**: 在分组内部，用户可以添加多个筛选条件。
3. **选择逻辑**: 对于分组内的条件，用户需选择“与”或“或”逻辑。
4. **嵌套分组**: 用户可以在一个分组内部继续创建新的子分组，并为其设置条件和逻辑。
5. **优化逻辑**: 用户可以根据需要调整各个条件和分组的逻辑关系，以达到预期的筛选效果。

#### 示例

假设用户需要筛选一个数据库，找出所有“由特定用户创建”并且“在过去一周内修改过或评分超过8分”的记录，该用户可以构建如下的条件分组逻辑：

* 主分组（与）
  * 条件1: 创建者 = 特定用户（与）
  * 子分组（或）
    * 条件2: 最后修改时间 = 过去一周
    * 条件3: 评分 > 8

通过这样的分组和条件设置，筛选功能可以精确地输出符合上述所有条件的数据记录。



### 总结

筛选功能及其条件分组功能提供了一种高效、灵活的方法来查看和操作数据。用户可以通过精确的筛选规则快速定位到所需的信息，无论是简单查询还是复杂的数据分析任务，本文档提供的指南都能帮助用户更好地利用筛选功能，提升数据处理的效率和准确性。