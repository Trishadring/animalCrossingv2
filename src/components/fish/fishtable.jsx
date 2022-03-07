import React, { useState, useEffect } from "react";

import { Table, Icon } from "semantic-ui-react";
import './FishTable.css'


export default function FishTable({ fish, user, addCaught }) {

  const caughtIndex = fish.caught.findIndex(caught => caught.username === user.username)
  const Color = caughtIndex > -1 ? 'red' : 'blue';
  const CaughtIcon = caughtIndex > -1 ? 'remove' : 'check';
  const Caught = caughtIndex > -1 ? "Caught" : '';
  function clickHandler() {
    console.log(fish, "clicked on this fish")
    addCaught(fish._id)
    // caughtIndex > -1 ? () => removeCaught(fish.caught[caughtIndex]._id) : () => addCaught(fish._id)
  }
  return (
    <Table.Row key={fish._id} id={fish.id} className={Caught}>
      <Table.Cell><Icon name={CaughtIcon} color={Color} onClick={() => clickHandler()} /></Table.Cell>
      <Table.Cell>
        <img className="photo" src={`/imgs/${fish.img}`} alt={fish.fish_name} />
      </Table.Cell>
      <Table.Cell>{fish.fish_name}</Table.Cell>
       <Table.Cell>{fish.location}</Table.Cell>
      <Table.Cell className="mobile hidden">{fish.price}</Table.Cell>
      <Table.Cell className="mobile hidden">{fish.shadow_size}</Table.Cell>
      <Table.Cell className="mobile hidden">{fish.time}</Table.Cell>
    </Table.Row>
  )

}
