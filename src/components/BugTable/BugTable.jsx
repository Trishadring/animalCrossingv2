import React from "react";

import { Table, Icon } from "semantic-ui-react";
import './BugTable.css'


export default function BugTable({ bug }) {
  return (
    <Table.Row key={bug._id} id={bug.id}>
      <Table.Cell><Icon name='check' /></Table.Cell>
      <Table.Cell>
        <img className="photo" src={`/imgs/${bug.img}`} alt={bug.bug_name} />
      </Table.Cell>
      <Table.Cell>{bug.bug_name}</Table.Cell>
      <Table.Cell className="mobile hidden">{bug.price}</Table.Cell>
      <Table.Cell>{bug.location}</Table.Cell>
      <Table.Cell collapsing className="mobile hidden">{bug.time}</Table.Cell>
    </Table.Row>
  )

}
