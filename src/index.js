import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import metronomeController from "./controller/metronomeController";
import metronomeOptions from "./metronomeOptions";


const controller = metronomeController(metronomeOptions);
const root = ReactDOM.createRoot(document.getElementById('root'));
const preset = {};

root.render(
  <React.StrictMode>
    <App controller={controller} options={metronomeOptions} preset={preset}/>
  </React.StrictMode>
);
