export const namespace = 'PORTFOLIO';
export const GET_PORTFOLIO_LIST_SUCCESS = `${namespace}/GET_PORTFOLIO_LIST_SUCCESS`;
export const GET_PORTFOLIO_LIST_ERROR = `${namespace}/GET_PORTFOLIO_LIST_ERROR`;

export const getPortfolioListSuccess = ({ data }) => ({
  type: GET_PORTFOLIO_LIST_SUCCESS,
  payload: data,
});

export const getPortfolioListError = error => ({
  type: GET_PORTFOLIO_LIST_ERROR,
  payload: error.response.data.error,
});
