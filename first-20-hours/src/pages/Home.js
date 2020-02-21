import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import SkillContent from '../components/SkillContent';
import AddSkill from '../components/AddSkill';

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
        <SkillContent />
        <AddSkill />
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

export default connect(mapStateToProps)(Home);
