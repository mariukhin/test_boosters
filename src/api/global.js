import API from 'Services/API';
import { getOrdersListSuccess, getOrdersListError } from 'Actions/global';

export const getGlobalStatistics = ({ dateFrom, dateTo }) => {
  return dispatch => {
    const url = '/world';

    API()
      .get(url)
      .then(res => {
        dispatch(getOrdersListSuccess(res));
      })
      .catch(err => {
        dispatch(getOrdersListError(err));
      });
  };
};
