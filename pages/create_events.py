import streamlit as st
import sqlite3

conn = sqlite3.connect('../ksea.db')
c = conn.cursor()

eventName = st.text_input("Name", "")
eventDate = st.date_input("Date")
eventLocation = st.text_input("Location")

if st.button("Create Event"):
    c.execute(
            "INSERT INTO events (eventName, eventDate, eventLocation) VALUES (:eventName, :eventDate, :eventLocation);", 
            {"eventName": eventName, "eventDate": eventDate, "eventLocation": eventLocation}
    )