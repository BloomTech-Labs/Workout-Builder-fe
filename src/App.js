import React from "react";
import { Router } from "@reach/router";
import NavBar from "./components/global/NavBar";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import GoogleAuth from "./utils/googleAuth";
import Dashboard from "./components/dashboard/Dashboard";

const App = props => (
  <Router>
    <NavBar path="/">
      <Home exact path="home" />
      <Login exact path="login" {...props} />
      <SignUp exact path="signup" {...props} />
      <GoogleAuth path="auth" />
      <Dashboard path="dashboard" />
    </NavBar>
  </Router>
);

const Home = () => (
  <div>
    <h2>Welcome this is a temporary landing page till it is set up</h2>
  </div>
);

export default App;
