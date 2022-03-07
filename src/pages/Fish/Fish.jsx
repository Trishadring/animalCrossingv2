import React, { useState, useEffect } from "react";

import { Table, Container } from "semantic-ui-react";
import FishTable from '../../components/fish/fishtable'
import Loading from '../../components/Loader/Loader'
import fishData from '../../Data/fishData'
import * as fishAPI from "../../utils/fishAPI";

export default function Fish({ currentHemisphere }) {
  const [currentFish, setCurrentFish] = useState();
  const [loading, setLoading] = useState(true);

  async function getFish() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    const currentHour = `h_${today.getHours()}`;
    const currentMonth = months[today.getMonth()];
    try {
      const data = await fishAPI.getAll();
      console.log(data.fish, " this is data,");
      let filterFish = await data.fish.filter(function (i) {
        return i.time_available[currentHour] === true &&
          i.hemisphere[currentHemisphere][currentMonth] === true;
      });
      console.log(filterFish, "database fishies")
      setCurrentFish(filterFish);
      setLoading(() => false);
      // setPosts([...data.posts]);
      // setLoading(false);
    } catch (err) {
      console.log(err.message, " this is the error");
      // setError(err.message);
    }
  }
  console.log(currentFish, "fish page")
  // const allFish = currentFish.map((m, i) => <FishTable key={m.id} {...m} />)
  function addCaught() {

  }
  useEffect(() => {
    getFish();
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
            <Table.HeaderCell className="mobile hidden">Shadow Size</Table.HeaderCell>
            <Table.HeaderCell className="mobile hidden">Available</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {currentFish.map((fish) => {
            return (
              <FishTable fish={fish} addCaught={addCaught} />
            );
          })}
        </Table.Body>
      </Table>
    </Container>
  )

}
