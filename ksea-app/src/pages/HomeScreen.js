import React from "react";
import { useData } from "../DataContext/DataContext";

const HomeScreen = () => {
  const { data, setCurrentIndex } = useData();
  const profile = data.currentMember;

  const now = new Date();

  const futureEvents = data.events
    .filter((event) => event.date >= now)
    .sort((a, b) => a.date - b.date);

  const goProfile = () => {
    // Redirect to the Profile page using React Router or your preferred routing library
  };

  const goEvent = () => {
    // Redirect to the Event page using React Router or your preferred routing library
  };

  const goLeaderboard = () => {
    // Redirect to the Leaderboard page using React Router or your preferred routing library
  };

  const goAddEvent = () => {
    // Redirect to the AddEvent page using React Router or your preferred routing library
  };

  return (
    <div>
      <div>
        <div>
          <img src="../media/ksea-logo.jpg" alt="KSEA Logo" />
        </div>
        <button onClick={goProfile}>
          <img src="../media/profile.png" alt="Profile" />
        </button>
      </div>
      <div>
        <div>
          <h2>Welcome, {profile.name}!</h2>
          <p>Today is {new Date().toLocaleDateString()}.</p>
        </div>
        <h3>Upcoming Events:</h3>
        {data.events.map((event, index) => (
          <div key={index} onClick={() => { setCurrentIndex(index); goEvent(); }}>
            <p>
              {event.date.toLocaleDateString("en-US", {
                month: "numeric",
                day: "numeric",
                weekday: "short",
              })}
            </p>
            <p>{event.name}</p>
          </div>
        ))}
      </div>
      <div>
        <button onClick={goAddEvent}>Create Event</button>
      </div>
      <div>
        <button onClick={goLeaderboard}>
          <img src="../media/trophy.png" alt="Leaderboard" />
        </button>
        <p>My KSEA Points: {profile.points}</p>
      </div>
    </div>
  );
};

export default HomeScreen;