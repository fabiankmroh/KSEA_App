import streamlit as st
conn = st.connection('users_db', type='sql')

name = st.text_input("Name", "")
major = st.text_input("Major", "EECS")
gender = st.number_input("Gender")

if st.button("Add User"):
    with conn.session as session:
        session.execute(
            "INSERT INTO users (name, major, gender) VALUES (:name, :major, :gender);", 
            {"name": name, "major": major, "gender": gender}
        )
        session.commit()