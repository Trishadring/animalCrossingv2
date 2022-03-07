import React, { useState, useEffect } from "react";

import { Table, Icon } from "semantic-ui-react";
import './FishTable.css'


export default function FishTable({ fish }) {
  function clickHandler() {
    console.log(fish, "clicked on this fish")
  }
  return (
    <Table.Row key={fish.id} id={fish.id}>
      <Table.Cell><Icon name='check' onClick={() => clickHandler()} /></Table.Cell>
      <Table.Cell>
        <img className="photo" src={`/imgs/${fish.img}`} alt={fish.fish_name} />
      </Table.Cell>
      <Table.Cell>{fish.fish_name}</Table.Cell>
      <Table.Cell className="mobile hidden">{fish.price}</Table.Cell>
      <Table.Cell className="mobile hidden">{fish.shadow_size}</Table.Cell>
      <Table.Cell className="mobile hidden">{fish.time}</Table.Cell>
    </Table.Row>
  )

}
