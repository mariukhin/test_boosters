import * as R from 'ramda';

import {
  GET_TRANSACTIONS_LIST_SUCCESS,
  GET_TRANSACTIONS_LIST_ERROR,
} from 'Actions/transaction';

import { FETCHING_STATE } from 'Utils/';

export const ROOT = 'transaction';

const initialState = {
  transactionList: {
    data: '',
    state: '',
  },
  error: '',
};

const transactionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TRANSACTIONS_LIST_SUCCESS:
      return R.mergeDeepRight(state, {
        transactionList: {
          data: payload.map(item => ({ ...item, key: item.id })),
          state: FETCHING_STATE.LOADED,
        },
        error: '',
      });
    case GET_TRANSACTIONS_LIST_ERROR:
      return R.mergeDeepRight(state, {
        transactionList: {
          data: '',
          state: FETCHING_STATE.ERROR,
        },
        error: payload,
      });
    default:
      return state;
  }
};

export default transactionReducer;
