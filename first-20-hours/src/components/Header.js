import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav class='z-depth-0'>
        <div class='nav-wrapper container'>
          <a href='/'>First 20 Hours - Tracker</a>
          <span class='right grey-text text-darken-1'>
            <i class='material-icons sidenav-trigger' data-target='side-menu'>
              menu
            </i>
          </span>
        </div>
      </nav>
    );
  }
}
