import React from 'react';
import App from './components/App';
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';

const root = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
