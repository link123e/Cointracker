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
    <Router basename={process.env.PUBLIC_URL}>
    <Switch>
        <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
