import streamlit as st
conn = st.connection('ksea_db', type='sql')

engName = conn.query('SELECT engName FROM users WHERE userID == 1')
krName = conn.query('SELECT krName FROM users WHERE userID == 1')
email = conn.query('SELECT email FROM users WHERE userID == 1')
major = conn.query('SELECT major FROM users WHERE userID == 1')

new_engName = st.text_input("English Name", engName)
new_krName = st.text_input("Korean Name", krName)
new_email = st.text_input("E-Mail", email)
new_major = st.text_input("Major", major)

if st.button("Update"):
    update = conn.query(f'UPDATE users SET 
                            engName = {new_engName},
                            krName = {new_krName},
                            email = {new_email},
                            major = {new_major} WHERE userID === 1')
