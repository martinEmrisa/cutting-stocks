import React from 'react';
import { makeStyles, Grid, TextField, Button } from '@material-ui/core';
import ReactLoading from 'react-loading';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 200
  },
  flexDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  between: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  submitBtn: {
    position: 'relative'
  },
  loading: {
    width: '20px !important',
    height: '20px !important',
    '& svg': {
      width: 20,
      height: 20,
      fill: 'white'
    }
  }
}));

const CuttingSet = ({ handleSteelLength, handleSubmit, length, loading }) => {
  const classes = useStyles();

  return (
    <Grid container direction="row" item xs={6} className={classes.root}>
      <Grid item xs={5} className={classes.flexDiv}>
        Stock steel length
      </Grid>
      <Grid item xs={5}>
        <TextField
          id="standard-number"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          value={length}
          onChange={handleSteelLength}
        />
      </Grid>
      <Grid item xs={12} className={classes.flexDiv}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          className={classes.submitBtn}
        >
          Submit&nbsp;
          {loading && (
            <ReactLoading type="spinningBubbles" color="#3949AB" className={classes.loading} />
          )}
        </Button>
      </Grid>
    </Grid>
  );
};

export default CuttingSet;
