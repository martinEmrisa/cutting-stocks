import React from 'react';
import { Grid } from '@material-ui/core';

export default function Stock() {
  return (
    <>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        Length
      </Grid>
      <Grid item xs={4}>
        Qty
      </Grid>
    </>
  );
}
