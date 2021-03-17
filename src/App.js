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
import { SignInAndSignUpPage } from './pages/signin-signup/signin-signup-component';
import { auth } from './firebase/firebase-utils';

import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/shop/hats' component={HatsPage} />
          <Route exact path='/shop/jackets' component={JacketsPage} />
          <Route exact path='/shop/sneakers' component={SneakersPage} />
          <Route exact path='/shop/womens' component={WomenPage} />
          <Route exact path='/shop/mens' component={MenPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
