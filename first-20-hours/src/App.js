import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import Header from './components/Header';
import SideNav from './components/SideNav';

import ProtectedHome from './pages/ProtectedHome';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
      <Header />
      <SideNav />
    </div>
  );
}

export default App;
