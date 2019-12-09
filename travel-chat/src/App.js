import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import Register from './components/Register'
import Login from './components/Login'

import * as ROUTES from './constants/routes'
import firebase, { auth } from 'firebase';

import './App.css';

import './App.css';

class AppRouter extends Component {
  state = {
    currentUser: null
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user
        });
      }
    });
  }

  logOutUser = () => {
    firebase.auth().signOut()
      .then(window.location = '/')
  }

  render() {
    return (
      <Router>
        <div className="App" >
          <NavBar />
          <h1>Hello user</h1>
          <Switch>
            <Route exact path={ROUTES.HOME} render={() => <div>home</div>} />
            <Route exact path={ROUTES.LOGIN} component={Login} />
            <Route exact path={ROUTES.REGISTER} component={Register} />
            <Route exact path={ROUTES.CITIES} render={() => <div>cities</div>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
