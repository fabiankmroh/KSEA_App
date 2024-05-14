import React from "react";
import { useData } from "../DataContext/DataContext";

const LeaderboardScreen = () => {
  const { data } = useData();

  // Sort users by points in descending order and include rank
  const sortedUsers = data.members
    .slice() // Create a shallow copy to sort without mutating the original array
    .sort((a, b) => b.points - a.points) // Sort users based on points
    .map((user, index) => ({ ...user, rank: index + 1 })); // Map users to include rank

  const goHome = () => {
    // Redirect to the Home page using React Router or your preferred routing library
  };

  return (
    <div>
      <div>
        <div>
          <button onClick={goHome}>Back</button>
        </div>
        <div>
          <img src="../media/ksea-logo.jpg" alt="KSEA Logo" />
        </div>
        <div>
          {sortedUsers.map((user) => (
            <div key={user.email}>
              <span>{user.rank}</span>
              <span>{user.name}</span>
              <span>{user.points} Points</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardScreen;