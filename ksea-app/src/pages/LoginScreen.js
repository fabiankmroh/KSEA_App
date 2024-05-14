import React, { useState } from "react";
import { useData } from "../DataContext/DataContext";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, setCurrentMember } = useData();

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please enter both email and password.");
      return;
    }

    const user = data.members.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );
    if (user) {
      setCurrentMember(user);
      // Redirect to the Home page using React Router or your preferred routing library
    } else {
      alert("Incorrect email or password.");
    }
  };

  const goSignUp = () => {
    // Redirect to the Signup page using React Router or your preferred routing library
  };

  return (
    <div>
      <img src="../media/ksea-logo.jpg" alt="KSEA Logo" />
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={goSignUp}>Sign Up</button>
    </div>
  );
};

export default LoginScreen;