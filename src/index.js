import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuickestTable from './QuickestTable';
import QuickestEntry from './QuickestEntry';

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function InitApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/en" element={<App />} />
        <Route exact path="/quickest" element={<QuickestTable />} />
        <Route exact path="/quickest-entry" element={<QuickestEntry />} />
      </Routes>
    </BrowserRouter>
  );
}

root.render(
  <React.StrictMode>
    <InitApp/>
  </React.StrictMode>
);
