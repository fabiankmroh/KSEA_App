import streamlit as st
conn = st.connection('ksea_db', type='sql')

# View the connection contents.
users = conn.query('SELECT * FROM users ORDER BY grade;')
st.dataframe(users)
