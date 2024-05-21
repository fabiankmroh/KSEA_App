import streamlit as st
import sqlite3

conn = sqlite3.connect('../ksea.db')
c = conn.cursor()

# st.page_link("home.py", label = "Home")

engName = c.execute('SELECT engName FROM users WHERE userID == 1')
krName = c.execute('SELECT krName FROM users WHERE userID == 1')
email = c.execute('SELECT email FROM users WHERE userID == 1')
major = c.execute('SELECT major FROM users WHERE userID == 1')
position = c.execute('SELECT position FROM users WHERE userID == 1')

st.write(engName)
st.write(krName)
st.write(email)
st.write(major)
st.write(position)

# st.page_link("pages/edit_profile.py", label = "Edit Profile")