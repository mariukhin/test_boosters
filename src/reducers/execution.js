import * as R from 'ramda';

import {
  CONNECT_EXECUTION_SUCCESS,
  CONNECT_EXECUTION_ERROR,
  DISCONNECT_EXECUTION_SUCCESS,
  DISCONNECT_EXECUTION_ERROR,
  GET_EXECUTION_LIST_SUCCESS,
  GET_EXECUTION_LIST_ERROR,
} from 'Actions/execution';

import { FETCHING_STATE } from 'Utils/';

export const ROOT = 'execution';

const initialState = {
  executionList: {
    data: '',
    state: '',
  },
  isConnected: false,
  error: '',
};

const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_EXECUTION_LIST_SUCCESS:
      return R.mergeDeepRight(state, {
        executionList: {
          data: payload.map((item, idx) => ({
            ...item,
            key: idx.toString(),
          })),
          state: FETCHING_STATE.LOADED,
        },
        error: '',
      });
    case GET_EXECUTION_LIST_ERROR:
      return R.mergeDeepRight(state, {
        executionList: {
          data: '',
          state: FETCHING_STATE.ERROR,
        },
        error: payload,
      });

    case CONNECT_EXECUTION_SUCCESS:
      return R.mergeDeepRight(state, {
        isConnected: true,
        error: '',
      });
    case DISCONNECT_EXECUTION_SUCCESS:
      return R.mergeDeepRight(state, {
        isConnected: false,
        error: '',
      });
    case CONNECT_EXECUTION_ERROR:
    case DISCONNECT_EXECUTION_ERROR:
      return R.mergeDeepRight(state, {
        isConnected: false,
        error: payload,
      });
    default:
      return state;
  }
};

export default orderReducer;
