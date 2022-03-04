import React, { useState, useEffect } from "react";

import { Table, Container } from "semantic-ui-react";
import FishTable from '../../components/fish/fishtable'
import Loading from '../../components/Loader/Loader'
import fishData from '../../Data/fishData'

export default function Fish({ currentHemisphere }) {
  const [currentFish, setCurrentFish] = useState();
  const [loading, setLoading] = useState(true);
  async function getData() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    const currentHour = `h_${today.getHours()}`;
    const currentMonth = months[today.getMonth()];
    console.log(currentMonth, "month")
    let filterFish = await fishData.fishData.filter(function (i) {
      return i.time_available[currentHour] === true &&
        i.hemisphere[currentHemisphere][currentMonth] === true;
    });
    console.log(filterFish, "filteredfish")
    setCurrentFish(filterFish);
    setLoading(() => false);
  }
  console.log(currentFish, "fish page")
  // const allFish = currentFish.map((m, i) => <FishTable key={m.id} {...m} />)

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
      <Table basic striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Caught</Table.HeaderCell>
            <Table.HeaderCell>img</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Shadow Size</Table.HeaderCell>
            <Table.HeaderCell>Avaliable</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {currentFish.map((fish) => {
            return (
              <FishTable fish={fish} />
            );
          })}
        </Table.Body>
      </Table>
    </Container>
  )

}
