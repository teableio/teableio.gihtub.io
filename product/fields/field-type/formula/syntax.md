# Syntax

#### Basic Elements

Our formula syntax includes several basic elements:

* **Strings**: Text enclosed in either single or double quotes, such as 'Hello' or "World".
* **Numbers**:
  * **Integers**: Pure numerical values like 123 or -456.
  * **Decimals**: Numbers with a decimal point, like 12.34 or -45.67.
* **Boolean values**: Representing true or false with `TRUE` and `FALSE`.
* **Field references**: Used to refer to the value of a specific field. They can be used directly with the identifier name or enclosed in braces, such as `{age}`.

#### Operators

Operators in formulas are used to connect or compare values:

* **Mathematical operations**:
  * Addition (+)
  * Subtraction (-)
  * Multiplication (\*)
  * Division (/)
  * Modulus (%)
* **Comparison operations**:
  * Greater than (>)
  * Less than (<)
  * Greater than or equal to (>=)
  * Less than or equal to (<=)
  * Equal to (=)
  * Not equal to (!=)
* **Logical operations**:
  * Logical AND (&&)
  * Logical OR (||)
  * Bitwise AND (&)

#### Function Calls

You can call functions within your formulas. A function call consists of the function name, a pair of parentheses, and arguments inside the parentheses separated by commas.

For example: `sum(1, 2, 3)` calls a function named `sum` and passes three arguments to it: 1, 2, and 3.

#### Other Structures

1. **Parentheses**: You can use parentheses to alter the precedence of operations, e.g., `(1 + 2) * 3`.
2. **Comments**: To enhance readability or provide additional context for other users, you can include comments in your formulas. Block comments are enclosed with `/*` and `*/`, while line comments start with `//`.
3. **Whitespace and spaces**: Whitespace, newlines, and comments are generally ignored in formulas, but they can help improve the readability of your formulas.

#### Summary

You should now have a basic understanding of our formula syntax. Remember, the core purpose of formulas is to assist with data manipulation and calculations. By utilizing the basic elements, operators, and other structures mentioned above, you can construct a wide variety of formulas to meet your needs.
