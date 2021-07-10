export const namespace = 'TRANSACTION';
export const GET_TRANSACTIONS_LIST_SUCCESS = `${namespace}/GET_TRANSACTIONS_LIST_SUCCESS`;
export const GET_TRANSACTIONS_LIST_ERROR = `${namespace}/GET_TRANSACTIONS_LIST_ERROR`;

export const getTransactionsListSuccess = ({ data }) => ({
  type: GET_TRANSACTIONS_LIST_SUCCESS,
  payload: data,
});

export const getTransactionsListError = error => ({
  type: GET_TRANSACTIONS_LIST_ERROR,
  payload: error.response.data.error,
});
