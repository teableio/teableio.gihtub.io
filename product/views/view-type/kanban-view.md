# Kanban View

### Introduction

The Kanban View provides a dynamic way to visualize and manage your data by representing it as cards organized into various stacks on the board. This intuitive layout allows for effortless rearranging of information, as you can simply drag and drop the cards across different stacks to reflect changes in priority or status. Ideal for project management and workflow tracking, this view offers a clear and adaptable overview of tasks, making it easier to identify bottlenecks and allocate resources effectively.

### **Creating a Kanban View**

1. Click the `Create new view` button.
2. Select `Kanban View` from the dropdown
3. Now you can configure the Kanban View's stack config, card config, filtering, and sorting.

### Stack Operations

#### **Changing Kanban stacking field**

{% hint style="info" %}
Currently, it supports Single-select fields or User fields. Selecting User fields is only possible if "Allow adding multiple users" is toggled off for your preferred field(s).
{% endhint %}

1. Click the `Stacked by` menu in the toolbar.
2. From the dialog, choose a stacking field or create a new one by which you want to stack the records.
3. If you wish to hide empty stacks, you can enable the `Hide empty stack` option.
4. Click `Done` to save the changes.

#### **Collapse Stack**

1. Click on the dropdown icon on the stack header.
2. Select `Collapse stack` from the dropdown.
3. Collapsed stack will be displayed as vertical bars on the Kanban View as displayed below.

#### Add a new Stack

{% hint style="info" %}
When the stacking field is a User field, it is impossible to add a new stack.
{% endhint %}

1. Click the `Add Stack` button.
2. Fill in the new stack-related information, click outside the focus area or press the `Enter` key to complete the addition operation.

#### Rename Stack

{% hint style="info" %}
When the stacking field is a User field, it is impossible to rename the stack.
{% endhint %}

1. Click on the dropdown icon on the stack header.
2. Select `Rename stack` from the dropdown.

#### **Delete Stack**

{% hint style="info" %}
When the stacking field is a User field, it is impossible to delete the stack.
{% endhint %}

1. Click on the dropdown icon on the stack header.
2. Select `Delete Stack` from the dropdown to delete the stack.

#### Reorder Stack

{% hint style="info" %}
When the stacking field is a User field, it is impossible to reorder the stack.
{% endhint %}

You can reorder the stacks on the Kanban view by dragging and dropping the stack to the desired position.

### Card Operations

#### **Customizing Kanban Cards**

1. Click the `Customize cards` menu in the toolbar.
2. Toggle on (or off) the various fields in the base to show or hide those fields on each card.
3. You can also search for a field in the “Find a field” box in bases that contain many fields.
4. Lastly, you can click `Hide all` or `Show all` to show or hide every field on each card.
5. Additionally, you can set the displayed cover and the `Hide Field Name` option at the bottom of the pop-up dialog.

#### Move Cards within Stacks

You can move cards within a stack by dragging and dropping the card to the desired position within the stack.

#### Add a New Card

1. Click on `Add Card` button on the stack footer.
2. This opens up an expanded record where you can enter the data for the new card.

#### Insert a New Card

1. Right-click on the card to access the context menu.
2. Select the `Insert card above` or `Insert card below` options to insert a new card above or below the current card.

#### Edit an Existing Card

1. Click directly on the card or right-click on the card to bring up the menu, and then select the `Expand card` option to expand the card.
2. You can edit the record in the expanded record and save it.

#### **Delete a Single Card**

1. Right-click on the card to access the context menu.
2. Select the `Delete card` option to delete the card.
