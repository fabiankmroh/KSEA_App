## Start:
[Original Repo](https://github.com/namwook0921/KSEA_App) <br>
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

## 2024/05/19: Restoration + Basic Foundation
### Key Lessons:
- Organize Supervisors' Instructions on a Note --> **Ensure your goal is aligned with the supervisor**
- Knowledge over Implementation: The code can be properly implemented and edited once I have a solid knowledge of how it works. Although it may take some time, it is important to read the tutorial thoroughly. Some tutorials may only give the source code and has little explanation as it already assumes that the reader (i.e. I) will have a full intuition in the system. 

### To-Do List:
- Restore `.db` file
   - Export Schema into `.sql` file
- Create Single User Application
   - Implement all functions that users will experience except for the authentication portion
   - Sketch page interaction table on a paper
- Separate Git Branch:
   - `Main`: Functioning Basic Applications
   - `Login`: Experimenting Login Logic
   (Even if system fails while experimenting with the login logic, the main system will still be able to function and be restored if needed)
- Learn More about `https` Connection & Authentication w/ Claude

## 2024/05/20: Creating Multiple Pages + `PATH` Error + `sqlite3` Access Method
### `st.page_link`: `PATH` Error
Spent most of the time configuring feature pages. With multiple pages created, I wanted to insert hyperlinks into each page. With [this documentation](https://docs.streamlit.io/develop/api-reference/widgets/st.page_link), I was able ot configure this feature using `st.page_link`. 

However, for the `st.page_link` to link and load the correct `.py` file, [Claude](https://claude.ai/) advised me to place all the pages `.py` files under the folder `pages`. I will explain the reason below. 

Normal HTML `<a href>` tag works *relatively*. For instance, if a page is located at `pages/a.html`, and I want to connect it to `b.html` (under root folder), then `a.html` should be written `<a href = "../b.html">`. 

Streamlit's `st.page_link` works *constantly*. There are *two types* of script (page `.py` files) in Streamlit: main script & page scripts. The main script is located at the **root folder of the project**. Think of this as the first page that would be shown when you load up the Streamlit server. The page scripts are located under `./pages/` folder. Streamlit system first dives from the project's **root directory** then scans into the `pages/` folder and find the matching `.py` file. Little did I know how the difference between these two types would be a key to solving this problem. 

As mentioned above, the purpose of this project is to grow back-end knowledge: utilize SQL and *read/write* data from the customer end. There was a bigger problem to solve than this page link: `sqlite` server could not be connected.

## `sqlite3` Access Denied
Before many pages were relocated to `pages/` folder, it was not difficult to access and edit the `.db` file as `.db` file and `.py` files were all on the same path. However, there were access errors to the `.db` file. For example, when I wanted to load the event information via `conn.query('SELECT * FROM events')`, the system would either prompt that it could not find the database or the table itself. 

Being tired from Streamlit's *constant* file finding scheme, I pivoted from the standard [`st.connections.SQLConnection`](https://docs.streamlit.io/develop/api-reference/connections/st.connections.sqlconnection) and its sub-features, such as `conn.query` and `conn.execute`, to `sqlite3` connection. 

Inspired by this [YouTube Video](https://youtu.be/_Vu3Esh4OiY?si=uX-I9fipIvAjDhUD), I used `sqlite3` library. With this, I was able to successfully connect, write and edit the database. **However, Streamlit could not comprehend the database format imported via `sqlite3` library**. For example, Streamlit would print weird SQL layout instead of the data itself. 

# 2024/05/21: Fixing Errors + Revert to Original `st.connection`
Apparently, the `st.page_link` error seems to be an innate (Streamlit) bug that has been around for a while according to [this thread](https://github.com/streamlit/streamlit/issues/8070). Some Windows users commented that explicitly assigning the entire pathname seemed to resolve the issue, but it didn't seem to be quite effective for Mac -_-

Without gaining a lot from the internet, I sat down after having a good dinner and re-read the error: `**StreamlitAPIException:** Could not find page: 'pages/name.py'. Must be the file path relative to the *main script*`. With attempts in decomposing the error, I found the solution in the most absurd way. By going back to the [basic tutorial](https://docs.streamlit.io/get-started/fundamentals/main-concepts), I learned what the *main script* was and how the Streamlit server functioned, hence I was able to write the difference between the main script and the page scripts. 

Shortly speaking, **every Streamlit service should be always run from the main script**. I.e. we should *not* run Streamlit scripts under the `pages` folder. Running the Streamlit service from the main script (instead of pages scripts) had solved every `page_link` issue and `.db` connection issue. 

To be specific, when the command `streamlit run script.py` is executed on the terminal, the Streamlit server is hosted on the `script.py`, and every command seems to revolve with the page in center. 

In my repo, the **main script is `login.py`** since that was the first page I wanted the users to see when they load up the site. Then, every Streamlit function would revolve around the root repository. For example, the `st.page_link('pages/home.py)` makes sense since the streamlit system begins in the root directory. With its beginning in the root directory, the Streamlit system is then able to find and navigate into the `pages` folder. This would not cause any errors for the Streamlit library. 

However, when running the Streamlit server with pages script (i.e. under `pages/` folder), the Streamlit system begins and *is limited* at the `pages/` folder. As a result, the code `st.page_link(pages/{other_file}.py)` would cause an error since there is no `pages/` folder under `pages/`. Also, Streamlit won't be able to find the `.db` file as the `.db` file is located in the root folder, not the `pages/` folder. This also relieved my curiosity in how the Streamlit's innate file was able to detect `.db` file in `~/.streamlit/secrets.toml` without specifying the `.db` file's specific path. 

In the end, running the Streamlit server from the main script had solved two key problems: `st.page_link` being unable to find pages & `.db` file access failure. Although the solution may be more than simple, I think it was a good opportunity to gain a full intuition on how the Streamlit service functions overall.