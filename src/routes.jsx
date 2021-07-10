import React, { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const GlobalStatisticsPage = lazy(() => import('Pages/GlobalStatisticsPage'));
const CountryStatisticsPage = lazy(() => import('Pages/CountryStatisticsPage'));
const AboutPage = lazy(() => import('Pages/AboutPage'));

export const routePaths = {
  globalStatistics: '/global',
  countryStatistics: '/country',
  about: '/about',
};

const getRoutes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={props => <Redirect to={routePaths.globalStatistics} />}
      />
      <Route
        exact
        path={routePaths.globalStatistics}
        render={props => <GlobalStatisticsPage {...props} />}
      />
      <Route
        exact
        path={routePaths.countryStatistics}
        render={props => <CountryStatisticsPage {...props} />}
      />
      <Route
        exact
        path={routePaths.about}
        render={props => <AboutPage {...props} />}
      />
    </Switch>
  );
};

export default getRoutes;
