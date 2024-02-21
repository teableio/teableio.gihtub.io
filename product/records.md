# Records

A record in Teable represents an entry or item within a table. These records can encompass a variety of data types including text, numbers, dates, attachments, and connections to other records across different or the same table. Each record is uniquely identifiable through a record ID, which facilitates referencing and orderly organization.

### Understanding Records in Teable

Teable organizes data within bases using a grid layout, consisting of records (previously rows), fields (columns), and cells. This structure allows for the efficient display and management of data. Records, aligned horizontally, serve as the primary method for organizing data related to a specific entity or item. In contrast, fields (columns) arrange data vertically, enabling the categorization of information based on its type.

Consider the example below, where each record in the "All Interviews" table is part of the "Applicant Tracker" table.

### Introduction to Cells

A cell represents the intersection point between a record and a field. It is the fundamental unit for data storage within Teable.&#x20;

As you delve deeper into Teable, we provide comprehensive guidance to ensure a smooth learning curve. You're not alone in exploring Teable's capabilities; our curated tips and resources are designed to help you become proficient with the platform swiftly.

### Record Identifier

The Record ID is a distinctive number assigned to each record, serving as a unique identifier. It's crucial to understand that this ID does not serve as a count of the records but rather as a stable identifier. Deleting a record does not alter the IDs of remaining records, which means the sequence of assigned numbers may include gaps.

To retrieve the unique ID of a record, use the `record_id()` formula.

### &#x20;
