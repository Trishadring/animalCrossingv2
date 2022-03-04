import React, { useState, useEffect } from "react";

import { Table, Icon } from "semantic-ui-react";
import './FishTable.css'


export default function FishTable({ fish }) {
  console.log(fish, "fish page")
  return (
    <Table.Row key={fish.id} id={fish.id}>
      <Table.Cell><Icon name='check' /></Table.Cell>
      <Table.Cell>
        <img className="photo" src={`/imgs/${fish.img}`} alt={fish.fish_name} />
      </Table.Cell>
      <Table.Cell>{fish.fish_name}</Table.Cell>
      <Table.Cell>{fish.price}</Table.Cell>
      <Table.Cell>{fish.shadow_size}</Table.Cell>
      <Table.Cell>{fish.time}</Table.Cell>
    </Table.Row>
  )

}
