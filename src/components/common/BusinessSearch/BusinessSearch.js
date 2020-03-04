import React, { useState, useEffect, useCallback } from 'react';
import { Grid, TextField } from '@material-ui/core';

function BusinessSearch(props) {
  const { name, handleSearch } = props;

  const [inputValue, setInputValue] = useState('');

  const handleChange = useCallback((event) => {
    const { value } = event.target;

    setInputValue(value);
  }, []);
  
  useEffect(() => {
    handleSearch(inputValue);
  }, [inputValue, handleSearch]);

  return (
    <Grid container>
      <TextField
        name={name}
        value={inputValue}
        onChange={handleChange}
        label="Search for businesses"
        variant="outlined"
      />
    </Grid>
  );
}

export default BusinessSearch;
