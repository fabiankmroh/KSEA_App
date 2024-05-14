import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="/signup">Signup</Link>
        </li>  
        <li>
            <Link to="/profile">Profile</Link>
        </li>
        <li>
            <Link to="/event">Event</Link>
        </li>
        <li>
            <Link to="/addevent">AddEvent</Link>
        </li>
        <li>
            <Link to="/leaderboard">Leaderboard</Link>
        </li>
    </ul>
    </nav>
  );
};

export default Navigation;