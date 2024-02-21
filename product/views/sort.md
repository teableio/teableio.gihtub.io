# Sort

### Introduction

In specific views, you can sort records based on the values in certain fields to display them in a particular order. Sorting records in one view does not affect the order of records in other views—the sorting only applies to the view you are currently modified at.

#### Configuring a New Sort

To set up a new sort, follow these steps:

1. Click the "Sort" option from the view toolbar.
2. Then, select a field you wish to sort by from the list of fields.
3. To make it easier to find the field you want to use for sorting, you can also type in the search bar.
4. Depending on the type of field you are sorting by, there will be an additional option to choose the order of the sort. For example, in text-based fields, you can choose to sort alphabetically or in reverse alphabetical order; in date fields, you can opt to sort from earliest to latest or from latest to earliest. We will elaborate on this in the "Field Types and Sorting" section below.
5. After selecting your first sorting field, you can add more fields to sort by. Simply click the "Add another sort" option.

Once configured, you can:

* Remove any sort you have applied by clicking the X button next to the specific field you chose.
* Reorder using the drag handle. We'll discuss reordering more in the next section, but remember, the order of sorting has a hierarchy, which will depend on the sequence of the selected fields.

**Reordering Sort Order:**

1. Click the "Sort" option from the view toolbar.
2. Find the six-dot icon next to the field you wish to move.
3. When you hover over the icon, a hand icon should appear.
4. Click, drag, and then drop the field in the desired position in your sort order.

Different field types can be sorted in various ways. Note that in almost all cases, sorting in ascending order will place null values first.

* Text field types, such as single-line text fields, long text fields, or formula fields returning text, can be sorted alphabetically (A → Z) or in reverse alphabetical order (Z → A). Teable uses natural sorting order for text, so multi-digit numbers in text fields are treated as single characters for sorting purposes. For example, this means "z2" would sort before "z11" because 2 is considered less than 11. Attachment fields can also be sorted alphabetically by file name or in reverse alphabetical order.
* Numeric field types, like numbers and durations, can be sorted in ascending numeric order (1 → 9) or descending numeric order (9 → 1). Rating fields can also be sorted in ascending or descending numeric order.
* Date and time fields can be sorted in ascending order (1 → 9), from earliest to latest date, or in descending order (9 → 1), from latest to earliest date.
* Checkbox fields can be sorted by whether the box is checked or not, so either (▢ → ✓) or vice versa (✓ → ▢).
* Single select and multiple select fields are sorted according to the order of options in the field's customization menu, either (First → Last) or (Last → First). If you sort on a single select or multiple select field, you can change the order of record sorting by entering the field's customization menu (and if you wish, arrange the options alphabetically).

#### Automatic and Manual View Sorting

By default, when you create a new view, the "Automatically sort records" toggle is turned on.

If this toggle is on, records will automatically sort if changes to the records cause them to have a different sort order. You won't be able to manually reorder records using the record drag handle. In the grid view, if the "Automatically sort records" toggle is on, all fields that have a sorting applied (and the sort menu button) will have a light orange background to clearly indicate that the field is being sorted automatically.

If this toggle is off, records will only sort themselves upon reapplying the sort, and you can manually reorder records using the record drag handle to your liking. Turning off the "Automatically sort records" toggle will result in a sort button appearing in the sort menu. After manually reordering records in the view, you can reapply the sort at any time by manually clicking this sort option.

#### Sorting Behavior from View Share Links

If you create a view share link to provide non-collaborator access to a view, the sorting criteria applied to the view will be retained in the shared view. However, viewers will have the option to change any sorting criteria (as well as other view configuration options) - this will only affect how they view records through the view share link and does not adjust any view configuration options in your table.
