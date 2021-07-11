export const namespace = 'GLOBAL';
export const GET_GLOBAL_STATISTICS_SUCCESS = `${namespace}/GET_GLOBAL_STATISTICS_SUCCESS`;
export const GET_GLOBAL_STATISTICS_ERROR = `${namespace}/GET_GLOBAL_STATISTICS_ERROR`;
export const SET_FILTERS = `${namespace}/SET_FILTERS`;

export const getGlobalStatisticsSuccess = ({ data }) => ({
  type: GET_GLOBAL_STATISTICS_SUCCESS,
  payload: data,
});

export const getGlobalStatisticsError = error => ({
  type: GET_GLOBAL_STATISTICS_ERROR,
  payload: error.response.data.error,
});

export const setFilters = payload => ({
  type: SET_FILTERS,
  payload,
});
