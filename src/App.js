import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Homepage } from './pages/homepage/homepage-component';
import { HatsPage } from './pages/hatspage/hatspage-component';
import { JacketsPage } from './pages/jacketspage/jacketspage-component';
import { SneakersPage } from './pages/sneakerspage/sneakerspage-component';
import { MenPage } from './pages/menpage/menpage-component';
import { WomenPage } from './pages/womenpage/womenpage-component';
import { ShopPage } from './pages/shoppage/shop-component';
import { Header } from './components/header/header-component';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/shop/hats' component={HatsPage} />
        <Route exact path='/shop/jackets' component={JacketsPage} />
        <Route exact path='/shop/sneakers' component={SneakersPage} />
        <Route exact path='/shop/womens' component={WomenPage} />
        <Route exact path='/shop/mens' component={MenPage} />
      </Switch>
    </div>
  );
}

export default App;
