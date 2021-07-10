import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { isDev } from 'Utils';

import rootReducer from './rootReducer';

const appliedMiddleware = applyMiddleware(thunk, logger);

const enhancer = isDev
  ? composeWithDevTools(appliedMiddleware)
  : appliedMiddleware;

const store = createStore(rootReducer, enhancer);

const persistor = persistStore(store);

export { persistor, store };
