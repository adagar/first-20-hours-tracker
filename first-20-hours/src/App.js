import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Header from './components/Header';

import './App.css';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className='App'>
      <Header />
      <SideNav />
    </div>
  );
}

export default App;
