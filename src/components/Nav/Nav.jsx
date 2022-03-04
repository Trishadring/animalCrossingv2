import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header, Menu } from "semantic-ui-react";

function Nav({ handleLogout, setCurrentHemisphere }) {

  function changeHemisphere(hem) {
    setCurrentHemisphere(hem);
    console.log(hem, "im clicking");
  }
  return (
    <Menu >
      <Menu.Item as='a'>Animal Crossing</Menu.Item>
      <Menu.Item link><Link to="/fish">Fish</Link></Menu.Item>
      <Menu.Item link><Link to="/bugs">Bugs</Link></Menu.Item>
      <Menu.Item link onClick={() => { changeHemisphere('north') }}>
        North Hemisphere</Menu.Item>
      <Menu.Item link onClick={() => { changeHemisphere('south') }}>Southern Hemisphere</Menu.Item>
      <Menu.Item link onClick={handleLogout}>Logout</Menu.Item>
    </Menu>
  )
}

export default Nav;

