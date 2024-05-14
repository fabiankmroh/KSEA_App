import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./src/pages/LoginScreen";
import HomeScreen from "./src/pages/HomeScreen";
import SignupScreen from "./src/pages/SignupScreen";
import ProfileScreen from "./src/pages/ProfileScreen";
import LeaderboardScreen from "./src/pages/LeaderboardScreen";
import EventScreen from "./src/pages/EventScreen";
import AddEventScreen from "./src/pages/AddEventScreen";
import { DataProvider } from "./src/DataContext/DataContext";

const App = () => {
  return (
    <DataProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route path="/signup" component={SignupScreen} />
          <Route path="/home" component={HomeScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/event" component={EventScreen} />
          <Route path="/add-event" component={AddEventScreen} />
          <Route path="/leaderboard" component={LeaderboardScreen} />
        </Switch>
      </Router>
    </DataProvider>
  );
};

export default App;