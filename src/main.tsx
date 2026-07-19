import React from 'react';
import ReactDOM from 'react-dom/client';
import  App from './app/App';      // ← المسار الجديد لـ App
import './assets/styles/index.css';   // ← المسار الجديد لـ CSS

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
