import React, { Component } from 'react';
import M from 'materialize-css';

import { connect } from 'react-redux';
import { logoutUser } from '../actions';

class SideNav extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  render() {
    return (
      <ul className='sidenav side-menu' id='side-menu'>
        <li>
          <a className='subheader'>First 20 Hours - Tracker</a>
        </li>
        <li>
          <a href='/' className='waves-effect'>
            <i className='material-icons'>home</i>
            Home
          </a>
        </li>
        <li>
          <a href='/pages/about.php' className='waves-effect'>
            <i className='material-icons'>info</i>
            About
          </a>
        </li>
        <li>
          <div className='divider'></div>
        </li>
        <li>
          <a href='/pages/contact.php' className='waves-effect'>
            <i className='material-icons'>mail_outlines</i>contact
          </a>
        </li>
        <li>
          <a href='/' onClick={this.handleLogout} className='waves-effect'>
            <i className='material-icons'>exit_to_app</i>
            Logout
          </a>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
};

export default connect(mapStateToProps)(SideNav);
