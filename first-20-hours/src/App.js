import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import Header from './components/Header';
import SideNav from './components/SideNav';

import ProtectedHome from './pages/ProtectedHome';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

// function App() {
//   return (
//     <div className='App'>
//       <Header />
//       <SideNav />
//     </div>
//   );
// }

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <Home
        exact
        path='/'
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);
