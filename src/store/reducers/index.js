import { combineReducers } from 'redux';

import businesses from './businesses';
import favorites from './favorites';

export default combineReducers({
  businesses,
  favorites
});
