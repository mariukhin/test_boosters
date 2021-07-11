export const namespace = 'COUNTRY';
export const GET_COUNTRIES_SUCCESS = `${namespace}/GET_COUNTRIES_SUCCESS`;
export const GET_COUNTRIES_ERROR = `${namespace}/GET_COUNTRIES_ERROR`;
export const GET_COUNTRY_STATISTICS_SUCCESS = `${namespace}/GET_COUNTRY_STATISTICS_SUCCESS`;
export const GET_COUNTRY_STATISTICS_ERROR = `${namespace}/GET_COUNTRY_STATISTICS_ERROR`;
export const SET_FILTERS = `${namespace}/SET_FILTERS`;

export const getCountryStatisticsSuccess = ({ data }) => ({
  type: GET_COUNTRY_STATISTICS_SUCCESS,
  payload: data,
});

export const getCountryStatisticsError = error => ({
  type: GET_COUNTRY_STATISTICS_ERROR,
  payload: error.message,
});

export const getCountriesSuccess = ({ data }) => ({
  type: GET_COUNTRIES_SUCCESS,
  payload: data,
});

export const getCountriesError = error => ({
  type: GET_COUNTRIES_ERROR,
  payload: error.message,
});

export const setFilters = payload => ({
  type: SET_FILTERS,
  payload,
});
