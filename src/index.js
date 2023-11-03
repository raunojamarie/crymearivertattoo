import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppProd from './AppProd';

const root = ReactDOM.createRoot(document.getElementById('root'));
const urlParams = new URLSearchParams(window.location.search);
const isDev = urlParams.get('dev');

root.render(
  <React.StrictMode>
    {isDev ? <App /> : <AppProd />}
  </React.StrictMode>
);
