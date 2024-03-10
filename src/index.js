import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UnistorecontextProvider from './Context/unistorecontext';

// Wrap your App component with the context provider
//const rootElement = document.getElementById('root');
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UnistorecontextProvider>
    <App />
  </UnistorecontextProvider>
 
);

