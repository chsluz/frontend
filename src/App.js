import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './store/reducers/config';
import Routes from './routes';

import './App.css';

function App() {
  return (
    <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
      <Routes />
    </Provider>
  );
}

export default App;
