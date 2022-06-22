import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import appController from "./application/appController";
import metronomeOptions from "./metronomeOptions";

const controller = appController(metronomeOptions);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App controller={controller} options={metronomeOptions}/>
  </React.StrictMode>
);
