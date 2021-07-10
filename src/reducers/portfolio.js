import * as R from 'ramda';

import {
  GET_PORTFOLIO_LIST_SUCCESS,
  GET_PORTFOLIO_LIST_ERROR,
} from 'Actions/portfolio';

import { FETCHING_STATE } from 'Utils/';

export const ROOT = 'portfolio';

const initialState = {
  portfolioList: {
    data: '',
    state: '',
  },
  error: '',
};

const portfolioReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PORTFOLIO_LIST_SUCCESS:
      return R.mergeDeepRight(state, {
        portfolioList: {
          data: payload.map(item => ({ ...item, key: item.id })),
          state: FETCHING_STATE.LOADED,
        },
        error: '',
      });
    case GET_PORTFOLIO_LIST_ERROR:
      return R.mergeDeepRight(state, {
        portfolioList: {
          data: '',
          state: FETCHING_STATE.ERROR,
        },
        error: payload,
      });
    default:
      return state;
  }
};

export default portfolioReducer;
