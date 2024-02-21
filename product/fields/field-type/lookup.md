# Lookup

### Introduction

A Lookup is an action of creating a field based on an existing related field. It allows you to reference specific data fields from one table in another table using a related field. This not only enables data sharing across tables but also ensures data consistency and integrity.

> Unlike other products, our "Lookup" is not a field type. Here, Lookup is considered a special action. When you create a Lookup, you are essentially creating a field that is identical to the field you referenced, with data being retrieved from the associated records of that field.

### Relationship Between Lookup Fields and Related Fields

To use a Lookup field, you first need to create a related field to link two tables. Once the link is established, you can use a Lookup field in one table to reference any field from another table.

### How to Create a Lookup Field

Ensure you have created a related field for the two tables you want to link. In the table where you wish to add a Lookup field, select "Add Field," then choose "Lookup." Based on the existing related field, select the source table and the specific field you wish to reference.

### Application Scenarios and Examples of Lookup Fields

Consider the following bookstore scenario:

First, we have two tables: "Author Details" and "Books."

#### Author Details Table

| Author Name     | Date of Birth |
| --------------- | ------------- |
| Steve McConnell | 1960          |
| Martin Fowler   | 1963          |
| Erich Gamma     | 1961          |

This table lists each author's date of birth.

#### Books Table

| Book Title      | Author Link     | Author Date of Birth (Lookup Field) |
| --------------- | --------------- | ----------------------------------- |
| Code Complete   | Steve McConnell | 1960                                |
| Refactoring     | Martin Fowler   | 1963                                |
| Design Patterns | Erich Gamma     | 1961                                |

In the Books table, when an author is selected, the Author Date of Birth Lookup field automatically displays the selected author's date of birth:

* For "Code Complete," selecting author Steve McConnell, born in 1960, populates the Author Date of Birth Lookup field with 1960.
* For "Refactoring," selecting author Martin Fowler, born in 1963, results in the Lookup field showing 1963.
* For "Design Patterns," choosing author Erich Gamma, born in 1961, updates the Lookup field to display 1961.

Using Lookup fields, we can easily display each author's date of birth in the "Books" table without having to re-enter or manually look up the information for each book. This is a highly useful feature that prevents redundant data entry, ensures data consistency and accuracy, and simplifies the data management process.

### Formatting and Show As:

The data type, [formatting](../formatting.md), and [show as](../show-as.md) of Lookup fields are determined by the referenced field. This means if you reference a date-type field, the Lookup field will also be treated as a date type and can be formatted accordingly.

### Formulas and Summary Calculations:

When Lookup fields are used in formulas or summary calculations, their data type is also determined by the referenced field. For example, if you use a Lookup field in a formula that references a numeric type, that Lookup field will behave like a number in the formula.

### Considerations

**Data Integrity:** Ensure the source table and field you reference are existing and valid. Deleting the source table or field may result in the Lookup field not displaying data correctly. Display of Lookups: Lookup fields can have the same display as the referenced field, meaning if you change the data's display in the source table, it will also reflect in the Lookup field.

**Single or Multiple Values:** The referenced field might change from a single-value type to a multi-value type due to many-to-one relationships, such as a single-select field becoming "multi-select" after being referenced due to multiple related records. This is a normal logic. For further understanding, please refer to the [Single or Multiple Values section](../single-or-multi-value-advanced.md).

### Conclusion

Lookup fields offer an efficient, concise way to reference and display data across tables. This flexibility allows users to easily share and compute data between different tables without the need for complex data synchronization or conversion. Understanding this concept will help users utilize the product more flexibly and efficiently, maximizing their data management and automation capabilities.
