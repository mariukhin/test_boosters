import * as R from 'ramda';

import { ROOT } from 'Reducers/order';

export const getOrdersList = state => R.path([ROOT, 'ordersList'], state);
export const getError = state => R.path([ROOT, 'error'], state);
