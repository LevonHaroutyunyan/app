import {
  GET_BUSINESSES_START, GET_BUSINESSES_SUCCESS, GET_BUSINESSES_FAILURE
} from '../actions/constants';

const initialState = {
  data: [],
  term: '',
  pagination: { limit: 0, offset: 0, total: 0 },
  isLoading: false,
  error: null
};

const businesses = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUSINESSES_START:
      return {
        ...state,
        term: action.term,
        data: action.offset === 0
          ? []
          : [...state.data],
        pagination: {
          ...state.pagination,
          limit: action.limit,
          offset: action.offset
        },
        isLoading: true
      };
    case GET_BUSINESSES_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload.businesses],
        pagination: {
          ...state.pagination,
          total: action.payload.total
        },
        isLoading: false
      };
    case GET_BUSINESSES_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};

export default businesses;
