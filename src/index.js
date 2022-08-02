import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import metronomeController from "./controller/metronomeController";
import metronomeOptions from "./metronomeOptions";
import appPreset from "./application/preset/appPreset";


const controller = metronomeController(metronomeOptions);
const root = ReactDOM.createRoot(document.getElementById('root'));
const preset = appPreset();

root.render(
  <React.StrictMode>
    <App controller={controller} options={metronomeOptions} preset={preset}/>
  </React.StrictMode>
);
