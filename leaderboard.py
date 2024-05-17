import streamlit as st
conn = st.connection('users_db', type='sql')

# View the connection contents.
users = conn.query('SELECT * FROM users;')
st.dataframe(users)