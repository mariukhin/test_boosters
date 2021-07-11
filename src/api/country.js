import API from 'Services/API';
import {
  getCountriesSuccess,
  getCountriesError,
  getCountryStatisticsSuccess,
  getCountryStatisticsError,
} from 'Actions/country';

export const getCountryStatistics = (country, dateFrom, caseName) => {
  return dispatch => {
    let url = '/live/country';

    if (country) {
      url += `/${country}`;
    }
    if (caseName) {
      url += `/status/${caseName}`;
    }
    if (dateFrom) {
      url += `/date/${dateFrom}`;
    }

    API()
      .get(url)
      .then(res => {
        dispatch(getCountryStatisticsSuccess(res));
      })
      .catch(err => {
        dispatch(getCountryStatisticsError(err));
      });
  };
};

export const getCountries = () => {
  return dispatch => {
    const url = '/countries';

    API()
      .get(url)
      .then(res => {
        dispatch(getCountriesSuccess(res));
      })
      .catch(err => {
        dispatch(getCountriesError(err));
      });
  };
};
