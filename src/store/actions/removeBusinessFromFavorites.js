import { REMOVE_BUSINESS_FROM_FAVORITES } from './constants';

export const removeBusinessFromFavorites = businessId => ({
  type: REMOVE_BUSINESS_FROM_FAVORITES,
  businessId
});
