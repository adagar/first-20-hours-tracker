import React, { Component } from 'react';
import M from 'materialize-css';

export default class SideNav extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <ul class='sidenav side-menu' id='side-menu'>
        <li>
          <a class='subheader'>First 20 Hours - Tracker</a>
        </li>
        <li>
          <a href='/' class='waves-effect'>
            Home
          </a>
        </li>
        <li>
          <a href='/pages/about.php' class='waves-effect'>
            About
          </a>
        </li>
        <li>
          <div class='divider'></div>
        </li>
        <li>
          <a href='/pages/contact.php' class='waves-effect'>
            <i class='material-icons'>mail_outlines</i>contact
          </a>
        </li>
      </ul>
    );
  }
}
