import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import Header from '../components/Header';
import SideNav from '../components/SideNav';

export class Home extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  render() {
    const { isLoggingOut, logoutError } = this.props;

    return (
      <div className='App'>
        <Header />
        <SideNav />
        <button onClick={this.handleLogout}>Logout</button>
        {isLoggingOut && <p>Logging out...</p>}
        {logoutError && <p>Error logging out!</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
