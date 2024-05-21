import streamlit as st
import sqlite3
conn = sqlite3.connect('../ksea.db')

# st.page_link("profile.py", label = "Profile")

# View the connection contents.
c = conn.cursor()
events = c.execute('SELECT * FROM events ORDER BY eventDate;')
st.dataframe(events)

st.page_link("create_events.py", label = "Create Event")
st.page_link("leaderboard.py", label = "Leaderboard")