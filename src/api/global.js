import API from 'Services/API';
import {
  getGlobalStatisticsSuccess,
  getGlobalStatisticsError,
} from 'Actions/global';

export const getGlobalStatistics = (dateFrom, dateTo) => {
  return dispatch => {
    let url = '/world';

    if (dateFrom) {
      url += `?from=${dateFrom}&to=${dateTo}`;
    }

    API()
      .get(url)
      .then(res => {
        dispatch(getGlobalStatisticsSuccess(res));
      })
      .catch(err => {
        dispatch(getGlobalStatisticsError(err));
      });
  };
};
