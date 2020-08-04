import React, { useState } from 'react';
import { makeStyles, Grid, IconButton } from '@material-ui/core';
import StockHeader from './StockHeader';
import StockItem from './StockItem';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';

const useStyles = makeStyles(() => ({
  addIcon: {
    marginTop: 20
  }
}));

export default function Stock({ stocks, handleAdd, handleChange, handleDelete }) {
  const classes = useStyles();

  return (
    <Grid item container xs={6}>
      <StockHeader />
      {stocks.length
        ? stocks.map((stock) => (
            <StockItem
              key={stock.id}
              stock={stock}
              onChange={handleChange}
              handleDelete={handleDelete}
            />
          ))
        : ''}
      <Grid item xs={4} className={classes.addIcon}>
        <IconButton aria-label="add" onClick={handleAdd} className={classes.addIcon}>
          <AddCircleOutlineTwoToneIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
