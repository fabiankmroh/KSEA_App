import streamlit as st
conn = st.connection('ksea_db', type='sql')

st.page_link("pages/profile.py", label = "Profile")

# View the connection contents.
events = conn.query('SELECT * FROM events')
st.dataframe(events)

st.page_link("pages/create_events.py", label = "Create Event")
st.page_link("pages/leaderboard.py", label = "Leaderboard")