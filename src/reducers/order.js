import * as R from 'ramda';

import { GET_ORDERS_LIST_SUCCESS, GET_ORDERS_LIST_ERROR } from 'Actions/order';

import { FETCHING_STATE } from 'Utils/';

export const ROOT = 'orders';

const initialState = {
  ordersList: {
    data: '',
    state: '',
  },
  error: '',
};

const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ORDERS_LIST_SUCCESS:
      return R.mergeDeepRight(state, {
        ordersList: {
          data: payload.map(item => ({ ...item, key: item.id })),
          state: FETCHING_STATE.LOADED,
        },
        error: '',
      });
    case GET_ORDERS_LIST_ERROR:
      return R.mergeDeepRight(state, {
        ordersList: {
          data: '',
          state: FETCHING_STATE.ERROR,
        },
        error: payload,
      });
    default:
      return state;
  }
};

export default orderReducer;
