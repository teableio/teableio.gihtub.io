# 引用

## 简介
在 Teable 中，引用字段是建立在已有关联字段基础上的字段类型。它允许你从一个表中的关联字段引用另一个表中的具体数据字段。这不仅使得你能够跨表共享数据，而且保证数据的一致性和完整性。

## 引用字段与关联字段的关系
为了使用引用字段，你首先需要创建一个关联字段，将两个表关联起来。一旦关联建立，你就可以在一个表中使用引用字段来引用另一个表中的任何字段。

## 如何创建引用字段
确保你已经为两个想要关联的表创建了关联字段。
在你希望添加引用字段的表中，选择"添加字段"，然后选择"引用字段"（Lookup）。
基于已有的关联字段，选择你想要引用的源表和具体字段。

## 引用字段的应用场景和示例
考虑以下的书店场景：

表 A：书籍
表 B：作者

首先，你在“书籍”表中为每本书创建一个关联字段来关联“作者”表中的作者数据。这个关联确保每本书都与一个作者关联。

现在，假设你想在“书籍”表中显示每个作者的出生日期。你不需要在“书籍”表中为每本书重复输入作者的出生日期，而是可以使用引用字段从“作者”表中直接引用它。

书籍名称	作者关联	作者出生日期(引用字段)
《代码大全》	Steve McConnell	1960 (此数据从“作者”表中引用)

## 注意事项
数据完整性：确保你引用的源表和字段存在和有效。删除源表或字段可能会导致引用字段无法正确显示数据。
引用展现形式：引用字段可以拥有和被引用字段一样的展现形式，这意味着如果你在源表中修改了数据的展现形式，它也会在引用字段中反映出来。

## 结语
在 Teable 中，引用字段提供了一种高效、简洁的方法来跨表引用和显示数据。正确使用引用字段可以大大增强你的数据管理效率，并确保数据的准确性和一致性