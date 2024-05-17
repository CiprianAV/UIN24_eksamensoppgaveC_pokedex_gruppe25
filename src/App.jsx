import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/teams" component={Teams} />
        <Route path="/type" component={Type} />
        <Route path="/pokemon" component={Pokemon} />
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
}

export default App;