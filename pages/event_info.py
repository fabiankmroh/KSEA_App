import streamlit as st
import sqlite3

conn = sqlite3.connect('../ksea.db')
c = conn.cursor()

# st.page_link("home.py", label = "Home")

eventName = c.execute('SELECT eventName FROM events WHERE userID == 1')
eventDate = c.execute('SELECT eventDate FROM events WHERE userID == 1')
eventLocation = c.execute('SELECT eventLocation FROM events WHERE userID == 1')

st.write(eventName)
st.write(eventDate)
st.write(eventLocation)

# st.page_link("pages/edit_profile.py", label = "Edit Profile")