import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UnistorecontextProvider from './Context/unistorecontext';

// Wrap your App component with the context provider
const rootElement = document.getElementById('root');
ReactDOM.render(
  <UnistorecontextProvider>
    <App />
  </UnistorecontextProvider>,
  rootElement
);
