import streamlit as st
conn = st.connection('ksea_db', type='sql')

name = st.text_input("Name", "")
username = st.text_input("Username", "")
password = st.text_input("Password", "")
grade = st.number_input("Grade", 1)
major = st.text_input("Major", "EECS")
birthday = st.date_input("Birthday")
# join_date


if st.button("Add User"):
    with conn.session as session:
        session.execute(
            "INSERT INTO users (Name, Username, Password, Grade, Major, Birthday) VALUES (:Name, :Username, :Password, :Grade, :Major, :Birthday);",
            {"Name": name, "Username": username, "Password": password, "Grade": grade, "Major": major, "Birthday": birthday}
        )
        session.commit()