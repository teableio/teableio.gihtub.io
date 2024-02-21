# Link

## Links

### Feature Overview

We offer a highly flexible Link field feature that enables users to easily establish relationships between different tables. Quickly insert records from other tables into the current one, view the entire row of that record with a click, or jump directly to the linked data table without needing to switch screens. This enhances the connectivity of data and makes the management and integration of data more efficient.

### Creating a Link Field

Open the table where you want to add a Link field. Select "Add Field," then choose "Link Field." From the dropdown menu, select the table you wish to link.

Choose the type of link: Open the table where you wish to add a Link field, click "Add Field," and then choose "Link Field." From the dropdown menu, select another table you wish to link.

Unidirectional and Bidirectional Links: If you want the data to be updated only in the current table, choose a unidirectional link. If you want both tables to reflect changes in the link, choose a bidirectional link. A bidirectional link creates a symmetric Link field in the linked table, ensuring the data in both Link fields is always synchronized.

Defining the Link Relationship: Configure the current table's field and the corresponding linked field, deciding between **allowing a single select** or **allowing multiple select**. Through the combination of settings in both Link fields, we can define the management relationship between the data, explained in detail below.

### Unidirectional and Bidirectional Links

Users can choose to create bidirectional links based on their needs.

#### Unidirectional Link

Definition: A link created in one table that doesn't automatically create a link in another table. Example: Imagine following a celebrity on social media; it means you can see their updates, but they might not know who you are.

#### Bidirectional Link

Definition: A link created in one table automatically creates a corresponding link in another table. Example: Like friend requests on Facebook, when you add someone as a friend, they also add you back.

### Link Relationships

When building relationships in databases, we usually encounter the following types of link relationships. These relationships help us organize data better and understand the interactions between different tables.

### Link Relationships and How to Establish Them

| Relationship | Description                                                               | Example                                        | How to Create in Table A                                                      |
| ------------ | ------------------------------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------- |
| One-to-One   | A record in Table A is linked to only one record in Table B.              | An author and their unique autobiography.      | Single select in Table A field + Single select in Table B symmetric field     |
| One-to-Many  | A record in Table A can be linked to multiple records in Table B.         | An author and their multiple books.            | Multiple select in Table A field + Single select in Table B symmetric field   |
| Many-to-One  | Multiple records in Table A can be linked to one record in Table B.       | Multiple authors and a common publisher.       | Single select in Table A field + Multiple select in Table B symmetric field   |
| Many-to-Many | Multiple records in Table A can be linked to multiple records in Table B. | Multiple authors and multiple literary awards. | Multiple select in Table A field + Multiple select in Table B symmetric field |

#### Relationship Examples Explained

To better understand the types of relationships listed above, let's use authors and their works as an example:

1. **One-to-One Relationship**: Suppose J.K. Rowling wrote only one autobiography, then there's a one-to-one relationship between her and this autobiography.
2. **One-to-Many Relationship**: J.K. Rowling wrote several books in the "Harry Potter" series, showing a one-to-many relationship between one author and multiple books.
3. **Many-to-One Relationship**: If we consider multiple authors, like J.K. Rowling, George Orwell, and Jane Austen, all working with the "Classic Books" publisher, this creates a many-to-one relationship between these authors and the publisher.
4. **Many-to-Many Relationship**: Suppose the "International Literary Award" and "Author of the Year Award" are two prizes, and both J.K. Rowling and George Orwell have won these awards. This scenario presents a many-to-many relationship between the two authors and the two awards.

#### Important Note

In a one-to-many relationship in Table A, the same record in Table B can only be selected once in Table A. In other words, once a record from Table B is chosen as a linked record in Table A, it will no longer appear in the selection list for other records in Table A. This is due to the nature of the link relationship.

**Example**: Suppose we have an "Authors" table (Table A) and a "Books" table (Table B). In the "Authors" table, there's a one-to-many relationship field for selecting the books written by an author. Now, when we select "Harry Potter and the Philosopher's Stone" for an author, this book won't appear in the selection list for other authors because it

's already linked to one author. This ensures that each book can only be linked to one author, following the one-to-many relationship rule.

### Further Expansion

After setting up Link fields, we can proceed to more advanced referencing and summarization operations. They work together to provide powerful capabilities for automatic data retrieval and summarization calculations. For more details, see the sections on Reference and Summarization fields.

### Conclusion

Link fields are not just bridges between data but also between stories and contexts. By using them correctly, you can organize and understand your data more effectively, making your work and decision-making clearer and more systematic.
