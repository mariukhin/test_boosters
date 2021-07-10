export const namespace = 'ORDER';
export const GET_ORDERS_LIST_SUCCESS = `${namespace}/GET_ORDERS_LIST_SUCCESS`;
export const GET_ORDERS_LIST_ERROR = `${namespace}/GET_ORDERS_LIST_ERROR`;

export const getOrdersListSuccess = ({ data }) => ({
  type: GET_ORDERS_LIST_SUCCESS,
  payload: data,
});

export const getOrdersListError = error => ({
  type: GET_ORDERS_LIST_ERROR,
  payload: error.response.data.error,
});
