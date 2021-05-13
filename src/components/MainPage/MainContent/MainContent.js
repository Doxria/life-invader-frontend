import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from 'react-router-dom';

import Home from './Home';
import ViewPost from './ViewPost';

const MainContent = ({ currentUser }) => {
  const history = useHistory();
  return (
    <Router history={history}>
      <section className="layout__main">
        <Switch>
          <Route exact path="/post/:id">
            <ViewPost currentUser={currentUser} />
          </Route>
          <Route path="/">
            <Home currentUser={currentUser} />
          </Route>
        </Switch>
      </section>
    </Router>
  );
};

export default MainContent;
