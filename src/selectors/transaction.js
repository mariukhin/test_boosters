import * as R from 'ramda';

import { ROOT } from 'Reducers/transaction';

export const getTransactionsList = state =>
  R.path([ROOT, 'transactionList'], state);
export const getError = state => R.path([ROOT, 'error'], state);
