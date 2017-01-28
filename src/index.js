import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import store from "./timeStore";
import './index.css';

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
