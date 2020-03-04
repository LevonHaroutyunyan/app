import queryString from 'query-string';

import apiClient from '../apiClient';
import {
  PAGINATION_DEFAULT_LIMIT,
  PAGINATION_DEFAULT_OFFSET,
  BUSINESSES_DEFAULT_SEARCH_TERM,
  BUSINESSES_DEFAULT_SEARCH_LOCATION
} from '../constants';

const getBusinesses = async (
  offset = PAGINATION_DEFAULT_OFFSET,
  limit = PAGINATION_DEFAULT_LIMIT,
  term = BUSINESSES_DEFAULT_SEARCH_TERM,
  location = BUSINESSES_DEFAULT_SEARCH_LOCATION
) => {
  try {
    const query = queryString.stringify({ offset, limit, term, location });
    const response = await apiClient.get(`businesses/search?${query}`);
    return response.data;
  } catch (error)  {
    console.log(error);
  }
};

export default getBusinesses;
