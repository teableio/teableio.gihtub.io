# Single or multi value (advanced)

### Introduction

In the design of table fields, you may have noticed the concepts of "single value" and "multiple values". These describe whether a cell in a field stores a single value or a series of values (array). **Each type of field** is categorized into two states: single and multiple values. Understanding these concepts is very useful for advanced usage.

### Basic Concepts: Single vs. Multiple Values

* **Single Value**: A single, definite piece of information. For example, "today's date" or "Zhang San's phone number".
* **Multiple Values**: A series of information. For example, "all the dates of this month" or "all of Zhang San's phone numbers".

### Default Single and Multiple Values

| Field Name       | Description        | Default State   |
| ---------------- | ------------------ | --------------- |
| SingleLineText   | Single Line Text   | Single Value    |
| LongText         | Long Text          | Single Value    |
| User             | User               | Optional\*      |
| Attachment       | Attachment         | Multiple Values |
| Checkbox         | Checkbox           | Single Value    |
| MultipleSelect   | Multiple Select    | Multiple Values |
| SingleSelect     | Single Select      | Single Value    |
| Date             | Date               | Single Value    |
| Number           | Number             | Single Value    |
| Duration         | Duration           | Single Value    |
| Rating           | Rating             | Single Value    |
| Formula          | Formula            | Dynamic\*       |
| Rollup           | Rollup             | Dynamic\*       |
| Count            | Count              | Single Value    |
| Link             | Link               | Optional\*      |
| CreatedTime      | Created Time       | Single Value    |
| LastModifiedTime | Last Modified Time | Single Value    |
| CreatedBy        | Created By         | Single Value    |
| LastModifiedBy   | Last Modified By   | Single Value    |
| AutoNumber       | Auto Number        | Single Value    |
| Button           | Button             | Single Value    |

### Status Changes Due to Associations and References

Although most fields have their default single or multiple value status, the status of fields can change due to association and reference mechanisms.

*   **Impact of Association Fields**: If an associated field is multiple values, then all fields referencing this associated field will also become multiple values.

    **Example**: Imagine you have a "Tasks" table and an "Employees" table. If a task can be completed by multiple employees, then the association field in the "Tasks" table related to the "Employees" table will be multiple values. Consequently, any field referencing this association field (such as employees' phone numbers) will also become multiple values.
*   **Formulas and Rollups**: While they are usually single values, formulas can reference multiple value fields, thus becoming multiple values themselves. Likewise, they become multiple values if they are referenced through a multiple value association field.

    **Example**: Suppose you have a formula field designed to calculate the total salary of each employee. If this formula references a multiple value salary field (for instance, salaries of an employee on different projects), then this formula field will also become multiple values.

### Example

Understanding the difference between single and multiple values is very useful for advanced users. It helps users comprehend why some fields have multiple values and guides them on how to properly set up and use these fields.

#### Employee Information and Project Tasks

Suppose you manage a company and have created two tables in Teable: `Employee Information` and `Project Tasks`.

1. **Employee Information** table:

| Name      | Phone Number | Email Address     | Tasks          |
| --------- | ------------ | ----------------- | -------------- |
| Zhang San | 123456       | zhang@company.com | Task 1, Task 2 |
| Li Si     | 789012       | li@company.com    | Task 3         |

2. **Project Tasks** table:

| Task Name | Responsible Employee | Deadline   | Progress |
| --------- | -------------------- | ---------- | -------- |
| Task 1    | Zhang San            | 2023-11-20 | 50%      |
| Task 2    | Zhang San            | 2023-12-01 | 30%      |
| Task 3    | Li Si                | 2023-11-15 | 80%      |

In this example:

* The "Tasks" field in the **Employee Information** table is a multiple value field because an employee may be responsible for multiple tasks.
* The "Responsible Employee" field in the **Project Tasks** table is a single value field since each task is managed by only one employee.

When you create a new task in the "Project Tasks" table and assign a responsible employee, the "Tasks" field of that employee in the **Employee Information** table automatically updates to include all tasks they are responsible for.

#### Numerical Mini-charts

**Example**: You might wonder
