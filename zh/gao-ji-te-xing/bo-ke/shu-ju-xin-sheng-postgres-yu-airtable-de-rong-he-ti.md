---
description: >-
  Teable 是一款无代码数据库产品，将以 Postgres 为代表的关系型数据库转换成了电子表格式的交互界面，将 Postgres
  的强大能力无代码化，让低成本的构建强大可扩展的应用成为可能。
---

# 数据新生：Postgres 与 Airtable 的融合体

在这篇文章中，我们会描述对这款产品的设计理念，分享现在的产品进展。并且跟大家阐述将 Postgres 与 Airtable 结合会产生如此令人激动的全新能力以及我们对于未来无代码软件开发形式的愿景。

## 为 Postgres 构建一个漂亮的电子表格界面

数据库和电子表格像一对兄弟，一个严肃认真，性能卓越，为应用程序提供强有力的数据支撑，但是需要开发者通过代码来驱动。一个灵活易用，方便快捷，是现代办公体系中数据处理的基础设施，几乎是人人必备的基础技能。

我们创造了一个两者的有机结合体，不仅将普通的编辑操作转换为了所见即所得。还有机的继承了列数据类型的机制，使其其具有了创造强大，稳定应用的基础。

我们当然不是第一个尝试将表格界面作为数据库编辑方式的产品，有很多广为人知的解决方案都采用了类似的形式。但是我们希望更进一步，让一个团队中的所有成员都可以直接在同一个数据库上进行协作和搭建应用，并围绕这一点补充所有所需要的基础能力。

这是 Teable 的表格视图界面，在这里，你所看到的每一张表格，对应的都是 Postgres 中的一张物理表。

<figure><img src="../../.gitbook/assets/image (2) (1) (1).png" alt=""><figcaption></figcaption></figure>

我们成功地将数据库的表格，转换为类似于 Airtable 的电子表格界面，并且确保这个界面足够丝滑顺畅。

### 极致的无代码体验

### 完备的字段类型

我们拥有所有必要的[字段类型](../../ji-ben-gong-neng/zi-duan/)，组成了构建应用的完备条件, 特别是处理数据关联和计算相关的强大基础。

<figure><img src="../../.gitbook/assets/image (1) (1) (1).png" alt="" width="325"><figcaption><p>字段列表</p></figcaption></figure>

### 电子表格和实时协同

是专业的数据库也是一个灵活的的电子表格，还可以和[协作者](../../ji-ben-gong-neng/xie-zuo/)进行实时协同

<figure><img src="../../.gitbook/assets/image (1) (1) (1) (1).png" alt="" width="563"><figcaption></figcaption></figure>

### 无限滚动

无需翻页的顺畅滚动，你可以无限制的滚动到数据库的任意位置，就像在 google sheet 中那样

{% file src="../../.gitbook/assets/unlimited-scroll.mp4" %}

### 更多的必备良好操作体验

Teable 提供了更丰富的操作体验和筛选、排序、拖拽等功能，确保了从 Airtable、Baserow、Notion、Monday.com、Google Sheet 迁移过来的用户能够立即感受到这是他们一直在寻找的 spreadsheet-database。

### 数据关联和计算

当你进入 Teable 的第一刻起，我们已经确保了你不会应为数据之间的计算而感到烦恼，这是你业务能够灵活的在 Teable 上运转的基础保障。

Teable 卓越的数据处理能力，不仅体现在数据量上，更是在细节能力中。\
[Formula](../../ji-ben-gong-neng/zi-duan/gao-ji-zi-duan/han-shu/), [Link](../../ji-ben-gong-neng/zi-duan/gao-ji-zi-duan/guan-lian.md), [Lookup](../../ji-ben-gong-neng/zi-duan/gao-ji-zi-duan/yin-yong.md), [Rollup](../../ji-ben-gong-neng/zi-duan/gao-ji-zi-duan/hui-zong.md) 字段让你的销售数据，库存数据，项目数据能够完全按照你想要的方式来构建和获取。

数据库就不再是一个藏在机柜里面的引擎，而是一个可以直接与用户直接交互的强大工具。普通人也可以像开发者一样，来去搭建出解决自己业务场景的应用了

## 不只是更强的 Airtable

### 百万级数据，毫秒级速率

Airtable 在表格式数据库交互方面确实提供了革命性的创新，并激发了我们无限的灵感，但在某些关键领域，它仍然受限于自身的设计。这些限制不仅影响了它的性能和扩展性，而且也限制了它在企业级应用场景中的应用潜力。

与Airtable 最高10万行限制相比，Teable 的能力上限是建立在真实的物理关系型数据库之上的。这意味着，每一个在 Teable 上看似简单的表格，背后都是一个真正的数据库表。因此，查询和存储性能在理论上是接近数据库本身的能力，所以我们可以说 Teable 对数据行数没有上限。 更进一步，我们测试了一张包含一百万行填充满数据的表格[（测试表格）](https://app.teable.io/share/shrVgdLiOvNQABtW0yX/view)，在没有进行索引优化的情况下，复杂的筛选或统计查询能在大约 200 毫秒内完成。但是，最引人注目的是，Teable 也支持索引优化。这意味着，你可以进一步提升查询性能，让 Teable 支持千万行甚至更多的数据。

### 消费级的无代码数据库

超高的性能也意味着 Teable 可以提供更高的API请求频率，更重要的是，它继承了主流数据库管理系统的核心能力，使得开发者完全可以将 Teable 作为一个可靠的应用数据库，而在此之上能够构建出真正强大而且健壮的应用程序，并且大幅降低应用的运营成本。显而易见，通过 Teable API 来搭建应用，意味着你不再需要自己创建数据库，不在需要开发任何运营管理后台，并且可以通过数据库连接去接入专业的数据分析工具，任何需求的变化都能快速响应，开发者只需要聚焦核心的创意。

同时，Teable 的架构还带来了另一重要的能力，原生数据库能力，或者说 SQL 能力。这使得用户可以能够无缝集成各类数据库工具，确保数据消费链路的通畅无阻。同时还可以具有一个非常重要的特性：选择在享有云端便利性的同时自己来保管自己的数据。

### 100%数据所有权

不同于那些封闭式的 SaaS工具，我们立足于为用户提供一个无代码的应用层，同时保留了用户对其数据完全控制的能力。这种独特的设计选择允许用户既可以便捷地使用我们托管的 Postgres 实例，也可以选择与自己部署的数据库实例相连 —— 比如接入 [Supabase](https://supabase.com/) （一种优秀Serverless 数据库供应商）。这意味着，即便您不是编程专家，也可以轻松构建一个完全自有的、功能强大的数据库环境。

更重要的是，我们尊重并支持标准的数据库结构，确保用户的数据不仅仅困于一个特定的平台。在 Teable 中创建的表格结构将会与数据库中的结构完全一致，这样，您不仅可以使用任何标准的数据库工具来进行数据迁移，还能通过SQL语句轻松地对数据进行查询。这种透明性和兼容性意味着您的数据策略可以随着业务的成长而自如地扩展，不受任何单一服务供应商的束缚。

## 分享几个使用案例

### 直接在数据库上协作

**场景描述**： 企业可以通过 Teable 直接在数据库上进行协作，管理其核心业务流程，如客户关系管理、订单处理、库存监控和项目管理。比如，销售团队可以实时更新客户信息和销售漏斗状态，而库存管理人员可以追踪产品库存并及时调整采购计划。

**案例应用**： 一家中型电商公司利用 Teable 构建了一个综合业务管理系统。通过这个系统，他们能够同步客户的订单记录，实时更新库存状态，并将这些数据与正在进行的市场营销项目关联起来。这种集中化的信息管理方式提高了团队协作效率，加快了决策过程，并显著提升了客户满意度。

### 使用 Teable API 开发应用

**场景描述**： 开发者可以利用 Teable 的强大 [API](../../kai-fa-zhe/api/) 和**数据库直连**能力开发面向客户/用户的应用程序。同时，使用 Teable 的表格界面作为运营后台，方便非技术人员管理和更新应用内容，如更新产品列表、调整定价策略等。

**案例应用**： 一家创业公司开发了一个个性化旅游推荐应用，使用 Teable API 处理用户数据和推荐算法。他们还创建了一个用于内容管理的 Teable 后台，让市场团队能够轻松更新旅游目的地信息、特价活动和用户反馈。这种方式大大简化了运营流程，并使得产品更新更加迅速和灵活。

### 使用 API 导入数据到 Teable 进行数据分析

**场景描述**： 企业可以利用 Teable 的 API 功能，将外部数据源（如市场调研数据、社交媒体分析结果等）导入到 Teable。这些数据可以被进一步整合、汇总和分析，以支持更复杂的商业决策过程。

**案例应用**： 一家市场研究公司通过 API 将多个数据源（如调查问卷结果、社交媒体趋势等）导入到 Teable。在 Teable 中，他们使用自定义公式和数据视图来进行深度分析，如消费者行为模式分析和市场趋势预测。这种集成方式极大地提高了他们的数据处理能力和报告准确度。

## 最后

这是一个经过深思熟虑的项目，历时数年的开发和对数据库管理简化的持续热情。

我们的征途始于一个明确且深刻的目标：让每个人都能轻松地管理和操作复杂的数据库应用。为了实现这一目标，我们倾注了大量时间进行研究和开发，努力屏蔽数据库管理的复杂性，并为您提供一个简洁、高效的解决方案。

我们都有过这样的体验——你希望可以通过低代码工具快速的将自己的业务需求，这些工具虽然功能数量众多，但往往无法跟随者业务的增长进行进一步扩展。这正是 Teable 发挥作用的地方！

无论您是资深的开发者还是不懂数据库但想要完成自己应用的新手，您都可以在 Teable 中轻松管理数据，并实现复杂的数据库应用。我们的目标是弥合您的需求与功能完备的定制数据库应用之间的差距，让您能够迅速实现数据管理和应用构建，无论您的技术背景如何。

打造 Teable 并非一件轻松的事情。事实上，我们在开发过程中不断调整和优化我们的构想。并且还在继续不断地反复试验和精心打磨，我们迫不及待地希望您能亲身体验，相信 Teable 将彻底改变您对数据库管理和应用开发的看法。
