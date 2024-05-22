import streamlit as st
conn = st.connection('ksea_db', type='sql')

# st.page_link("home.py", label = "Home")

eventName = conn.query('SELECT eventName FROM events WHERE userID == 1')
eventDate = conn.query('SELECT eventDate FROM events WHERE userID == 1')
eventLocation = conn.query('SELECT eventLocation FROM events WHERE userID == 1')

st.write(eventName)
st.write(eventDate)
st.write(eventLocation)

# st.page_link("pages/edit_profile.py", label = "Edit Profile")