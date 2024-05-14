import React from "react";
import { useData } from "../DataContext/DataContext";

const ProfileScreen = () => {
  const { data } = useData();
  const profile = data.currentMember;

  const goHome = () => {
    // Redirect to the Home page using React Router or your preferred routing library
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
        <img src="../media/profile-jaewon.jpeg" alt="Profile" />
      </div>
      <div>
        <h2>{profile.name}</h2>
        <p>{profile.email}</p>
      </div>
      <div>
        <p>
          <strong>Major:</strong> {profile.major}
        </p>
        <p>
          <strong>Grade:</strong> {profile.grade}
        </p>
        <p>
          <strong>Focus Group:</strong> {profile.fog}
        </p>
      </div>
    </div>
  );
};

export default ProfileScreen;