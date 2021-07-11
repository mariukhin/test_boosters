import * as R from 'ramda';
import { format, parseISO } from 'date-fns';

import {
  GET_GLOBAL_STATISTICS_SUCCESS,
  GET_GLOBAL_STATISTICS_ERROR,
  SET_FILTERS,
} from 'Actions/global';

import { FETCHING_STATE } from 'Utils/';

export const ROOT = 'global';

const initialState = {
  globalStatistics: {
    data: '',
    state: '',
  },
  filters: {
    dateFrom: Date.now(),
    dateTo: Date.now(),
  },
  error: '',
};

const globalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GLOBAL_STATISTICS_SUCCESS:
      return R.mergeDeepRight(state, {
        globalStatistics: {
          data: payload.map(item => ({
            ...item,
            Date: format(parseISO(item.Date), 'MM/dd/yyyy'),
          })),
          state: FETCHING_STATE.LOADED,
        },
        error: '',
      });
    case GET_GLOBAL_STATISTICS_ERROR:
      return R.mergeDeepRight(state, {
        globalStatistics: {
          data: '',
          state: FETCHING_STATE.ERROR,
        },
        error: payload,
      });
    case SET_FILTERS:
      return R.mergeDeepRight(state, {
        filters: {
          ...(payload.dateFrom && {
            dateFrom:
              payload.dateFrom === 'clear' ? Date.now() : payload.dateFrom,
          }),
          ...(payload.dateTo && {
            dateTo: payload.dateTo === 'clear' ? Date.now() : payload.dateTo,
          }),
        },
        error: '',
      });
    default:
      return state;
  }
};

export default globalReducer;
