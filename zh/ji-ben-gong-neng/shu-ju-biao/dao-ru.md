---
description: teable能够很容易地从CSV、TSV、Excel文件导入数据到数据表中，这篇文章将会告诉你如何导入表格类文件到数据表。
---

# 导入

> 提示：目前Excel文件仅支持5MB及以下大小文件，若需要导入大量数据，请使用CSV、TSV类型文件

## 导入新数据表

### 第一步：点击左侧菜单+号按钮选择导入文件类型

<figure><img src="../../.gitbook/assets/image (77).png" alt=""><figcaption></figcaption></figure>

### 第二步：设置字段类型

上传文件后，teable会根据前5000行的数据，自动预测匹配字段的类型，当然您也可以根据自己需求主动调整。

<figure><img src="../../.gitbook/assets/image (80).png" alt=""><figcaption></figcaption></figure>

### 第三步：导入成功

> 注意：导入过程中（未收到成功或者失败通知），请不要删除列或者更改列类型以免影响导入结果

点击导入，teable将会在后台异步导入数据，成功将会通知用户成功或者失败（包括失败原因）。

<figure><img src="../../.gitbook/assets/image (82).png" alt=""><figcaption></figcaption></figure>

## 增量导入

对于已有的数据表，teable支持也增量导入

### 第一步：点击数据表选项，选择导入数据，选择需要导入的文件的类型。 

<figure><img src="../../.gitbook/assets/image (83).png" alt=""><figcaption></figcaption></figure>

### 第二步：选择导入的字段映射

上传对应需要导入的文件后，选择想要导入数据表对应字段的列，设置完成后，点击导入即可。

<figure><img src="../../.gitbook/assets/image (84).png" alt=""><figcaption></figcaption></figure>

### 第三步：导入成功

<figure><img src="../../.gitbook/assets/image (85).png" alt=""><figcaption></figcaption></figure>
