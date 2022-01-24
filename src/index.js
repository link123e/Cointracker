import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
  document.getElementById('root')
);
