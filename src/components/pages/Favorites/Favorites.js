import React, { useEffect, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';

import { removeBusinessFromFavorites } from '../../../store/actions';
import { getAllFavoritesData } from '../../../store/selectors';
import Layout from '../../common/Layout';
import { BusinessCardContainer } from '../../common/BusinessCard';

function Favorites() {
  const dispatch = useDispatch();

  const favoritesData = useSelector(getAllFavoritesData);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // loading imitaiotn
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const data = useMemo(() => favoritesData.map(favoriteBusiness => ({
    ...favoriteBusiness,
    isAddedToFavorites: true
  })), [favoritesData]);

  const handleRemoveFromFavorites = useCallback((businessId) => {
    dispatch(removeBusinessFromFavorites(businessId));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Typography variant="h2">Favorites</Typography>
      {data.length ? (
        <BusinessCardContainer
          data={data}
          isLoading={isLoading}
          handleRemoveFromFavorites={handleRemoveFromFavorites}
        />
      ) : (
        <Typography variant="h6">You have no favorites yet.</Typography>
      )}
    </Layout>
  );
}

export default Favorites;
