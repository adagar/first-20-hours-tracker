import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import AddSkill from './components/AddSkill';
import AddSession from './components/AddSession';
import Header from './components/Header';

import './App.css';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className='App'>
      <Header />
      <SideNav />
      <AddSession />
      <AddSkill />
    </div>
  );
}

export default App;
