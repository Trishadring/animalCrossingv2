import React, { useState, useEffect } from "react";

import { Grid } from "semantic-ui-react";
import fishtable from '../../components/fish/fishtable'


export default function Fish({ currentFish }) {
  console.log(currentFish, "fish page")
  return (
    <>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 800 }}>
          Hello
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>

        </Grid.Column>
      </Grid.Row>
    </>
  )

}
