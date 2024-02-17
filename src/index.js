import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //厳格なモード（ワーニング出す）
  //Appコンポーネント（App.js）
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

