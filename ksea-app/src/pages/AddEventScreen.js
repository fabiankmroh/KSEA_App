import React, { useState } from "react";

const AddEventScreen = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [points, setPoints] = useState("");
  const [note, setNote] = useState("");

  const handleAddEvent = () => {
    if (
      name.trim() === "" ||
      type.trim() === "" ||
      date.trim() === "" ||
      location.trim() === "" ||
      points.trim() === "" ||
      note.trim() === ""
    ) {
      alert("All fields are required");
      return;
    }

    // Redirect to the Home page using React Router or your preferred routing library
  };

  const goHome = () => {
    // Redirect to the Home page using React Router or your preferred routing library
  };

  return (
    <div>
      <div>
        <button onClick={goHome}>Back</button>
      </div>
      <img src="../media/ksea-logo.jpg" alt="KSEA Logo" />
      <h1>Add Event</h1>
      <label htmlFor="name">Event Name</label>
      <input
        type="text"
        id="name"
        placeholder="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="type">Event Type</label>
      <input
        type="text"
        id="type"
        placeholder="Event Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <label htmlFor="date">Date (MM/DD)</label>
      <input
        type="text"
        id="date"
        placeholder="Date (MM/DD)"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <label htmlFor="points">KSEA Points</label>
      <input
        type="number"
        id="points"
        placeholder="KSEA Points"
        value={points}
        onChange={(e) => setPoints(e.target.value)}
      />
      <label htmlFor="note">Note</label>
      <textarea
        id="note"
        placeholder="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <button onClick={handleAddEvent}>Request Officer Approval</button>
    </div>
  );
};

export default AddEventScreen;