import streamlit as st
import sqlite3

conn = sqlite3.connect('../ksea.db')
c = conn.cursor()

engName = c.execute('SELECT engName FROM users WHERE userID == 1')
krName = c.execute('SELECT krName FROM users WHERE userID == 1')
email = c.execute('SELECT email FROM users WHERE userID == 1')
major = c.execute('SELECT major FROM users WHERE userID == 1')

new_engName = st.text_input("English Name")
new_krName = st.text_input("Korean Name")
new_email = st.text_input("E-Mail")
new_major = st.text_input("Major")

if st.button("Update"):
    update = c.execute(f"UPDATE users SET engName = '{new_engName}', krName = '{new_krName}', email = '{new_email}', major = '{new_major}' WHERE userID == 1;")
    c.commit()
    c.close()
