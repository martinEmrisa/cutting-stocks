import React from 'react';
import { makeStyles, Grid, TextField, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 20,
    '& > div:not(first-child) > div': {
      display: 'flex',
      justifyContent: 'flex-start',
      width: '90%'
    }
  }
}));

export default function Stock({ stock, onChange, handleDelete }) {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
      <Grid item xs={3}>
        Part&nbsp;{stock?.id}
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="standard-number"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          name="length"
          value={stock?.length}
          onChange={(e) => onChange(e, stock?.id)}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="standard-number"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          name="qty"
          value={stock?.qty}
          onChange={(e) => onChange(e, stock?.id)}
        />
      </Grid>
      <Grid item xs={1}>
        <IconButton aria-label="delete" onClick={() => handleDelete(stock?.id)}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
