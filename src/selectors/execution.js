import * as R from 'ramda';

import { ROOT } from 'Reducers/execution';

export const getConnectedStatus = state => R.path([ROOT, 'isConnected'], state);
export const getExecutionList = state => R.path([ROOT, 'executionList'], state);
export const getError = state => R.path([ROOT, 'error'], state);
