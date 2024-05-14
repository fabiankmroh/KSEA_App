import React from "react";
import { useData } from "../DataContext/DataContext";

const EventScreen = () => {
  const { data } = useData();
  const event = data.events[data.currentIndex];

  const goHome = () => {
    // Redirect to the Home page using React Router or your preferred routing library
  };

  const handleLinkPress = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <div>
        <button onClick={goHome}>Back</button>
      </div>
      <div>
        <img src="../media/ksea-logo.jpg" alt="KSEA Logo" />
      </div>
      <div>
        <h1>{event.name}</h1>
      </div>
      <div>
        <p>
          <strong>Date:</strong> {event.date.toDateString()}
        </p>
        <p>
          <strong>Type:</strong> {event.type}
        </p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
        <p>
          <strong>Points:</strong> {event.points}
        </p>
        <p>
          <strong>Notes:</strong>
          <br />
          {event.note}
        </p>
        <p>
          <strong>Registration:</strong>
          <br />
          <a href={event.register_link} onClick={() => handleLinkPress(event.register_link)}>
            {event.register_link}
          </a>
        </p>
      </div>
    </div>
  );
};

export default EventScreen;