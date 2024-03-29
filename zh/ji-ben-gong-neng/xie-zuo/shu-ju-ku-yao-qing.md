# 数据库邀请

### 注意事项

（该功能暂未上线）

#### 权限

用户可以邀请其他用户加入数据库，前提是这些用户的权限级别与自己相同或更低，且空间所有者或组织管理员未限制添加协作者。



### 理解数据库协作

数据库协作者可以访问特定数据库中的所有数据（在指定的权限级别上），而不必访问工作区中的其他数据库。这对于与不需要查看整个空间中所有数据库的人合作非常有用。

如果你发现自己在单个空间的多个数据库中反复添加同一个人作为数据库协作者，你可能会考虑将此人设为空间协作者。

### 在 Teable 中添加数据库协作者

要向个别数据库添加一个或多个协作者，而不是将他们添加到整个空间，你需要导航到该数据库的邀请对话框。你可以从两个不同的位置访问数据库的邀请对话框：

* 首页 - 浏览你想要邀请的数据库。当你悬停在数据库名称上时，你会看到一个 ... 图标出现，点击该图标。接下来，点击“邀请”选项。
* 打开数据库 - 你也可以通过点击页面顶部右侧的“邀请”按钮，在数据库内部访问数据库的邀请对话框。

这些方法中的任何一个都会打开邀请对话框。有两种不同的方式可以与其他用户共享数据库访问权限：

#### 通过电子邮件或群组邀请

在邀请对话框内，你可以输入你希望邀请合作的用户或群组的电子邮件地址。

通过输入一个电子邮件并按回车，你可以添加多个电子邮件。每个电子邮件地址将以灰色标记显示。

使用右侧的下拉菜单为协作者设置权限级别。

可选地，添加一条消息，为新协作者提供你共享内容的背景信息。

你还可以通过勾选“邀请至 {空间名称} 空间中的所有其他数据库”来选择将此人或这些人作为空间协作者邀请。

点击“邀请”按钮。

#### 通过链接邀请

另外，你可以创建一个链接，任何打开该链接的人（在指定的权限级别上）都将获得访问权限。请注意，你需要至少具有数据库的创建者权限才能创建邀请链接——如果你是编辑者、评论者或仅读取权限的数据库协作者，你不能创建邀请链接。要从打开的邀请对话框创建邀请链接：

默认情况下，邀请对话框设置为通过电子邮件邀请，因此点击“创建链接”选项（在数据库内）或“通过链接邀请”选项（从首页）。

现在，设置与邀请链接相关联的权限级别。默认情况下，它设置为允许任何打开链接的人获得创建者权限，但如果你点击权限下拉菜单，你也可以设置，使任何打开链接的人都将获得编辑者、评论者或仅读取权限的访问权限。

你还可以选择允许任何拥有 Teable 账户的人通过链接工作，或者你可以设置链接仅对特定域名的电子邮件地址的人有效（推荐）。后者选项在你为一个组织工作且希望限制只有组织内的人能访问数据库时非常有用。

设置权限级别和域限制（如果需要）后，点击“创建链接”按钮以创建邀请链接。创建链接将在邀请对话框内创建一个名为“邀请链接”的新部分，显示为该数据库创建的所有邀请链接。一个数据库可以有多个邀请链接，具有不同的权限级别和域限制。

点击链接将其复制到剪贴板。你应该会看到一个通知弹出在屏幕上，确认链接已复制。

要删除邀请链接，点击邀请链接右侧的 X。删除邀请链接将使其失效，任何尝试使用旧链接的人都将无法通过旧链接访问数据库。

### 移除数据库协作者

要移除数据库协作者：

从包含你想要移除的协作者的打开数据库中，点击页面右上角的“邀请”按钮。

这将打开邀请对话框。接下来，点击当前协作者列表旁边的“管理”按钮。

这将打开一个新窗口，你可以在其中选择要移除的个别协作者，或勾选顶部的框以移除多个协作者。至少需要保留一名所有者。

### 管理数据库和空间协作者

要在一个地方管理你的协作者：

首先，从首页打开你的空间设置。如果你不熟悉操作步骤，这里有指南可供参考。

从那里，你可以看到该空间中所有数据库的列表，以及哪些协作者被邀请到每个数据库。

你也可以从同一屏幕管理空间协作者。
