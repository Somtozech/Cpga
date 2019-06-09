import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import CreateSessionPage from './views/createSession';
import SessionPage from './views/Session';
import Sessions from './views/Sessions';
import Compute from './views/Compute';

function AppRouter(props) {
  return (
    <Router history={props.history}>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={CreateSessionPage} />
          <Route exact path="/sessions" component={Sessions} />
          <Route
            exact
            path="/session/:session/:regNo/compute"
            component={Compute}
          />
          <Route path="/session/:sessionId" component={SessionPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
