import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style/main.css'
import AppRouter from './Routers/AppRouter';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
