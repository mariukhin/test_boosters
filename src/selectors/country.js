import * as R from 'ramda';

import { ROOT } from 'Reducers/country';

export const getCountryStatistics = state =>
  R.path([ROOT, 'countryStatistics'], state);
export const getCountries = state => R.path([ROOT, 'countries'], state);
export const getFilters = state => R.path([ROOT, 'filters'], state);
export const getError = state => R.path([ROOT, 'error'], state);
