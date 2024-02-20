# Filter

## Filtering

#### Introduction

Filtering is a key tool in data management, enabling users to quickly locate datasets based on specific criteria. This document provides a detailed introduction to the filtering feature, including explanations of operators, field types, and condition grouping, assisting users in fully understanding and utilizing filtering for data analysis and management.

#### Basic Rules Checklist

**Adding Conditions**

* Users can set filtering rules by clicking the "Add Condition" button.
* Each condition consists of a field, an operator, and a value.
* Supports directly entering a value or selecting from preset options.

**Adding Condition Groups**

* Users can create condition groups by clicking the "Add Group" button, using "AND" or "OR" logic to connect conditions.
* Groups can be nested within each other to implement complex filtering logic.

**Supported Base Types and Operators**

**Text Type**

Equals, does not equal, contains, does not contain, is empty, is not empty

**Number Type**

\=, ≠, >, ≥, <, ≤, is empty, is not empty

**Date Type**

Before, after, between, equals, does not equal, is empty, is not empty

**Boolean Field**

Yes, no

**Custom Option Field**

Equals, does not equal

**Operators and Their Input Data Types**

* Text operators accept string type data.
* Number operators accept numerical type data.
* Date operators accept date type data.
* Boolean operators do not require input, just select directly.
* Custom option operators accept predefined options.

#### Mapping of Field Types to Operators

<table><thead><tr><th>Field Type</th><th>Supported Operators</th><th width="135">Input Data</th><th>Illustration</th></tr></thead><tbody><tr><td>Single Line Text</td><td>Equals, does not equal, contains, does not contain, is empty, is not empty</td><td>Text input</td><td><a href="../../zh/.gitbook/assets/image%20(41).png"><img src="https://github.com/teableio/teableio.gihtub.io/raw/main/zh/.gitbook/assets/image%20(41).png" alt=""></a></td></tr><tr><td>Long Text</td><td>Equals, does not equal, contains, does not contain, is empty, is not empty</td><td>Text input</td><td><a href="../../zh/.gitbook/assets/image%20(42).png"><img src="https://github.com/teableio/teableio.gihtub.io/raw/main/zh/.gitbook/assets/image%20(42).png" alt=""></a></td></tr><tr><td>User</td><td>Equals, does not equal, includes any, excludes any, is empty, is not empty</td><td>User selection list and current user</td><td></td></tr><tr><td>Attachment</td><td>Is empty, is not empty</td><td>-</td><td><a href="../../zh/.gitbook/assets/image%20(43).png"><img src="https://github.com/teableio/teableio.gihtub.io/raw/main/zh/.gitbook/assets/image%20(43).png" alt=""></a></td></tr><tr><td>Multiple Select</td><td>Includes any, includes all, exactly matches, excludes any, is empty, is not empty</td><td>Option selection list</td><td><a href="../../zh/.gitbook/assets/image%20(45).png"><img src="https://github.com/teableio/teableio.gihtub.io/raw/main/zh/.gitbook/assets/image%20(45).png" alt=""></a><a href="../../zh/.gitbook/assets/image%20(44).png"><img src="https://github.com/teableio/teableio.gihtub.io/raw/main/zh/.gitbook/assets/image%20(44).png" alt=""></a></td></tr><tr><td>Single Select</td><td>Equals, does not equal, includes any, excludes any</td><td>Option selection list</td><td><a href="../../zh/.gitbook/assets/image%20(46).png"><img src="https://github.com/teableio/teableio.gihtub.io/raw/main/zh/.gitbook/assets/image%20(46).png" alt=""></a><a href="../../zh/.gitbook/assets/image%20(47).png"><img src="https://github.com/teableio/teableio.gihtub.io/raw/main/zh/.gitbook/assets/image%20(47).png" alt=""></a></td></tr><tr><td>Date</td><td>Equals, does not equal, within, before, after, on or before, on or after, is empty, is not empty</td><td>Preset range list and precise date picker</td><td><a href="../../zh/.gitbook/assets/image%20(48).png"><img src="https://github.com/teableio/teableio.gihtub.io/raw/main/zh/.gitbook/assets/image%20(48).png" alt=""></a><a href="../../zh/.gitbook/assets/image%20(49).png"><img src="https://github.com/teableio/teableio.gihtub.io/raw/main/zh/.gitbook/assets/image%20(49).png" alt=""></a><a href="../../zh/.gitbook/assets/image%20(50).png"><img src="https://github.com/teableio/teableio.gihtub.io/raw/main/zh/.gitbook/assets/image%20(50).png" alt=""></a></td></tr><tr><td>Number</td><td>=, ≠, >, ≥, &#x3C;, ≤, is empty, is not empty</td><td>Number</td><td><a href="../../zh/.gitbook/assets/image%20(51).png"><img src="https://github.com/teableio/teableio.gihtub.io/raw/main/zh/.gitbook/assets/image%20(51).png" alt=""></a></td></tr><tr><td>Duration</td><td>Equals, does not equal, greater than, greater than or equal to, less than, less than or equal to, is empty, is not empty</td><td>Number</td><td>Same as Number</td></tr><tr><td>Rating</td><td>Equals, does not equal, greater than, greater than or equal to, less than, less than or equal to, is empty, is not empty</td><td>Number</td><td><a href="../../zh/.gitbook/assets/image%20(52).png"><img src="https://github.com/teableio/teableio.gihtub.io/raw/main/zh/.gitbook/assets/image%20(52).png" alt=""></a></td></tr><tr><td>Formula</td><td>Operators determined by result type</td><td>Text, number, date</td><td><a href="../../zh/.gitbook/assets/image%20(53).png"><img src="https://github.com/teableio/teableio.gihtub.io/raw/main/zh/.gitbook/assets/image%20(53).png" alt=""></a><a href="../../zh/.gitbook/assets/image%20(54).png"><img src="https://github.com/teableio/teableio.gihtub.io/raw/main/zh/.gitbook/assets/image%20(54).png" alt=""></a></td></tr><tr><td>Rollup</td><td>Operators determined by result type</td><td>Text, number, date</td><td><a href="../../zh/.gitbook/assets/image%20(36).png"><img src="https://github.com/teableio/teableio.gihtub.io/raw/main/zh/.gitbook/assets/image%20(36).png" alt=""></a></td></tr><tr><td>Count</td><td>Equals, does not equal, greater than, greater than or equal to, less than, less than or equal to, is empty, is not empty</td><td>Number</td><td>Same as Number</td></tr><tr><td>Link to Another Record</td><td>Equals, does not equal, contains, does not contain, includes any, includes all, exactly matches, excludes any, is empty, is not empty</td><td>Link value selection box</td><td><a href="../../zh/.gitbook/assets/image%20(55).png"><img src="https://github.com/teableio/teableio.gihtub.io/raw/main/zh/.gitbook/assets/image%20(55).png" alt=""></a><a href="../../zh/.gitbook/assets/image%20(56).png"><img src="https://github.com/teableio/teableio.gihtub.io/raw/main/zh/.gitbook/assets/image%20(56).png" alt=""></a></td></tr><tr><td>Created Time</td><td>Equals, does not equal, within, before, after, on or before, on or after, is empty, is not empty</td><td>Preset range list and precise date picker</td><td>Same as Date</td></tr><tr><td>Modified Time</td><td>Equals, does not equal, within, before, after, on or before, on or after, is empty, is not empty</td><td>Preset range list and precise date picker</td><td>Same as Date</td></tr><tr><td>Creator</td><td>Equals, does not equal</td><td>User selection list and current user</td><td>Same as User</td></tr><tr><td>Modifier</td><td>Equals, does not equal</td><td>User selection list and current user</td><td>Same as User</td></tr><tr><td>AutoNumber</td><td>=, ≠, >, ≥, &#x3C;, ≤ </td><td>Same as Number </td><td>Same as Number</td></tr><tr><td>Button</td><td></td><td></td><td></td></tr></tbody></table>

**The operators for formula and rollup fields are determined by their result type, which may include all the above operators.**

#### Condition Grouping Feature

Condition grouping allows users to combine multiple conditions using logical operators (such as "AND/OR"). The core of this feature lies in its flexibility and capability for logical combination, enabling users to construct nested logic based on complex requirements for refined data filtering.

**AND/OR Logic**

* **AND logic**: All conditions within a group must be met to select data.
* **OR logic**: Meeting any condition within a group is sufficient to select data.

**Combining Operations**

* Users can create multi-layered nested condition groups, each with its own logical relationship.
* Groups can be infinitely nested to achieve extremely complex filtering logic.

**Steps to Use Condition Grouping**

1. **Create a Group**: Users create a new condition group through the interface command.
2. **Add Conditions**: Inside the group, users can add multiple filtering conditions.
3. **Select Logic**: For conditions within a group, users choose between "AND" or "OR" logic.
4. **Nest Groups**: Users can continue to create new subgroups within a group, setting conditions and logic for them.
5. **Optimize Logic**: Users can adjust the logical relationships between conditions and groups as needed to achieve the desired filtering effect.

**Example**

If a user needs to filter a database to find all records "created by a specific user" and "modified in the last week or rated above 8," they can build the following condition group logic:

* Main Group (AND)
  * Condition 1: Creator = Specific User (AND)
  * Subgroup (OR)
    * Condition 2: Last Modified Time = Last Week
    * Condition 3: Rating > 8

With such grouping and condition settings, the filtering feature can precisely output records that meet all the specified criteria.

#### Summary

The filtering feature and its condition grouping functionality offer an efficient, flexible way to view and manipulate data. Users can quickly locate needed information through precise filtering rules, whether for simple queries or complex data analysis tasks. This guide aims to help users better utilize the filtering feature, enhancing efficiency and accuracy in data processing.
