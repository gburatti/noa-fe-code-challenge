import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';

/**
 * Since I cannot install external deps (such as Tailwing or others)
 * I defined some utility CSS classes
 */
import './style/style.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
