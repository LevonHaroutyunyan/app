import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Favorites } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
