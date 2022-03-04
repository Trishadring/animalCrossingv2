import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import bugData from '../../Data/bugData'
import fishData from '../../Data/fishData'
import Fish from '../Fish/Fish'

function App() {
  const [user, setUser] = useState(userService.getUser());
  const [currentBugs, setCurrentBugs] = useState();
  const [currentFish, setCurrentFish] = useState();
  const [currentHemisphere, setCurrentHemisphere] = useState(true);
  // true = north false = south

  function getData() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    const currentHour = `h_${today.getHours()}`;
    const currentMonth = months[today.getMonth()];
    console.log(currentMonth, "month")
    let filterFish = fishData.fishData.filter(function (i) {
      return i.time_available[currentHour] === true &&
        i.hemisphere.north[currentMonth] === true;
    });
    console.log(filterFish, "filteredfish")
    setCurrentFish(filterFish);
  }
  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  useEffect(() => {
    getData();
  }, []);
  if (user) {
    console.log(bugData.bugList[0], "bugdata")
    console.log(fishData.fishData[0], "fishData")
    return (
      <Routes>
        <Route path="/" element={<h1>This is Home Page!</h1>} />
        <Route path="/fish" element={<Fish currentFish={currentFish} />} />
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
