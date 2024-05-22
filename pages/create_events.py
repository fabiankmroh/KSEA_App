import streamlit as st
conn = st.connection('ksea_db', type='sql')

events = conn.query('SELECT * from EVENTS')
st.dataframe(events)

eventName = st.text_input("Name", "")
eventDate = st.date_input("Date")
eventLocation = st.text_input("Location")

if st.button("Create Event"):
    with conn.session as session:
        session.execute(
            "INSERT INTO events (eventName, eventDate, eventLocation) VALUES (:eventName, :eventDate, :eventLocation);", 
            {"eventName": eventName, "eventDate": eventDate, "eventLocation": eventLocation}
        )
        session.commit()