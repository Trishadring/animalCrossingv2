import React, { useState, useEffect } from "react";

import { Table, Container } from "semantic-ui-react";
import FishTable from '../../components/fish/fishtable'
import Loading from '../../components/Loader/Loader'
import * as fishAPI from "../../utils/fishAPI";
import * as fishCaught from "../../utils/fishCaught";

export default function Fish({ currentHemisphere, user }) {
  const [currentFish, setCurrentFish] = useState();
  const [loading, setLoading] = useState(true);

  async function getFish() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    const currentHour = `h_${today.getHours()}`;
    const currentMonth = months[today.getMonth()];
    console.log("month:", currentMonth, "- hour:", currentHour)
    try {
      const data = await fishAPI.getAll();
      let filterFish = await data.fish.filter(function (i) {
        return i.time_available[currentHour] === true &&
          i.hemisphere[currentHemisphere][currentMonth] === true;
      });
      setCurrentFish(filterFish);
      setLoading(() => false);
    } catch (err) {
      console.log(err.message, " this is the error");
    }
  }
  async function addCaught(fishId) {
    try {
      const data = await fishCaught.create(fishId);
      console.log(data, " this is from addLike");
      getFish(); // < - will get all the posts and update the state, with our like added to the post
    } catch (err) {
      console.log(err.message);
    }
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
            <Table.HeaderCell>Location</Table.HeaderCell>
            <Table.HeaderCell className="mobile hidden">Price</Table.HeaderCell>
            <Table.HeaderCell className="mobile hidden">Shadow Size</Table.HeaderCell>
            <Table.HeaderCell className="mobile hidden">Available</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {currentFish.map((fish) => {
            return (
              <FishTable fish={fish} addCaught={addCaught} user={user} />
            );
          })}
        </Table.Body>
      </Table>
    </Container>
  )

}
