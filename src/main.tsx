import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, WrappedApp } from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);
