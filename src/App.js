import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Homepage } from './pages/homepage/homepage-component';
import { HatsPage } from './pages/hatspage/hatspage-component';

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
