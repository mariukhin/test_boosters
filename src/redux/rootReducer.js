import { combineReducers } from 'redux';

import country from 'Reducers/country';
import global from 'Reducers/global';

const rootReducer = combineReducers({
  country,
  global,
});

export default rootReducer;
