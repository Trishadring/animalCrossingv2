import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import bugData from '../../Data/bugData'
import fishData from '../../Data/fishData'
import Fish from '../Fish/Fish'
import Loader from '../../components/Loader/Loader'
import { Container } from "semantic-ui-react";
function App() {
  const [user, setUser] = useState(userService.getUser());
  const [currentBugs, setCurrentBugs] = useState();
  const [currentFish, setCurrentFish] = useState();
  const [currentHemisphere, setCurrentHemisphere] = useState(true);
  // true = north false = south


  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  if (user) {

    return (

        <Routes>
          <Route path="/" element={<h1>This is Home Page!</h1>} />
          <Route path="/fish" element={<Fish />} />
          <Route
            path="/login"
            element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
          />
          <Route
            path="/signup"
            element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
          />
          <Route path="/logout" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
        </Routes>

    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
