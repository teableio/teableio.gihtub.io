---
description: Connect directly to the teable database
---

# Database connection

This guide will walk you through setting up and managing database connections in Teable, including creating read-only connections, obtaining the BaseId, closing connections, as well as understanding the contents of database tables and how to modify Postgres table column names.

### Creating Database Connections

1. **Enter the table**: First, open the table you want to connect.
2. **Select the API button**: Find and click the API button on the right side.
3. **Choose PostgreSQL Connection**: In the options that appear, select PostgreSQL Connection.
4. **Enter the settings interface**: Click create, and the system will automatically create a read-only Postgres user, including username, password, and database link address.

<figure><img src="../../.gitbook/assets/image.png" alt="" width="327"><figcaption><p>Postgres connection</p></figcaption></figure>

#### **Connection Methods**

* **Common database GUI**: Such as DataGrip, Navicat, TablePlus, etc.
* **BI tools**: Such as PowerBI, Metabase, Superset, etc.
* **Low-code platforms**: Such as Appsmith, Budibase, etc.
* **Application code**: By selecting the corresponding language's Postgres Driver.

#### Obtaining BaseId

1. Click any table to enter its interface. The string starting with `bse` in the URL is the BaseId.

<figure><img src="../../.gitbook/assets/image (1).png" alt="" width="563"><figcaption><p>BaseId</p></figcaption></figure>

2. Enter the database design interface (the ⚙️ icon in the top right corner of the table), where the `schema name` is the BaseId.

#### Connecting to the Database

The way to connect to the database slightly varies across different products, but the principle is generally the same. Here we provide a simple example:

<figure><img src="../../.gitbook/assets/image (6).png" alt=""><figcaption><p>Connection example</p></figcaption></figure>

#### Closing Database Connections

1. **Enter the Database Connection interface**: Click delete in the Database Connection interface to close the connection.
2. **Password clearing**: After deletion, the old password will be cleared. A new connection will involve a new set.

### Contents of Database Tables

Click the gear icon ⚙️ on the top right corner of the table to access the **Database Design Interface**. This section provides details on the table's name and structure within the database, which is invaluable for conducting external data queries.

#### Database Table Names

Renaming a table in Teable will not automatically update the table name in the physical database. You must explicitly change the table name in the database itself.

<figure><img src="../../.gitbook/assets/image (8).png" alt="" width="375"><figcaption><p>table info</p></figcaption></figure>

After you have completed renaming the table, you can directly query the first 100 rows of data in the table using the following SQL example:

```sql
SELECT * from "bseamGnQT65TVSCzIaC"."clients" limit 100
```

When querying, it's necessary to include the schema name, also known as BaseId, and utilize the physical database table names. **Please be aware that in Postgres, it is crucial to surround both schema and table names with double quotes " to correctly distinguish case sensitivity.**

#### **User-Created Fields**

All fields you create in the table.

Note that the field (column) names in the database table might not exactly match the naming used in the Teable interface. Please check the field names in the database in the database design interface before making queries and making necessary modifications.

**Modifying field names in Teable does not automatically change dbFieldName. You must explicitly modify dbFieldName to change the actual column name in Postgres.**

<figure><img src="../../.gitbook/assets/image (9).png" alt=""><figcaption><p>field management</p></figcaption></figure>

#### **Teable System Fields**

System fields cannot be renamed.

1. `__id` Unique ID
2. `__version` Version number
3. `__auto_number` Auto-increment number, primary key
4. `__created_time` Creation time
5. `__last_modified_time` Last modification time
6. `__created_by` Creator ID
7. `__last_modified_by` Last modifier ID
8. View index fields: Fields starting with `__row`, used to maintain the order of records in the current view.
9. Foreign keys: If there are linked fields, logical foreign keys are created, named starting with `__fk`.

#### Junction table

Tables starting with `junction_`, used to handle ManyToMany and OneWay link relationships.

### Connection Limits

Database connections act as bridges between applications and the database for exchanging information. Our system allows a maximum of 3 such bridges (connections) at the same time. This means that only 3 applications can communicate directly with the database at any given time (an application may occupy multiple connections, depending on your settings). Exceeding this number means other users will have to wait until a connection becomes available. This limit helps us maintain system stability and efficiency, ensuring a good experience for all users. You can view the current number of connections in the connection settings interface.

### Permission Explanation

The created connection user's permission access range is limited to the current Base, which corresponds to a schema in Postgres. A schema in Postgres is a namespace concept that provides excellent permission isolation, ensuring the connection can only access tables within that schema. However, roles created in Postgres will have the ability to view all schema names, which is why when you use external

applications to connect to the database, you might see many BaseIds (actually schema names) as shown in the image below. Rest assured, except for this ID, no other user content can be accessed.

<figure><img src="../../.gitbook/assets/image (3).png" alt="" width="253"><figcaption><p>BasdId in TablePlus</p></figcaption></figure>

### Direct Database Writing

Teable does not allow direct database operations through external connections. Direct modification of database content is dangerous, as it could break the application logic, leading to crashes or data loss. Teable does not provide writable database connections. If you need to modify data, please do so through the Teable API, which offers finer permission control and good operation encapsulation.

####
