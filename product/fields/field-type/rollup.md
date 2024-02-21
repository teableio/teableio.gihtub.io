# Rollup

### Introduction

Rollup fields allow you to aggregate data from related tables, such as sum, average, count, etc. This feature is perfect for scenarios that require aggregating related data for analysis and reporting.

### Relationship Between Rollup and Lookup Fields

Rollup fields rely on previously created lookup fields. Through the lookup field, rollup fields can "see" related records in another table and perform various calculation operations on them.

### Formatting After Rollup

After performing a rollup, not only can you obtain calculation results, but you can also format these results and configure interactive displays, making them easier to read and understand. Formatting allows you to present the rolled-up data in specific styles and formats, while interactive display lets you configure different UIs and interactions for the calculation results. This not only makes the data more readable but also helps ensure consistency across different contexts and application scenarios.

### How to Create a Rollup Field?

1. In the table with a lookup field, select "Add Field," then choose "Rollup Field."
2. Select an established lookup field to determine the data source for the rollup.
3. Choose the field you wish to aggregate, then specify the aggregation operation to perform. A complete list of operations is available below.

### Application Scenarios and Examples of Rollup Fields

Suppose you manage a bookstore's database, containing the following two tables:

**Table A**: Orders

**Table B**: Books

The orders table records customer purchase information, while the books table contains the pricing for each book.

If you want to aggregate the total amount for each order, you can:

1. Create a lookup field in the "Orders" table linking to the "Books" table.
2. Then, create a rollup field in the "Orders" table, selecting the lookup field created in the previous step.
3. Specify the rollup operation as "SUM" and choose the price field from the "Books" table as the object of the aggregation.

Suppose we have two tables, one for "Book Details" and the other for "Orders."

#### Book Details Table

| Book Name       | Price |
| --------------- | ----- |
| Code Complete   | $60   |
| Design Patterns | $40   |
| Refactoring     | $50   |

In this table, we list the price of each book.

#### Orders Table

| Order ID | Books (Lookup Field)           | Total Amount (Rollup Field) |
| -------- | ------------------------------ | --------------------------- |
| 001      | Code Complete, Design Patterns | $100                        |
| 002      | Refactoring, Design Patterns   | $90                         |

In the orders table, when we select certain books, the rollup field automatically calculates the total price of the selected books:

* For order 001, we selected "Code Complete" and "Design Patterns," priced at $60 and $40, respectively, so the total amount rollup field will display $100.
* For order 002, we selected "Refactoring" and "Design Patterns," priced at $50 and $40, respectively, so the total amount rollup field will display $90.

Thus, by combining lookup and rollup fields, we can easily calculate the total amount for each order in the orders table automatically, without needing to manually input or calculate.

### Supported Rollup Formulas

| Formula Name   | Explanation                                                                            |
| -------------- | -------------------------------------------------------------------------------------- |
| COUNTALL       | Counts all values, including non-null and null                                         |
| COUNTA         | Counts non-null values                                                                 |
| COUNT          | Counts the number of records                                                           |
| SUM            | Calculates the total sum of all numerical values                                       |
| MAX            | Returns the maximum value among all numerical values                                   |
| MIN            | Returns the minimum value among all numerical values                                   |
| AND            | Returns true if all values are true                                                    |
| OR             | Returns true if any value is true                                                      |
| XOR            | Returns true if an odd number of values are true                                       |
| ARRAY\_JOIN    | Joins all values in an array into a string                                             |
| ARRAY\_UNIQUE  | Removes duplicate values from an array and returns a new array with only unique values |
| ARRAY\_COMPACT | Removes all null values from an array and returns a new array                          |
| CONCATENATE    | Concatenates multiple values into one string                                           |

### Considerations

* **Performance Considerations**: Extensive rollup operations may impact performance, especially when dealing with a large number of data records. The system will provide the fastest calculation speed possible, but timely optimization and review of your rollup settings can ensure better write performance for your application.
* **Rollup Formulas**: Rollup fields automatically offer allowed rollup formulas based on the data type of your chosen rollup field, so you won't always see all the rollup formulas available.

### Conclusion

Rollup fields are one of the powerful tools for data

analysis, lightening the burden of manually aggregating and updating data through automated calculations. They offer a quick, flexible way to view and analyze aggregate information on related data.
