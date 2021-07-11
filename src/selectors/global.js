import * as R from 'ramda';

import { ROOT } from 'Reducers/global';

export const getGlobalStatistics = state =>
  R.path([ROOT, 'globalStatistics'], state);
export const getFilters = state => R.path([ROOT, 'filters'], state);
export const getError = state => R.path([ROOT, 'error'], state);
