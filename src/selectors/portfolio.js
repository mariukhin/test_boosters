import * as R from 'ramda';

import { ROOT } from 'Reducers/portfolio';

export const getPortfolioList = state => R.path([ROOT, 'portfolioList'], state);
export const getError = state => R.path([ROOT, 'error'], state);
