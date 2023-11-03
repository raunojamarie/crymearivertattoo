import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppProd from './AppProd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function InitApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AppProd />} />
        <Route exact path="dev" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

root.render(
  <React.StrictMode>
    <InitApp/>
  </React.StrictMode>
);
