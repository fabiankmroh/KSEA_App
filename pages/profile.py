import streamlit as st
conn = st.connection('ksea_db', type='sql')

st.page_link("home.py", label = "Home")

engName = conn.query('SELECT engName FROM users WHERE userID == 1')
krName = conn.query('SELECT krName FROM users WHERE userID == 1')
email = conn.query('SELECT email FROM users WHERE userID == 1')
major = conn.query('SELECT major FROM users WHERE userID == 1')
position = conn.query('SELECT position FROM users WHERE userID == 1')

st.page_link("pages/edit_profile.py", label = "Edit Profile")