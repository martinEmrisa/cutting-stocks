import React from 'react';
import { Grid } from '@material-ui/core';

export default function Output({ results }) {
  return (
    <Grid item xs={6}>
      {results && (
        <>
          <p>Best Fit 10 Results</p>

          {results.length
            ? results.map((result, index1) => {
                const { array, sum } = result;
                return (
                  <p key={index1}>
                    {array.map((val, index2) => (
                      <span key={index2}>
                        {index2 === array.length - 1 ? val + ' = ' + sum : val + ' + '}
                      </span>
                    ))}
                  </p>
                );
              })
            : ''}
        </>
      )}
    </Grid>
  );
}
