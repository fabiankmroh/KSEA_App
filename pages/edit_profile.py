import streamlit as st
conn = st.connection('ksea_db', type='sql')

engName = conn.query('SELECT engName FROM users WHERE userID == 1')
krName = conn.query('SELECT krName FROM users WHERE userID == 1')
email = conn.query('SELECT email FROM users WHERE userID == 1')
major = conn.query('SELECT major FROM users WHERE userID == 1')

new_engName = st.text_input("English Name")
new_krName = st.text_input("Korean Name")
new_email = st.text_input("E-Mail")
new_major = st.text_input("Major")

if st.button("Update"):
    with conn.session as session:
        try:
            session.execute(f"UPDATE users SET engName = '{new_engName}', krName = '{new_krName}', email = '{new_email}', major = '{new_major}' WHERE engName = '{engName}';")
            session.commit()
            st.success("User information updated successfully!")
            
            # Reload the updated data from the database
            engName = conn.query('SELECT engName FROM users WHERE userID == 1')
            krName = conn.query('SELECT krName FROM users WHERE userID == 1')
            email = conn.query('SELECT email FROM users WHERE userID == 1')
            major = conn.query('SELECT major FROM users WHERE userID == 1')
            
            # Display the updated data in your Streamlit application
            st.write("Updated User Information:")
            st.write(f"English Name: {engName}")
            st.write(f"Korean Name: {krName}")
            st.write(f"Email: {email}")
            st.write(f"Major: {major}")
        except Exception as e:
            st.error(f"An error occurred: {str(e)}")
