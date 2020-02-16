import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { isAuthenticated } = this.props;
    const mainHeaderContent = isAuthenticated ? (
      <i className='material-icons sidenav-trigger' data-target='side-menu'>
        menu
      </i>
    ) : (
      <div>
        <a href='/login' className='waves-effect'>
          Login
        </a>
        <a href='/register' className='waves-effect'>
          Register
        </a>
      </div>
    );
    return (
      <nav className='z-depth-0'>
        <div className='nav-wrapper container'>
          <a href='/'>First 20 Hours - Tracker</a>
          <span className='right grey-text text-darken-1'>
            {mainHeaderContent}
          </span>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(Header);
