import streamlit as st
conn = st.connection('ksea_db', type='sql')

eventName = conn.query('SELECT eventName FROM events WHERE userID == 1')
eventDate = conn.query('SELECT eventDate FROM events WHERE userID == 1')
eventLocation = conn.query('SELECT eventLocation FROM events WHERE userID == 1')

st.write(eventName)
st.write(eventDate)
st.write(eventLocation)

new_eventName = st.text_input("Event Name")
new_eventDate = st.text_input("Event Date")
new_eventLocation = st.text_input("Location")

if st.button("Update"):
    with conn.session as session:
        session.execute(f"UPDATE events SET eventName = '{new_eventName}', eventDate = '{new_eventDate}', eventLocation = '{new_eventLocation}' WHERE userID == 1;")
        session.commit()
