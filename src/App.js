import React, { useState, useEffect } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Output from './components/Output';
import Stock from './components/Stock';
import CuttingSet from './components/CuttingSet';

const useStyles = makeStyles(() => ({
  root: {
    padding: 20
  }
}));

const mockStocks = [
  { id: 0, length: 30, qty: 4 },
  { id: 1, length: 40, qty: 3 },
  { id: 2, length: 50, qty: 5 }
];

function App({}) {
  const classes = useStyles();
  const [steelLength, setSteelLength] = useState(250);
  const [stocks, setStocks] = useState(mockStocks);
  const [lengths, setLengths] = useState([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  useEffect(() => {
    let buf = [];
    stocks.forEach((stock) => {
      for (let index = 0; index < stock.qty; index++) {
        buf.push(stock.length);
      }
    });
    setLengths(buf);
  }, [stocks]);

  const handleAdd = () => {
    setStocks([...stocks, { id: stocks.length, length: 0, qty: 0 }]);
  };

  const handleChange = (e, id) => {
    setStocks(
      stocks.map((stock) => {
        if (stock.id === id) return { ...stock, [e.target.name]: parseInt(e.target.value) };
        else return stock;
      })
    );
  };

  const handleDelete = (id) => {
    setStocks(stocks.filter((stock) => stock?.id !== id));
  };

  const handleSteelLength = (e) => {
    setSteelLength(parseInt(e.target.value));
  };

  const handleSubmit = async () => {
    // setLoading(true);
    // setResults(null);
    let combinations = [];
    function getCombinationsLessThan(currentCombination, choices, remainingSum) {
      // Check if currentCombination should be added to the solutions list
      if (remainingSum < 0) {
        return; // Sum is too large; terminate recursion
      } else if (currentCombination.length > 0) {
        currentCombination.sort(); // Sort all combinations so comparison can be made sequentially
        var uniquePermutation = true;
        for (var i = 0; i < combinations.length; i++) {
          if (currentCombination.length === combinations[i].length) {
            for (
              var j = 0;
              currentCombination[j] === combinations[i][j] && j < combinations[i].length;
              j++
            ); // Pass
            if (j === currentCombination.length) {
              // For loop got all the way through combinations[i], so currentCombination = combinations[i]
              uniquePermutation = false;
              break;
            }
          }
        }
        if (uniquePermutation) {
          combinations.push(currentCombination);
        }
      }

      for (var i = 0; i < choices.length; i++) {
        // Copy choices
        var newChoices = choices.slice();
        // Cut out the i'th element and add to the current combination
        var newCombination = currentCombination.concat(newChoices.splice(i, 1));
        var newRemainingSum = remainingSum - choices[i];
        getCombinationsLessThan(newCombination, newChoices, newRemainingSum);
      }
    }
    getCombinationsLessThan([], lengths, steelLength - 1);
    let t_combinations = combinations.map((combination) => {
      let sum = 0;
      combination.forEach((value) => {
        sum += value;
      });
      return {
        array: combination,
        sum: sum
      };
    });
    setResults(
      t_combinations.sort((a, b) => (a.sum < b.sum ? 1 : -1)).filter((e, index) => index < 10)
    );
    // setLoading(false);
  };

  return (
    <Grid container spacing={3} className={classes.root}>
      <Stock
        stocks={stocks}
        handleAdd={handleAdd}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <CuttingSet
        handleSteelLength={handleSteelLength}
        handleSubmit={handleSubmit}
        length={steelLength}
        loading={loading}
      />
      <Output results={results} />
    </Grid>
  );
}

export default App;
