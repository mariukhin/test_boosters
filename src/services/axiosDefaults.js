import axios from 'axios';

import { getBaseUrl } from 'Utils/';

axios.defaults.baseURL = getBaseUrl();

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = null;
};
