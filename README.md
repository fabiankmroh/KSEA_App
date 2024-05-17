## Start:
[Original Repo](https://github.com/namwook0921/KSEA_App)
I was one of three contributors/developers in the project attached above. Due to the given short constraint, the team could mostly prepare for the front end development. Despite being completely new to React Native, I truly had fun developing this project due to two reasons:

1. Higher Result per Effort: Can observe my work enhancing the product in real time as observed on mobile/emulator display --> Effort seems to be better paid off than working on other fields (e.x. Algorithm, AI)
2. Impact on Community: First project with the customer/user based on community scope. The fact that I can make an impact on the community seems to boost my confidence quite a lot. This created an internal motivation in myself to allocate as much of my time as possible to enhance the product UI or resolve errors.


From now (May 2024: End of Freshman Year) to my military enlistment, I have nothing but all the time in the world. I plan to work on this app, especially working on the back-end side to hopefully make it fully functional for the market. Currently, I aim to build the features dedicated to KSEA at Berkeley. However, if the project progress is fortunately expedited than expectation, then I hope to expand the scope beyond KSEA to all Korean clubs in Berkeley (and all clubs, if possible :)

## 2024/05/12: Review Existing Back-end Features
Plan: Some JavaScript files in `src/screens/` incorporate calling content from the back end. Although I mostly designed the screens, I did not contribute significantly in terms of back-end; therefore, I plan to study how the existing app's back-end system worked.

I have several schedules throughout the day, so I don't aim to do a lot. Hopefully I can learn more about Node.js, a platform I plan to use for the app's back-end in the future

## 2024/05/13: Conversion to SDK 51 - FAILED
Currently, the app can't be run on the Expo Emulator since the emulator has been upgraded to SDK 51, while this project, which hasn't been renewed since April, stayed on SDK 50.

I have followed this guide and attempted to convert the project from SDK 50 to SDK 51 but to no avail.

## 2024/05/14: Conversion to SDK 51 - Reinstallation
Like an Elsa, I think I just need to let it go. I plan to uninstall expo (and React Native if necessary). If both methods do not work, then I plan to wipe out the project except for work files (e.x. /src/screens/xxx.js and ./src/navigation/Navigation.js) and media files (e.x. /src/media).

I have stumbled on [Next.js](https://nextjs.org/), which not only supported React for web development but also had several plugins for data organization, so I decided to wipe out the existing React Native codes entirely. Fortunately, React and React Native did not seem to differ too much in terms of how the code layout worked. After asking a few questions to [Claude.ai](https://claude.ai) on file organization, I was able to host a website on my local server within a few hours or so. 

## 2024/05/15: Streamlit
Since JavaScript required too much time to study its structure, I decided to transition to Streamlit: Python + Data-based Web Development. With previous experience in Django, I did not have to spend so much time adapting to designing the web layout, and I predict it wouldn't take me too long to build most of front-end features. However, establishing the SQL database was a bit difficult than expected. 

Based on [this tutorial - **Connect Streamlit to a private Google Sheet**](https://docs.streamlit.io/develop/tutorials/databases/private-gsheet), I was able to have the website *read* and organize data from Google Sheets. However, what the tutorial did not cover was how to *write* on the data. This was quite cruicial as adding data was fundamental to the platform. If the users can not add their own data information, then what would be the point of having the other features all implemented?

## 2024/05/16: SQL Alternatives - PostgreSQL & MySQL
Google Sheets Write FAILED, so I pivoted to PostgreSQL as it ranked #1 on a SQL ranking (can't find the original link). However, PostgreSQL kept failing on my end. Also, with a lack of online resources, I decided the platform was not beginner friendly; therefore, I decided to move on to another platform. 

I have tried to use MySQL as it was also supported with Streamlit according to [this tutorial](https://docs.streamlit.io/develop/tutorials/databases/mysql). Thanks to this [YouTube Video by Programming with Mosh](https://youtu.be/7S_tz1z_5bA?si=PkhVvMqwc59fWEhv), I was able to have a full guide on how to setup SQL. However, when I tried to open the MySQL editor after creating a database, it kept on crashing. I attempted to reopen the application but to no avail. After multiple searches, I stumbled upon this thread stating that newer versions are a bit unstable and, hence, you should retry with older versions of mySQL. However, this did not seem to resolve my problem. 

Also, my lack of knowledge in SQL seemed to hinder in fully comprehending SQL threads. Currently, **my purpose in this project is to grow back-end knowledge: utilize SQL and *read/write* data from the customer end.** However, these version fiasco and endless attempts of installing / uninstalling seemed to make me digress from the original goal. 

Ultimately, I decided to use the most basic version of SQL available: SQLite. 

## 2024/05/17: SQLite
As mentioned in the **2024/05/16** log, I believed it would be the best for me to first get basic intuition on SQL then start setting up my environment. 

So I asked Claude.ai with this basic prompt: `Teach me the structure of SQLite`<br>
**Response:**
1. Database File:
   - An SQLite database is stored as a single file on the disk.
   - The file extension is typically `.db` or `.sqlite`.
   - The database file contains all the data, tables, indexes, and other database objects.

2. Tables:
   - Tables are the primary storage units in SQLite.
   - Each table consists of rows (records) and columns (fields).
   - Tables are created using the `CREATE TABLE` statement, specifying the table name and column definitions.
   - Columns have a specific data type (e.g., INTEGER, TEXT, REAL, BLOB) and can have constraints (e.g., PRIMARY KEY, UNIQUE, NOT NULL).

3. Data Types:
   - SQLite supports a limited set of data types compared to other databases.
   - The main data types are:
     - INTEGER: Signed integer values.
     - REAL: Floating-point values.
     - TEXT: String values.
     - BLOB: Binary data.
   - SQLite uses dynamic typing, meaning the data type is associated with the value itself rather than the column.

4. Primary Key:
   - Each table can have a primary key, which uniquely identifies each row in the table.
   - The primary key can be a single column or a combination of columns (composite key).
   - SQLite automatically creates an index on the primary key for fast data retrieval.

5. Indexes:
   - Indexes are used to improve query performance by allowing faster data retrieval.
   - Indexes can be created on one or more columns of a table.
   - SQLite supports various index types, including primary key indexes, unique indexes, and ordinary indexes.

6. Views:
   - Views are virtual tables based on the result of a SELECT statement.
   - They provide a way to encapsulate complex queries and present them as a single entity.
   - Views can be queried like regular tables, but they don't store data themselves.

7. Triggers:
   - Triggers are database objects that are automatically executed in response to specific events (e.g., INSERT, UPDATE, DELETE).
   - They can be used to enforce data integrity, perform calculations, or log changes.

8. Transactions:
   - SQLite supports transactions, which ensure the integrity and consistency of database operations.
   - Transactions are atomic, meaning either all the changes within a transaction are applied, or none of them are.
   - Transactions are implemented using the `BEGIN`, `COMMIT`, and `ROLLBACK` statements.

9. SQL Statements:
   - SQLite uses SQL (Structured Query Language) for interacting with the database.
   - Common SQL statements include:
     - `CREATE TABLE`: Creates a new table.
     - `INSERT`: Inserts new records into a table.
     - `SELECT`: Retrieves data from one or more tables.
     - `UPDATE`: Modifies existing records in a table.
     - `DELETE`: Removes records from a table.

SQLite's simplicity, small footprint, and ease of use make it a popular choice for embedded systems, mobile apps, and local data storage. It follows the basic principles of relational databases and provides a subset of SQL features.

To dive deeper into SQLite, you can explore its official documentation and experiment with creating tables, inserting data, and running queries using SQLite command-line tools or libraries in your preferred programming language.