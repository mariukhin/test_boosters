import { combineReducers } from 'redux';

import execution from 'Reducers/execution';
import orders from 'Reducers/order';
import portfolio from 'Reducers/portfolio';
import transaction from 'Reducers/transaction';

const rootReducer = combineReducers({
  execution,
  orders,
  portfolio,
  transaction,
});

export default rootReducer;
