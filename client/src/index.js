import React from 'react';
import ReactDOM from 'react-dom'
import {Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import ReportBoard from "./components/report-board";
import * as serviceWorker from './serviceWorker';
import Header from "./components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import EventDetails from "./components/event-details";


ReactDOM.render(
  <React.StrictMode>
      <Router>
          <div>
              <Header/>
              <br/>
              <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/report' component={ReportBoard}/>
                <Route exact path='/events/:id' render={() => {
                    return <EventDetails/>
                }}/>
              </Switch>
          </div>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
