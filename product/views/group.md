# Group

#### Introduction

In Teable, grouping records allows creators to establish one or more sets of conditions, aiding in categorizing the datasets presented within a specific view. Common examples include grouping by:

* Single Select fields - such as Status, Category, Projects, etc.
* User fields
* Link fields
* Multi-Select fields - for grouping records that overlap in multiple selections to create matching groups
* Dates/Date Ranges

With the addition of collapsible sub-groups, multiple conditions create deeper levels of categorization, thereby adding sub-groups within each group of records. When used in conjunction with other options like record filtering or sorting, this allows for a highly specific organization and insight into the records contained within the dataset.

#### Creating Groups in a View

To group records, open a view and click the "Group" button located between the filter and sort buttons. Select from the suggested fields or click "View All Fields" to choose from all available fields.

**Adding One or More Record Sub-Groups**

Once you've selected the field you wish to group by, groups based on the unique values in that field are automatically created. New groups are also automatically added whenever new unique values are entered into the specified field. You can group records by multiple fields by clicking the "Add Sub-Group" option.

**Additional Grouping Configuration Options**

Now that you've set up one or more groups, here are some additional options to consider:

* Collapse or expand all groups in the view
* Change the field referenced in the group or sub-group by selecting from a dropdown
* Change the sort order of the groups or sub-groups by selecting from a dropdown
* Choose whether to show or hide groups without records
* Delete specific groups or sub-groups
* Drag sub-groups to move their order within the grouping

**Dragging Records to Reassign Values**

You can change the value of records within a group by clicking the drag handle on the left side of a record and dragging it to a different group. For example, dragging a task assigned to one person into another person's group will automatically reassign that task to the new person.

Note that you cannot add new records to groups based on calculated field types (such as Lookup, Rollup, or Formula fields).

**Grouping Records and Summary Bars (Coming Soon)**

Each group's top features a summary bar, allowing for the summation of values in numeric fields by each group. These summary bars provide subtotals for each group, along with a count of records within each group.

Similar to the summary bar for the entire table, each group's summary bar offers various summarization functions.
