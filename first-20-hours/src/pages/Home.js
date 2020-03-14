import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser, watchSkills } from '../actions';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import SkillContent from '../components/SkillContent';
import AddSkill from '../components/AddSkill';
import AddSession from '../components/AddSession';

export class Home extends Component {
  constructor() {
    super();
    this.state = { skills: null };
  }
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  updateSkills = () => {
    console.log('UPDATE MY SKILLS!');
    const { watchSkills, isAuthenticated } = this.props;
    this.asyncSkills = watchSkills().then(extData => {
      console.log('LOADED!', extData);
      this.asyncSkills = null;
      this.setState({ skills: extData });
    });
  };
  render() {
    const { isLoggingOut, logoutError } = this.props;

    return (
      <div className='App'>
        <SideNav />
        <SkillContent
          skills={this.state.skills}
          updateSkills={this.updateSkills}
        />
        <AddSkill updateSkills={this.updateSkills} />
        <AddSession />
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

const mapDispatchToProps = dispatch => {
  return {
    watchSkills: () => dispatch(watchSkills())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
