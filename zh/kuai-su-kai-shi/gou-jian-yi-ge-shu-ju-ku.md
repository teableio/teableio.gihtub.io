# 构建一个数据库

本篇文章会带在Teable中一步一步创建一个AI PDF Summary 的Base，用来管理PDF 文件，以及通过 AI 整理过后的 PDF 文件数据。

对于初学者来说，可能看起来有点复杂，但我会尽量让这个过程变得简单易懂。让我们一步一步地来完成这个任务。

### 第一步：创建Base

1. **创建新的Base**：登录你的Teable账户后，点击界面上的“新建Base”按钮。你可以选择从头开始创建，也可以使用模板。在这个例子中，我们将选择“创建空数据库”。

<figure><img src="../.gitbook/assets/image (69).png" alt="" width="375"><figcaption></figcaption></figure>

1. **命名你的Base**：在创建新Base后，点击左上角的下拉按钮进行重命名，输入“AI PDF Summary”作为Base的名称。

<figure><img src="../.gitbook/assets/image (70).png" alt="" width="363"><figcaption></figcaption></figure>

### 第二步：创建PDF List表

#### **创建表格**：

创建Base后，点击左边的 + 号创建一张表格，并双击表格名称（默认为“Table 1”），将其重命名为“PDF List”。

#### **添加字段**：

创建表格后会有三个默认字段，我们先要将后面两个字段删除，因为在这里对我们没有用处

<figure><img src="../.gitbook/assets/image (71).png" alt="" width="375"><figcaption></figcaption></figure>

* 重命名第一个字段，将其命名为 FileName
* 点击添加字段按钮，选择“附件”，字段名称填写为“PDF”，用于存储PDF文件。

<figure><img src="../.gitbook/assets/image (72).png" alt="" width="352"><figcaption></figcaption></figure>

* 点击添加字段按钮，选择“多行文本”，字段名称填写为“Text Content”，用于存储PDF文件的文本内容。
* 重复上述步骤，选择“多行文本”，字段名称填写为“Summary”，这里将存储PDF文档的摘要。
* 最后，点击添加字段按钮，选择“关联到另一张表”，然后选择“创建新表”，命名为“PDF Category”。这将创建一个新表并将其与“PDF List”表通过“Category”字段关联起来。完成后，选择“单选”，因为每个PDF只属于一个分类。

<figure><img src="../.gitbook/assets/image (73).png" alt="" width="354"><figcaption></figcaption></figure>

#### 第三步：创建PDF Category表

由于在上一步中创建Category字段时已经自动创建了PDF Category表，现在我们需要对其进行进一步的设置。

1. **配置PDF Category表**：
   * Teable已经自动为我们创建了“Name”字段，我们将使用它来存储分类的名称。
   * **PDF List**：这个字段也已经自动创建，是与PDF List表中的Category字段对称关联的字段。
2. **添加字段**：
   * **All Summary**：点击添加字段按钮，选择“查找”，目标表选择“PDF List”，从中选择“Summary”字段。这将允许我们在PDF Category表中查看每个分类下所有PDF的摘要。
   * **Count**：点击添加字段按钮，选择“汇总”，目标表选择“PDF List”，汇总字段选择“FileName”，汇总类型选择“计数”。这将显示每个分类下PDF文件的数量。

#### 第四步：填充数据和使用Base

现在，你的Base框架已经建立好了，你可以开始向“PDF List”表中添加PDF文件的信息了。当你为PDF文件选择分类时，Teable会自动更新“PDF Category”表中的相关字段，如All Summary和Count。

* **添加PDF文件信息**：在“PDF List”表中，点击添加新行，然后填写PDF文件的FileName、Text Content和Summary。在Category字段中，选择一个已有的分类或创建新的分类。
* **查看分类汇总**：切换到“PDF Category”表，你可以看到每个分类下的PDF文件数量和所有PDF的摘要。

#### 第五步：优化和扩展

随着你对Teable的进一步使用，你可能会想要添加更多的功能或字段来满足你的需求，例如：

* **添加更多字段**：比如为PDF文件添加“上传日期”、“作者”等信息。
* **创建视图**：Teable允许你为表格创建不同的视图，如网格视图、日历视图、看板视图等，以不同的方式查看和管理你的数据。

**视图使用例子**

当前视图筛去了 TextContent 为空的内容，并且对 Category 进行了分组以获得更好的视觉排布。

<figure><img src="../.gitbook/assets/image (75).png" alt=""><figcaption></figcaption></figure>

#### 第六步：API 写入

我们当前 Base 的首要设计目标是存储 PDF 通过 AI 解析过后生成的文本内容和摘要信息，一遍后续随时取用，我们可以设计一个工作流，将 PDF 通过第三方 AI 工具进行解析之后，使用 API 写回到单元格中。

要使用 Teable 使用 API 的来进行数据写入首先要创建[ Access Token](../gao-dai-ma-kai-fa/api/access-token.md)，然后[阅读 API 文档](../gao-dai-ma-kai-fa/api/#api-wen-dang)并进行调试。



**第七步：集成第三方平台**

当 Base 积累了足够多的数据之后，你可能需要进行数据洞察和分析，比如使用 Metabase 这种开源数据分析工具来制作数据报表和仪表盘。大部分数据分析工具都支持 Postgres 连接来获取数据，你可以直接在 Teable 中创建一个[ Postgres 数据库连接](../gao-dai-ma-kai-fa/shu-ju-ku-lian-jie.md)，这样就可以让第三方工具读取到你 Base 中的数据。

同理，如果你需要搭建定制化的应用界面去与其他的协作者进行协作，你可以使用像 AppSmith 这样的开源低代码软件，通过数据库连接 + API 的形式灵活的进行数据读写。



恭喜你，现在你已经成功创建了一个AI PDF Summary的Base，并掌握了Teable的基本使用方法。随着实践的深入，你将能够更加灵活地利用Teable来管理和分析数据。
