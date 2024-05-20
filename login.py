import streamlit as st
st.connection('ksea_db', type='sql')

username_input = st.text_input()
password = conn.query(f'SELECT password FROM users ORDER BY username == {username_input};')
password_input = st.text_input()

if st.button('Login'):
    if password_input == password: 
        st.page_link('home/home.py')
    else:
        st.write('**Try again**')