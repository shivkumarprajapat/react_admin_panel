import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import Layout from './components/layout/Layout'

document.title ="React DashBorad"
ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);
