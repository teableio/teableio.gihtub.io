# Formatting

### Introduction

When working with data, you might encounter various types of information such as dates, times, and numbers. To make this data more user-friendly and readable, we offer a range of formatting tools. Below, we will detail these formatting features:

### Number Formatting

When dealing with numeric data, sometimes you want to present it in a specific way. Teable provides the following number of formatting options:

* **Decimals**: You can choose the number of decimal places to display, ranging from 0 to 5.
* **Percentage**: Converts numbers into a percentage form. For example, 0.25 is displayed as 25%.
* **Currency**: You can add a currency symbol, such as "$", and choose the number of decimal places.

### Date and Time Formatting

In Teable, you can choose from various display options for dates and times:

* **Date Format**: Depending on your preference, you can select from the following date formats:
  * US style: e.g., 12/31/2023
  * European style: e.g., 31/12/2023
  * Asian style: e.g., 2023/12/31
  * International standard: e.g., 2023-12-31
  * Year-Month only: e.g., 2023-12
  * Month-Day only: e.g., 12-31
  * Year only: e.g., 2023
  * Month only: e.g., 12
  * Day only: e.g., 31
* **Time Format**: Teable offers several time formats:
  * 24-hour format: e.g., 23:59
  * 12-hour format (including AM/PM): e.g., 11:59 PM
  * Hide time
* **Time Zone Selection**: You can choose the appropriate time zone based on your location to ensure accurate timing.

These formatting options ensure you can select the most suitable way to display dates and times according to your preferences and needs.

### Field Basic Data Type List

| Teable Field Type  | Basic Data Type | Supports Formatting | Dynamic Type Indicator |
| ------------------ | --------------- | ------------------- | ---------------------- |
| Single Line Text   | Text            | No                  | No                     |
| Long Text          | Text            | No                  | No                     |
| User               | Text            | No                  | No                     |
| Attachment         | Text            | No                  | No                     |
| Checkbox           | Boolean         | No                  | No                     |
| Multi-Select       | Text            | No                  | No                     |
| Single Select      | Text            | No                  | No                     |
| Date               | Date            | Yes                 | No                     |
| Number             | Number          | Yes                 | No                     |
| Duration           | Number          | Yes                 | No                     |
| Rating             | Number          | No\*                | No                     |
| Formula\*          | Dynamic         | Yes\*               | Yes                    |
| Rollup\*           | Dynamic         | Yes\*               | Yes                    |
| Count              | Number          | Yes                 | No                     |
| Link               | Text            | No                  | No                     |
| Creation Time      | Date            | Yes                 | No                     |
| Last Modified Time | Date            | Yes                 | No                     |
| Creator            | Text            | No                  | No                     |
| Last Modifier      | Text            | No                  | No                     |
| Auto Number        | Number          | Yes                 | No                     |
| Button             | Text            | No                  | No                     |

> The Rating field is displayed as an interactive score bar, represented by a series of icons that can be highlighted, not subject to number formatting but considered a numeric type for calculations.

> The formatting for Formula and Rollup fields depends on their output type, meaning if the result is a date or number, they can be formatted. If the result is text or a boolean value, formatting does not apply.

> All fields can be referenced, and once referenced, they still adhere to the basic value type of the field.

### Conclusion

Whether you are dealing with dates, times, or numbers, formatting features can make your data more user-friendly and clear. With simple settings, you can easily present your data as expected.
