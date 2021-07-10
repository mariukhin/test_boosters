import 'Styles/styles.css';
import '../public/index.html';

import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import { store } from 'Redux/store';
import getRoutes from 'Routes';

import { PageLoader } from 'Components';

const App = () => {
  return <App.Wrapper>{getRoutes()}</App.Wrapper>;
};

App.Wrapper = styled.div`
  background-color: var(--white);
`;

render(
  <Suspense fallback={<PageLoader />}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Suspense>,
  document.getElementById('root'),
);
