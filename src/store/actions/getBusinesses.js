import {
  GET_BUSINESSES_START, GET_BUSINESSES_SUCCESS, GET_BUSINESSES_FAILURE
} from './constants';

export const getBusinessesStart = (offset, limit, term) => ({
  type: GET_BUSINESSES_START,
  offset,
  limit,
  term
});

export const getBusinessesSuccess = payload => ({
  type: GET_BUSINESSES_SUCCESS,
  payload
});

export const getBusinessesFailure = error => ({
  type: GET_BUSINESSES_FAILURE,
  error
});
