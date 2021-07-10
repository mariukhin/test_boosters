export const namespace = 'EXECUTION';
export const CONNECT_EXECUTION_SUCCESS = `${namespace}/CONNECT_EXECUTION_SUCCESS`;
export const CONNECT_EXECUTION_ERROR = `${namespace}/CONNECT_EXECUTION_ERROR`;
export const DISCONNECT_EXECUTION_SUCCESS = `${namespace}/DISCONNECT_EXECUTION_SUCCESS`;
export const DISCONNECT_EXECUTION_ERROR = `${namespace}/DISCONNECT_EXECUTION_ERROR`;
export const GET_EXECUTION_LIST_SUCCESS = `${namespace}/GET_EXECUTION_LIST_SUCCESS`;
export const GET_EXECUTION_LIST_ERROR = `${namespace}/GET_EXECUTION_LIST_ERROR`;

export const getExecutionListSuccess = ({ data }) => ({
  type: GET_EXECUTION_LIST_SUCCESS,
  payload: data,
});

export const getExecutionListError = error => ({
  type: GET_EXECUTION_LIST_ERROR,
  payload: error.response.data.error,
});

export const connectExecutionSuccess = () => ({
  type: CONNECT_EXECUTION_SUCCESS,
});

export const connectExecutionError = error => ({
  type: CONNECT_EXECUTION_ERROR,
  payload: error.response.data.error,
});

export const disconnectExecutionSuccess = () => ({
  type: DISCONNECT_EXECUTION_SUCCESS,
});

export const disconnectExecutionError = error => ({
  type: DISCONNECT_EXECUTION_ERROR,
  payload: error.response.data.error,
});
