import React, { useState } from "react";
import { useData } from "../DataContext/DataContext";

const SignupScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [major, setMajor] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [grade, setGrade] = useState("");
  const { data, addUser } = useData();

  const handleSignup = async () => {
    // Authenticate valid sign-up info
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === "" ||
      major.trim() === "" ||
      birthdate.trim() === "" ||
      grade.trim() === ""
    ) {
      alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const users = data.members;

    if (users.some((user) => user.email === email)) {
      alert("This email is already in use.");
      return;
    }

    addUser(name, email, password, major, birthdate, grade);

    alert("User registered successfully!");

    // Redirect to the Login page using React Router or your preferred routing library
  };

  const goLogIn = () => {
    // Redirect to the Login page using React Router or your preferred routing library
  };

  return (
    <div>
      <div>
        <button onClick={goLogIn}>Back</button>
      </div>
      <img src="../media/ksea-logo.jpg" alt="KSEA Logo" />
      <h1>Signup</h1>
      <label htmlFor="name">Name (First Last)</label>
      <input
        type="text"
        id="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <label htmlFor="major">Major</label>
      <input
        type="text"
        id="major"
        placeholder="Major"
        value={major}
        onChange={(e) => setMajor(e.target.value)}
      />
      <label htmlFor="birthdate">Birthdate (MM/DD/YYYY)</label>
      <input
        type="text"
        id="birthdate"
        placeholder="Birthdate"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <label htmlFor="grade">Grade</label>
      <input
        type="text"
        id="grade"
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SignupScreen;