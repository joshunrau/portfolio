import React from 'react';

import ReactDOM from 'react-dom/client';

import { App } from './App';
import { PlaceholderPage } from './components/PlaceholderPage';

import './services/i18next';
import './styles.css';

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <React.StrictMode>{import.meta.env.PROD ? <PlaceholderPage /> : <App />}</React.StrictMode>
);
