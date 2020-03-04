/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useEffect,
  useState,
  useLayoutEffect,
  useCallback,
  useMemo
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useDebounce from '../../../utils/debounce';

import {
  getBusinessesStart,
  addBusinessToFavorites,
  removeBusinessFromFavorites
} from '../../../store/actions';
import {
  getAllBusinessesData,
  getAllBusinessesIsLoading,
  getAllFavoritesData
} from '../../../store/selectors';
import {
  PAGINATION_DEFAULT_LIMIT,
  PAGINATION_DEFAULT_OFFSET,
  BUSINESSES_DEFAULT_SEARCH_TERM
} from '../../../api/constants';

import Layout from '../../common/Layout';
import { BusinessCardContainer } from '../../common/BusinessCard';
import BusinessSearch from '../../common/BusinessSearch';

function Home() {
  const dispatch = useDispatch();

  const businessesData = useSelector(getAllBusinessesData);
  const businessesAreLoading = useSelector(getAllBusinessesIsLoading);
  const favoritesData = useSelector(getAllFavoritesData);

  const data = useMemo(() => businessesData.map(business => ({
    ...business,
    isAddedToFavorites: favoritesData.some(favoriteBusiness =>
      favoriteBusiness.id === business.id
    )
  })), [businessesData, favoritesData]);

  const [offset, setOffset] = useState(PAGINATION_DEFAULT_OFFSET);
  const [term, setTerm] = useState(BUSINESSES_DEFAULT_SEARCH_TERM);

  const debouncedTerm = useDebounce(term, 500);

  useEffect(() => {
    setOffset(PAGINATION_DEFAULT_OFFSET);
  }, [debouncedTerm]);

  useEffect(() => {
    dispatch(getBusinessesStart(offset, PAGINATION_DEFAULT_LIMIT, term));
  }, [offset, debouncedTerm]);

  const handleScroll = useCallback(() => {
    const scrollHasReachedToBottom = Math.ceil(window.innerHeight + window.pageYOffset) >=
      document.body.offsetHeight;

    if (scrollHasReachedToBottom && !businessesAreLoading) {
      setOffset(currentOffset => currentOffset + PAGINATION_DEFAULT_LIMIT);
    }
  }, [businessesAreLoading]);

  useLayoutEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleChangeSearch = useCallback((value) => {
    setTerm(value);
  }, []);

  const handleAddToFavorites = useCallback((business) => {
    dispatch(addBusinessToFavorites(business));
  }, []);

  const handleRemoveFromFavorites = useCallback((businessId) => {
    dispatch(removeBusinessFromFavorites(businessId));
  }, []);

  return (
    <Layout>
      <BusinessSearch
        name="term"
        value={term}
        handleSearch={handleChangeSearch}
      />
      <BusinessCardContainer
        data={data}
        isLoading={businessesAreLoading}
        handleAddToFavorites={handleAddToFavorites}
        handleRemoveFromFavorites={handleRemoveFromFavorites}
      />
    </Layout>
  );
}

export default Home;
