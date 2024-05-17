import streamlit as st
from streamlit_gsheets import GSheetsConnection
import re

# Create a connection object
conn = st.connection("gsheets", type=GSheetsConnection)

# Email validation regex pattern
EMAIL_REGEX = re.compile(r"[^@]+@[^@]+\.[^@]+")

# Streamlit app
def main():
    st.title("Signup Page")
    
    # Input fields
    name = st.text_input("Name", key="name_input")
    email = st.text_input("Email", key="email_input")
    password = st.text_input("Password", type="password", key="password_input")
    major = st.text_input("Major", key="major_input")
    points = st.number_input("Points", min_value=0, step=1, key="points_input")
    grade = st.selectbox("Grade", ["Freshman", "Sophomore", "Junior", "Senior"], key="grade_input")
    focus_group = st.text_input("Focus Group", key="focus_group_input")
    social_group = st.text_input("Social Group", key="social_group_input")
    
    # Input validation
    if st.button("Submit"):
        if not name or not email or not password:
            st.error("Please fill in all required fields.")
        elif not EMAIL_REGEX.match(email):
            st.error("Please enter a valid email address.")
        else:
            try:
                # Create a list with the user information
                user_info = [name, email, password, major, points, grade, focus_group, social_group]
                
                # Append the user information to the Google Sheet
                conn.append_row(user_info, worksheet="Users")
                
                st.success("Signup successful!")
                
                # Clear input fields after successful submission
                st.session_state["name_input"] = ""
                st.session_state["email_input"] = ""
                st.session_state["password_input"] = ""
                st.session_state["major_input"] = ""
                st.session_state["points_input"] = 0
                st.session_state["grade_input"] = "Freshman"
                st.session_state["focus_group_input"] = ""
                st.session_state["social_group_input"] = ""
                
            except Exception as e:
                st.error(f"An error occurred during signup: {str(e)}")

if __name__ == "__main__":
    main()