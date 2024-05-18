import streamlit as st
conn = st.connection('ksea_db', type='sql')

# View the connection contents.
events = conn.query('SELECT * FROM events ORDER BY Date;')
st.dataframe(events)

st.page_link("pages/create_events.py", label = "Create Event")
st.page_link("pages/leaderboard.py", label = "Leaderboard")