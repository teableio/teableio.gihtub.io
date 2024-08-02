# 协作权限

### 概览

Teable 提供了灵活的协作权限设置，以适应不同团队和项目的需求。从完全控制的所有者到仅具有查看权限的只读用户，Teable 确保每位用户都能在其权限范围内高效地参与工作。通过细分为所有者/创建者、编辑者、评论者和只读四种角色，Teable 使得数据库的管理和协作变得既安全又便捷。无论是进行数据的添加、修改，还是分享视图链接，或者是调整空间设置，每一项操作都有明确的权限控制，确保数据的安全性和项目的顺利进行。

> Teable 提供更细粒度的的数据库级别权限控制功能，请查看[权限矩阵](../quan-xian-guan-li.md)章节

### 通用操作

<table data-header-hidden><thead><tr><th width="206"></th><th align="center"></th><th align="center"></th><th align="center"></th><th align="center"></th></tr></thead><tbody><tr><td><strong>描述</strong></td><td align="center"><strong>所有者/创建者</strong></td><td align="center"><strong>编辑者</strong></td><td align="center"><strong>评论者</strong></td><td align="center"><strong>只读</strong></td></tr><tr><td>在你被分配的权限等级下访问/查看整个数据库</td><td align="center">✅</td><td align="center">✅</td><td align="center">✅</td><td align="center">✅</td></tr><tr><td>邀请与你权限等级相同或以下的用户</td><td align="center">✅</td><td align="center">✅</td><td align="center">✅</td><td align="center">✅</td></tr><tr><td>创建或删除视图分享链接</td><td align="center">✅</td><td align="center">✅</td><td align="center"></td><td align="center"></td></tr><tr><td>创建或删除数据库协作者邀请链接</td><td align="center">✅</td><td align="center"></td><td align="center"></td><td align="center"></td></tr><tr><td>重命名数据库</td><td align="center">✅</td><td align="center"></td><td align="center"></td><td align="center"></td></tr></tbody></table>

### 记录操作

| **描述**     | **所有者/创建者** | **编辑者** | **评论者** | **只读** |
| ---------- | :---------: | :-----: | :-----: | :----: |
| 对记录进行评论    |      ✅      |    ✅    |    ✅    |        |
| 添加、删除或修改记录 |      ✅      |    ✅    |         |        |

### 视图操作

| **描述**       | **所有者/创建者** | **编辑者** |   **评论者**  | **只读** |
| ------------ | :---------: | :-----: | :--------: | :----: |
| 下载视图的 CSV 文件 |      ✅      |    ✅    |      ✅     |    ✅   |
| 打印视图         |      ✅      |    ✅    |      ✅     |    ✅   |
| 复制视图中的数据     |      ✅      |    ✅    |      ✅     |    ✅   |
| 添加、删除或修改视图   |      ✅      |    ✅    | ✅ \*仅限个人视图 |        |
| 锁定和解锁视图      |      ✅      |         |            |        |
| 删除其他协作者的个人视图 |      ✅      |         |            |        |

### 字段操作

| **描述**             | **所有者/创建者** | **编辑者** | **评论者** | **只读** |
| ------------------ | :---------: | :-----: | :-----: | :----: |
| 添加、删除、复制、重命名和自定义字段 |      ✅      |         |         |        |

### 表格操作

| **描述**         | **所有者/创建者** | **编辑者** | **评论者** | **只读** |
| -------------- | :---------: | :-----: | :-----: | :----: |
| 添加、删除、复制和重命名表格 |      ✅      |         |         |        |
| 将 CSV 导入为新表格   |      ✅      |         |         |        |

### 空间操作

<table><thead><tr><th width="207">描述</th><th align="center">所有者</th><th align="center">创建者</th><th align="center">编辑者</th><th align="center">评论者</th><th align="center">只读</th></tr></thead><tbody><tr><td>在你被分配的权限等级下访问空间内的所有数据库</td><td align="center">✅</td><td align="center">✅</td><td align="center">✅</td><td align="center">✅</td><td align="center">✅</td></tr><tr><td>邀请与你权限等级相同或以下的用户</td><td align="center">✅</td><td align="center">✅</td><td align="center">✅</td><td align="center">✅</td><td align="center">✅</td></tr><tr><td>重命名空间</td><td align="center">✅</td><td align="center">✅</td><td align="center"></td><td align="center"></td><td align="center"></td></tr><tr><td>在空间中添加和删除数据库</td><td align="center">✅</td><td align="center">✅</td><td align="center"></td><td align="center"></td><td align="center"></td></tr><tr><td>在空间内重新排列数据库</td><td align="center">✅</td><td align="center">✅</td><td align="center"></td><td align="center"></td><td align="center"></td></tr><tr><td>将数据库从一个空间移动到另一个空间</td><td align="center">✅</td><td align="center">✅</td><td align="center"></td><td align="center"></td><td align="center"></td></tr><tr><td>调整账单设置，升级空间</td><td align="center">✅</td><td align="center"></td><td align="center"></td><td align="center"></td><td align="center"></td></tr><tr><td>授予所有者权限</td><td align="center">✅</td><td align="center"></td><td align="center"></td><td align="center"></td><td align="center"></td></tr></tbody></table>
