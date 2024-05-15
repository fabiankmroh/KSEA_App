import streamlit as st
from streamlit_gsheets import GSheetsConnection

# Create a connection object.
st.write(st.secrets['connections'])
conn = st.connection("gsheets", type=GSheetsConnection)
df = conn.read(
    worksheet="Users",
    ttl="5m",
    usecols = [0, 5],
    nrows=2,
)

df = df.sort_values(by=df.columns[1], ascending=False)
df = df.reset_index(drop=True)

st.dataframe(df, use_container_width=True)