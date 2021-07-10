export const isDev = process.env.NODE_ENV === 'development';

export const FETCHING_STATE = {
  FETCHING: 'FETCHING',
  LOADED: 'LOADED',
  UPDATED: 'UPDATED',
  ERROR: 'ERROR',
};

const url = 'https://api.covid19api.com/';

export const getBaseUrl = () => url;
