import streamlit as st
conn = st.connection('ksea_db', type='sql')

username_input = st.text_input("Username")
password = conn.query(f"SELECT password FROM users ORDER BY username == '{username_input}';")
password_input = st.text_input("Password")

if st.button('Login'):
    st.page_link('pages/home.py')
