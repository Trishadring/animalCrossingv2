import React, { useState, useEffect } from "react";

import { Table, Container } from "semantic-ui-react";
import BugTable from '../../components/BugTable/BugTable'
import Loading from '../../components/Loader/Loader'
import BugData from '../../Data/bugData'

export default function Bug({ currentHemisphere }) {
  console.log(BugData, "data")
  const [currentBug, setCurrentBug] = useState();
  const [loading, setLoading] = useState(true);
  async function getData() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    const currentHour = `h_${today.getHours()}`;
    console.log(currentHour)
    const currentMonth = months[today.getMonth()];
    console.log(currentMonth, "month")
    let filterBug = await BugData.filter(function (i) {
      return i.time_available[currentHour] === true &&
        i.hemisphere[currentHemisphere][currentMonth] === true;
    });
    console.log(filterBug, "filteredbug")
    setCurrentBug(filterBug);
    setLoading(() => false);
  }
  console.log(currentBug, "bug page")
  // const allBug = currentBug.map((m, i) => <BugTable key={m.id} {...m} />)

  useEffect(() => {
    getData();
  }, [currentHemisphere]);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <Container style={{ maxWidth: 800 }}>
      <Table basic striped unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Caught</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell className="mobile hidden">Price</Table.HeaderCell>
            <Table.HeaderCell>Location</Table.HeaderCell>
            <Table.HeaderCell className="mobile hidden">Avaliable</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {currentBug.map((bug) => {
            return (
              <BugTable bug={bug} />
            );
          })}
        </Table.Body>
      </Table>
    </Container>
  )

}
