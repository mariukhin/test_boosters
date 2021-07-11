import * as R from 'ramda';
import { formatISO, format, parseISO } from 'date-fns';

import {
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_ERROR,
  GET_COUNTRY_STATISTICS_SUCCESS,
  GET_COUNTRY_STATISTICS_ERROR,
  SET_FILTERS,
} from 'Actions/country';

import { FETCHING_STATE } from 'Utils/';

export const ROOT = 'country';

const initialState = {
  countryStatistics: {
    data: '',
    state: '',
  },
  countries: {
    data: '',
    state: '',
  },
  filters: {
    dateFrom: formatISO(Date.now()),
    case: { name: 'confirmed', title: 'Confirmed' },
    country: {
      Country: 'Ukraine',
      Slug: 'ukraine',
      ISO2: 'UA',
    },
  },
  error: '',
};

const countryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRY_STATISTICS_SUCCESS:
      let stat = payload;
      if (payload.length > 30) {
        stat = payload.slice(0, 30);
      }
      return R.mergeDeepRight(state, {
        countryStatistics: {
          data: stat.map(item => ({
            ...item,
            Date: format(parseISO(item.Date), 'MM/dd/yyyy'),
          })),
          state: FETCHING_STATE.LOADED,
        },
        error: '',
      });
    case GET_COUNTRY_STATISTICS_ERROR:
      return R.mergeDeepRight(state, {
        countryStatistics: {
          data: '',
          state: FETCHING_STATE.ERROR,
        },
        error: payload,
      });
    case GET_COUNTRIES_SUCCESS:
      return R.mergeDeepRight(state, {
        countries: {
          data: payload,
          state: FETCHING_STATE.LOADED,
        },
        error: '',
      });
    case GET_COUNTRIES_ERROR:
      return R.mergeDeepRight(state, {
        countries: {
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
          ...(payload.case && {
            case: payload.case,
          }),
          ...(payload.country && {
            country: payload.country,
          }),
        },
        error: '',
      });
    default:
      return state;
  }
};

export default countryReducer;
