import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import Fish from '../Fish/Fish'
import Bugs from '../Bugs/Bugs'
import Home from '../HomePage/Home'
import Nav from '../../components/Nav/Nav'
function App() {
  const [user, setUser] = useState(userService.getUser());
  const [currentHemisphere, setCurrentHemisphere] = useState('north');

  function handleSignUpOrLogin() {
    setUser(userService.getUser());
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
          <Route path="/" element={<Home setCurrentHemisphere={setCurrentHemisphere} />} />
          <Route path="/fish" element={<Fish currentHemisphere={currentHemisphere} user={user} />} />
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
