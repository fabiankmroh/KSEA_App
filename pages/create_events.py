import streamlit as st
conn = st.connection('ksea_db', type='sql')

name = st.text_input("Name", "")
date = st.date_input("Date")
location = st.text_input("Location")
body = st.text_input("Notes")

if st.button("Create Event"):
    with conn.session as session:
        session.execute(
            "INSERT INTO events (Name, Date, Location, Body) VALUES (:Name, :Date, :Location, :Body);", 
            {"Name": name, "Date": date, "Location": location, "Body": body}
        )
        session.commit()