import {
  ADD_BUSINESS_TO_FAVORITES, REMOVE_BUSINESS_FROM_FAVORITES
} from '../actions/constants';

const initialState = {
  data: []
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUSINESS_TO_FAVORITES:
      return {
        ...state,
        data: state.data.some(favoriteBusiness => 
          favoriteBusiness.id === action.payload.businessId
        ) ? [...state.data] : [...state.data, action.payload]
      };
    case REMOVE_BUSINESS_FROM_FAVORITES:
      return {
        ...state,
        data: state.data.filter(favoriteBusiness =>
          favoriteBusiness.id !== action.businessId
        )
      };
    default:
      return state;
  }
};

export default favorites;
