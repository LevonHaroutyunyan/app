import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import BusinessCard from './BusinessCard';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    minWidth: '100%',
    marginTop: 12,
  },
  loaderContainer: {
    minHeight: '100vh'
  }
});

function BusinessCardContainer(props) {
  const {
    data,
    isLoading,
    handleAddToFavorites,
    handleRemoveFromFavorites
  } = props;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        {data.map(business => (
          <Grid item key={business.id}>
            <BusinessCard
              data={business}
              handleAddToFavorites={handleAddToFavorites}
              handleRemoveFromFavorites={handleRemoveFromFavorites}
            />
          </Grid>
        ))}
        {isLoading && (
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.loaderContainer}
          >
            <CircularProgress />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default BusinessCardContainer;
