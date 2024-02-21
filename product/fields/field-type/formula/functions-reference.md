# Functions reference

### Introduction

This section offers a function cheat sheet, where you can quickly search all available functions and their basic usage methods.

### Numeric Functions

This section covers common numeric processing functions, including mathematical operations, statistical calculations, etc.

| Function Name | Description                                         | Input                    | Output | Example                                                                                   |
|---------------|-----------------------------------------------------|--------------------------|--------|-------------------------------------------------------------------------------------------|
| SUM           | Adds numbers together. Equivalent to number1 + number2 + ... | `number1, [number2, ...]` | Number | `SUM(100, 200, 300) => 600`                                                              |
| AVERAGE       | Returns the average value of the numbers.           | `number1, [number2, ...]` | Number | `AVERAGE(100, 200, 300) => 200`                                                          |
| MAX           | Returns the maximum value among the given numbers.  | `number1, [number2, ...]` | Number | `MAX(100, 200, 300) => 300`                                                              |
| MIN           | Returns the minimum value among the given numbers.  | `number1, [number2, ...]` | Number | `MIN(100, 200, 300) => 100`                                                              |
| ROUND         | Rounds a value to a specified number of decimal places. | `value, [precision]`      | Number | `ROUND(1.99, 0) => 2`<br>`ROUND(16.8, -1) => 20`                                          |
| ROUNDUP       | Always rounds up, away from zero.                   | `value, [precision]`      | Number | `ROUNDUP(1.1, 0) => 2`<br>`ROUNDUP(-1.1, 0) => -2`                                        |
| ROUNDDOWN     | Always rounds down, towards zero.                   | `value, [precision]`      | Number | `ROUNDDOWN(1.9, 0) => 1`<br>`ROUNDDOWN(-1.9, 0) => -1`                                    |
| CEILING       | Returns the nearest integer multiple that is greater than or equal to the value. | `value, [significance]`   | Number | `CEILING(2.49) => 3`<br>`CEILING(2.49, 1) => 2.5`                                         |
| FLOOR         | Returns the nearest integer multiple that is less than or equal to the value. | `value, [significance]`   | Number | `FLOOR(2.49) => 2`<br>`FLOOR(2.49, 1) => 2.4`                                             |
| EVEN          | Returns the smallest even number that is greater than or equal to the given value. | `value`                   | Number | `EVEN(0.1) => 2`<br>`EVEN(-0.1) => -2`                                                    |
| ODD           | Rounds positive values up to the nearest odd number, and negative values down to the nearest odd number. | `value`                   | Number | `ODD(0.1) => 1`<br>`ODD(-0.1) => -1`                                                      |
| INT           | Returns number1 if the logical argument is true, otherwise returns number2. Can also be used to create nested IF statements and to check if a cell is empty. | `value`                   | Number | `INT(1.9) => 1`<br>`INT(-1.9) => -2`                                                      |
| ABS           | Returns the absolute value.                          | `value`                   | Number | `ABS(-1) => 1`                                                                            |
| SQRT          | Returns the square root of a non-negative number.   | `value`                   | Number | `SQRT(4) => 2`                                                                            |
| POWER         | Calculates the specified base to the specified power. | `value`                   | Number | `POWER(2) => 4`                                                                           |
| EXP           | Calculates Euler's number (e) to the specified power. | `value`                   | Number | `EXP(0) => 1`<br>`EXP(1) => 2.718`                                                        |
| LOG           | Calculates the logarithm of a value in the provided base. If not specified, the base defaults to 10. | `value, [base=10]`        | Number | `LOG(100) => 2`<br>`LOG(1024, 2) => 10`                                                   |
| MOD           | Returns the remainder of dividing the first argument by the second. | `value, divisor`          | Number | `MOD(9, 2) => 1`

<br>`MOD(9, 3) => 0`                                                      |
| VALUE         | Converts a text string to a number.                 | `text`                    | Number | `VALUE("$1,000,000") => 1000000`                                                         |

### Text Functions

Here, you'll find common functions related to text processing, such as string manipulation, formatting, etc.

| Function Name        | Description                                             | Input                                        | Output       | Example                                                                 |
|----------------------|---------------------------------------------------------|-----------------------------------------------|--------------|-------------------------------------------------------------------------|
| CONCATENATE          | Joins multiple value type arguments into a single text value. | `text1, [text2, ...]`                        | Text         | `CONCATENATE("Hello ", "Teable") => Hello Teable`                      |
| FIND                 | Finds the position of a substring in the specified text. Returns 0 if the substring is not found. | `stringToFind, whereToSearch, [startFromPosition]` | Number       | `FIND("Teable", "Hello Teable") => 7`                                   |
| SEARCH               | Finds the position of a substring in the specified text. Returns empty if the substring is not found. Similar to FIND, but SEARCH returns 0 when the substring is not found. | `stringToFind, whereToSearch, [startFromPosition]` | Text or Empty | `SEARCH("Teable", "Hello Teable") => 7`                                 |
| MID                  | Extracts a specified number of characters from a specified position. | `text, whereToStart, count`                 | Text         | `MID("Hello Teable", 6, 6) => "Teable"`                                 |
| LEFT                 | Extracts a specified number of characters from the beginning of the string. | `text, count`                                | Text         | `LEFT("2023-09-06", 4) => "2023"`                                       |
| RIGHT                | Extracts a specified number of characters from the end of the string. | `text, count`                                | Text         | `RIGHT("2023-09-06", 5) => "09-06"`                                     |
| REPLACE              | Replaces a specified number of characters starting at a specified position with replacement text. | `text, whereToStart, count, replacement`     | Text         | `REPLACE("Hello Table", 7, 5, "Teable") => "Hello Teable"`              |
| REGEXP_REPLACE       | Replaces all substrings that match a regular expression with replacement text. | `text, regular_expression, replacement`      | Text         | `REGEXP_REPLACE("Hello Table", "H.* ", "") => "Teable"`                 |
| SUBSTITUTE           | Replaces old text with new text. An index number can be specified to replace a specific occurrence of the old text. If no index number is specified, all occurrences of the old text are replaced. | `text, oldText, newText, [index]`            | Text         | `SUBSTITUTE("Hello Table", "Table", "Teable") => "Hello Teable"`        |
| LOWER                | Converts a string to lowercase.                            | `text`                                       | Text         | `LOWER("Hello Teable") => "hello teable"`                               |
| UPPER                | Converts a string to uppercase.                            | `text`                                       | Text         | `UPPER("Hello Teable") => "HELLO TEABLE"`                               |
| REPT                 | Repeats a string a specified number of times.            | `text, number`                               | Text         | `REPT("Hello!", 3) => "Hello!Hello!Hello!"`                             |
| TRIM                 | Removes whitespace from the beginning and end of a string. | `text`                                       | Text         | `TRIM(" Hello ") => "Hello"`                                            |
| LEN                  | Counts the number of characters in a string.              | `text`                                       | Number       | `LEN("Hello") => 5`                                                     |
| T                    | Returns the argument if it is text, otherwise returns null. | `value`                                      | Text or Empty | `T("Hello") => "Hello"`<br>`T(100) => null`                             |
| ENCODE_URL_COMPONENT | Replaces certain characters with their percent-encoded equivalents for URL or URI construction. Does not encode: - _ . ~ | `value`                                      | Text         | `ENCODE_URL_COMPONENT("Hello Teable") => "Hello%20Teable"`              |

### Logical Functions

Logical functions mainly involve conditional judgments and logical operations. This section details the use of functions like `IF`, `AND`, `OR`, etc.

| Function Name | Description                                                                                         | Input                              | Output                             | Example                                                                                                     |
|---------------|-----------------------------------------------------------------------------------------------------|------------------------------------|------------------------------------|-------------------------------------------------------------------------------------------------------------|
| IF            | Returns `

value1` if the logical argument is true, otherwise returns `value2`. Can also be used to create nested IF statements and to check if a cell is empty. | `logical, value1, value2`          | String \| Number \| Boolean \| Datetime | `IF(2 > 1, "A", "B") => "A"`<br>`IF(2 > 1, TRUE, FALSE) => TRUE`                                             |
| SWITCH        | Matches an input expression against a series of potential values and returns the corresponding result. A default value can be returned if the input expression matches none of the defined patterns. Can replace many nested IF() formulas in many cases. | `expression, [pattern, result]..., [default]` | String \| Number \| Boolean \| Datetime | `SWITCH("B", "A", "Value A", "B", "Value B", "Default Value") => "Value B"`                                  |
| AND           | Returns true if all arguments are true; otherwise, returns false.                                  | `logical1, [logical2, ...]`        | Boolean                            | `AND(1 < 2, 5 > 3) => true`<br>`AND(1 < 2, 5 < 3) => false`                                                  |
| OR            | Returns true if any argument is true.                                                              | `logical1, [logical2, ...]`        | Boolean                            | `OR(1 < 2, 5 < 3) => true`<br>`OR(1 > 2, 5 < 3) => false`                                                    |
| XOR           | Returns true if an odd number of arguments are true.                                               | `logical1, [logical2, ...]`        | Boolean                            | `XOR(1 < 2, 5 < 3, 8 < 10) => false`<br>`XOR(1 > 2, 5 < 3, 8 < 10) => true`                                  |
| NOT           | Reverses the logical value of its argument.                                                        | `boolean`                          | Boolean                            | `NOT(1 < 2) => false`<br>`NOT(1 > 2) => true`                                                                |
| BLANK         | Returns a null value.                                                                              | `-`                                | null                               | `BLANK() => null`<br>`IF(2 > 3, "Yes", BLANK()) => null`                                                     |
| ERROR         | Returns an error value.                                                                            | `message`                          | Error                              | `IF(2 > 3, "Yes", ERROR("Calculation")) => "#ERROR: Calculation"`                                            |
| IS_ERROR      | Returns true if the expression causes an error.                                                    | `expr`                             | Boolean                            | `IS_ERROR(ERROR()) => true`                                                                                  |

### Date Functions

Date functions help users handle and transform date and time data. This section covers operations such as adding, subtracting, and formatting dates.

| Function Name   | Description                                          | Input                     | Output   | Example                                                                                                    |
|-----------------|------------------------------------------------------|---------------------------|----------|------------------------------------------------------------------------------------------------------------|
| TODAY           | Returns the current date.                            | `-`                       | Datetime | `TODAY() => "2023-09-08 00:00"`                                                                            |
| NOW             | Returns the current date and time.                   | `-`                       | Datetime | `NOW() => "2023-09-08 16:50"`                                                                              |
| YEAR            | Returns the four-digit year of the date.             | `date`                    | Number   | `YEAR("2023-09-08") => 2023`                                                                               |
| MONTH           | Returns the month of the date as a number between 1 (January) and 12 (December). | `date`                    | Number   | `MONTH("2023-09-08") => 9`                                                                                 |
| WEEKNUM         | Returns the week number of the year.                 | `date`                    | Number   | `WEEKNUM("2023-09-08") => 36`                                                                              |
| WEEKDAY         | Returns the day of the week as an integer between 0 and 6. An optional second parameter ("Sunday" or "Monday") can be provided to start the week on that day. | `date, [startDayOfWeek]`  | Number   | `WEEKDAY("2023-09-08", "Monday") => 5`                                                                     |
| DAY             | Returns the day of the month of the date as a number between 1-31. | `date`                    | Number   | `DAY("2023-09-08") => 8`                                                                                   |
| HOUR            | Returns the hour of the date as a number between 0 (12:00am) and 23 (11:

00pm). | `date`                    | Number   | `HOUR("2023-09-08 16:50") => 16`                                                                           |
| MINUTE          | Returns the minute of the date as an integer between 0 and 59. | `date`                    | Number   | `MINUTE("2023-09-08 16:50") => 50`                                                                         |
| SECOND          | Returns the second of the date as an integer between 0 and 59. | `date`                    | Number   | `SECOND("2023-09-08 16:50:30") => 30`                                                                      |
| FROMNOW         | Calculates the number of days from the current date to another date. | `date, unit`               | Number   | `FROMNOW({Date}, "day") => 25`                                                                             |
| TONOW           | Calculates the number of days from another date to the current date. | `date, unit`               | Number   | `TONOW({Date}, "day") => 25`                                                                               |
| DATETIME_DIFF   | Returns the difference in specified units between two dates. The default unit is seconds. (See list of unit specifiers.) | `date1, date2, [unit]`    | Number   | `DATETIME_DIFF("2022-08-01", "2023-09-08", "day") => 403`                                                   |
| WORKDAY         | Returns the workday count to the start date, excluding specified holidays | `date, count, [holidayStr]` | Datetime | `WORKDAY("2023-09-08", 200) => "2024-06-14 00:00:00"`                                                       |
| WORKDAY_DIFF    | Returns the number of workdays between date1 and date2. Workdays exclude weekends and an optional list of holidays, formatted as a comma-separated string of ISO-formatted dates. | `date1, date2, [holidayStr]` | Number   | `WORKDAY_DIFF("2023-06-18", "2023-10-01") => 75`                                                            |
| IS_SAME         | Compares two dates to a unit and determines if they are the same. If so, returns true, otherwise returns false. | `date1, date2, [unit]`    | Boolean  | `IS_SAME("2023-09-08", "2023-09-10") => false`                                                              |
| IS_AFTER        | Determines if date1 is later than date2. If so, returns true, otherwise returns false. | `date1, date2, [unit]`    | Boolean  | `IS_AFTER("2023-09-10", "2023-09-08") => true`<br>`IS_AFTER("2023-09-10", "2023-09-08", "month") => false` |

### Array and Other Functions

In addition to the categorized functions above, this section will introduce some functions that handle arrays or other specific types of data.

| Function Name  | Description                                      | Input                  | Output | Example                                                                            |
|----------------|--------------------------------------------------|------------------------|--------|------------------------------------------------------------------------------------|
| COUNTALL       | Returns the count of all elements, including text and blanks. | `value1, [value2, ...]` | Number | `COUNTALL(100, 200, "", "Teable", TRUE()) => 5`                                    |
| COUNTA         | Returns the count of non-empty values. This function counts both numbers and text values. | `value1, [value2, ...]` | Number | `COUNTA(100, 200, 300, "", "Teable", TRUE) => 4`                                   |
| COUNT          | Returns the count of numeric items.              | `value1, [value2, ...]` | Number | `COUNT(100, 200, 300, "", "Teable", TRUE) => 3`                                    |
| ARRAY_JOIN     | Joins the array of rollup items into a string using a separator. | `array, [separator]`    | String | `ARRAY_JOIN(["Tom", "Jerry", "Mike"], "; ") => "Tom; Jerry; Mike"`                 |
| ARRAY_UNIQUE   | Returns only the unique items in an array.       | `array`                 | Array  | `ARRAY_UNIQUE([1, 2, 3, 2, 1]) => [1, 2, 3]`                                       |
| ARRAY_FLATTEN  | Flattens an array by removing any array nesting. All items become elements of a single array. | `array`                 | Array  | `ARRAY_FLATTEN([1, 2, " ", 3, true], ["ABC"]) => [1, 2, 3, " ", true, "

ABC"]`       |
| ARRAY_COMPACT  | Removes empty strings and null values from an array. Retains "false" and strings containing one or more whitespace characters. | `array`                 | Array  | `ARRAY_COMPACT([1, 2, 3, "", null, "ABC"]) => [1, 2, 3, "ABC"]`                     |
| RECORD_ID      | Returns the ID of the current record.            | `-`                     | String | `RECORD_ID() => "recxxxxxx"`                                                       |
