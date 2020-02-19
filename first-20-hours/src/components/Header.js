import React, { Component } from 'react';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = () => ({
  authLink: {
    float: 'left',
    padding: 20,
    display: 'block',
    flexDirection: 'column',
    justifyContent: 'center'
  }
});
class Header extends Component {
  render() {
    const { classes, isAuthenticated } = this.props;
    const mainHeaderContent = isAuthenticated ? (
      <i className='material-icons sidenav-trigger' data-target='side-menu'>
        menu
      </i>
    ) : (
      <Typography>
        <Link href='/login' className={classes.authLink}>
          Login
        </Link>
        <Link href='/register' className={classes.authLink}>
          Register
        </Link>
      </Typography>
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

export default withStyles(styles)(connect(mapStateToProps)(Header));
