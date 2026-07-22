
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Older links used hash routing (/#/products/...). Rewrite them to the real
// path before React mounts so they keep working.
if (window.location.hash.startsWith('#/')) {
  const path = window.location.hash.slice(1);
  window.history.replaceState(null, '', path);
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
