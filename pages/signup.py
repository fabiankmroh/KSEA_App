import streamlit as st
import sqlite3

conn = sqlite3.connect('../ksea.db')
c = conn.cursor()

name = st.text_input("Name", "")
username = st.text_input("Username", "")
password = st.text_input("Password", "")
grade = st.number_input("Grade", 1)
major = st.text_input("Major", "EECS")
birthday = st.date_input("Birthday")
# join_date


if st.button("Add User"):
    with c.session as session:
        c.execute(
            "INSERT INTO users (Name, Username, Password, Grade, Major, Birthday) VALUES (:Name, :Username, :Password, :Grade, :Major, :Birthday);",
            {"Name": name, "Username": username, "Password": password, "Grade": grade, "Major": major, "Birthday": birthday}
        )
        session.commit()