import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Tags from './views/Tags';
import NoMatch from './views/NotFound';
import Statistics from './views/Statistics';
import Money from './views/Money';
import {EditTag} from './views/EditTag';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/money"/>
        <Route exact path="/tags">
          <Tags/>
        </Route>
        <Route exact path="/tags/:id">
          <EditTag />
        </Route>
        <Route exact path="/money">
          <Money/>
        </Route>
        <Route exact path="/statistics">
          <Statistics/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;