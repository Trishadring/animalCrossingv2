import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import Fish from '../Fish/Fish'
import Bugs from '../Bugs/Bugs'
import Loader from '../../components/Loader/Loader'
import { Container } from "semantic-ui-react";
import Nav from '../../components/Nav/Nav'
function App() {
  const [user, setUser] = useState(userService.getUser());
  const [currentBugs, setCurrentBugs] = useState();
  const [currentFish, setCurrentFish] = useState();
  const [currentHemisphere, setCurrentHemisphere] = useState('north');
  console.log(currentHemisphere);

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  if (user) {

    return (
      <>
        <Nav handleLogout={handleLogout} setCurrentHemisphere={setCurrentHemisphere} />
        <Routes>
          <Route path="/" element={<h1>This is Home Page!</h1>} />
          <Route path="/fish" element={<Fish currentHemisphere={currentHemisphere} />} />
          <Route path="/bugs" element={<Bugs currentHemisphere={currentHemisphere} />} />
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
      </>
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
