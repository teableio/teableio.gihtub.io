---
description: >-
  允许管理员为团队成员设置细粒度的访问权限。通过这种方式，可以实现对不同数据表、字段和操作的精确控制，确保每个成员只能访问和修改其职责范围内的信息。这不仅提高了团队协作的效率，还增强了数据安全性。
---

# 权限矩阵

{% hint style="info" %}
专业版及以上适用
{% endhint %}

## 主要特点

* 灵活性：可针对不同数据库、表格和字段设置独立的权限规则，
* 精确控制：精细化管理字段和记录的查看、编辑、创建等操作权限
* 安全性：通过限制访问权限，提高企业数据的安全保障
* 协作效率：明确的权限划分有助于提高团队协作的清晰度和效率



## 应用场景示例

* 数据录入限制：允许团队成员添加新记录，但限制其修改现有数据
* 项目管理：确保项目成员只能访问和编辑其负责的项目部分
* 层级化数据访问：可以灵活组织角色做到企业管理层可查看全部数据，而普通员工仅能访问与其职责相关的信息

## 操作权限矩阵

空间中具有搭建者权限的用户，可以操作开启权限矩阵。权限矩阵开启后，当前用户自动成为管理员，空间管理者也会成为管理员，所有其他成员会默认被指派为默认角色。

### 创建角色

点击界面右上方添加角色按钮，可以开始创建新的角色

<figure><img src="../.gitbook/assets/image (89).png" alt="" width="563"><figcaption></figcaption></figure>

进入角色设置界面，可以看到当前数据库所有的表。在这里可以对每一张表进行细节的权限设置

<figure><img src="../.gitbook/assets/image (91).png" alt="" width="563"><figcaption></figcaption></figure>

权限包括视图权限，字段权限记录权限，默认状态下，所有的权限都是开放的，你可以进行勾选配置，按照需求限制权限范围。

### 视图权限：

* 创建视图
* 删除视图
* 更新视图

### 字段（列）权限

你可以对表格中每一个字段进行权限限制，包括：

* 查看字段
* 删除字段
* 更新字段

### 记录（行）权限

你可以使用筛选条件组，来指定可以查看的记录范围。比如，添加条件选择商品类型等于"零件" 的记录，那么当前角色可查看的记录范围就被限制到“零件”类型的记录。

* 查看记录
* 删除记录
* 更新记录
* 对记录进行评论

<figure><img src="../.gitbook/assets/image (92).png" alt="" width="563"><figcaption></figcaption></figure>

修改完表格权限后，要点击表格名字左边的开关进行启用权限才会生效，如果不启用则默认为无权限。

## 注意事项

{% hint style="info" %}
空间内的可管理用户具有管理员权限，可以访问空间中的数据库的所有数据
{% endhint %}

{% hint style="info" %}
在权限矩阵开启之后，所有新创建的表默认是无权限，需要进行权限配置后，才能按照角色权限进行访问。
{% endhint %}

{% hint style="info" %}
开启权限矩阵的用户将成为当前数据库的管理员，自动化功在开启权限矩阵后仅允许管理员访问
{% endhint %}
