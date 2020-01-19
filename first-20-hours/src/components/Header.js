import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav className='z-depth-0'>
        <div className='nav-wrapper container'>
          <a href='/'>First 20 Hours - Tracker</a>
          <span className='right grey-text text-darken-1'>
            <i
              className='material-icons sidenav-trigger'
              data-target='side-menu'>
              menu
            </i>
          </span>
        </div>
      </nav>
    );
  }
}
