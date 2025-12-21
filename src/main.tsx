import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <HashRouter >
      {/* <BrowserRouter > */}
      {/* basename="/star-smith-website" */}
        <App />
      {/* </BrowserRouter> */}
      </HashRouter>
    </HelmetProvider>
  </React.StrictMode>
);
