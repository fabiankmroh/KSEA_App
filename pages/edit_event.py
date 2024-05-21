import streamlit as st
import sqlite3

conn = sqlite3.connect('../ksea.db')
c = conn.cursor()

eventName = c.execute('SELECT eventName FROM users WHERE userID == 1')
eventDate = c.execute('SELECT eventDate FROM users WHERE userID == 1')
eventLocation = c.execute('SELECT eventLocation FROM users WHERE userID == 1')

new_eventName = st.text_input("English Name")
new_eventDate = st.text_input("Korean Name")
new_eventLocation = st.text_input("E-Mail")

if st.button("Update"):
    update = c.execute(f"UPDATE users SET eventName = '{new_eventName}', eventDate = '{new_eventDate}', eventLocation = '{new_eventLocation}' WHERE userID == 1;")
    c.commit()
    c.close()
