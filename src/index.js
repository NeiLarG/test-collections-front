import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore, { history } from './store';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
