import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSession } from '../actions';
import M from 'materialize-css';
import { TextField } from '@material-ui/core';

class AddSession extends Component {
  constructor(props) {
    super(props);

    this.sideNavRef = React.createRef();

    this.state = { content: '', length: 0 };
  }

  _handleSessionSubjectChange = ({ target }) => {
    this.setState({ content: target.value });
  };

  _handleSessionTimeChange = ({ target }) => {
    this.setState({ length: target.value });
  };

  _toggleSideNav = () => {
    const sideNavInstance = M.Sidenav.getInstance(this.sideNavRef.current);
    sideNavInstance.close();
  };

  _handleSubmit = evt => {
    evt.preventDefault();

    console.log('#### SUBMITTING NEW SKILL');

    const { dispatch, focusSkill } = this.props;
    const { content, length } = this.state;
    const date = Date.now();
    const newSession = { content, length, date };

    dispatch(addSession(focusSkill, newSession));
    this._toggleSideNav();
    this.props.updateSkills();
  };

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div
        id='side-session-form'
        className='sidenav side-form'
        ref={this.sideNavRef}>
        <form
          className='add-session container section'
          onSubmit={this._handleSubmit}>
          <h6 className='center'>New Session</h6>
          <div className='divider'></div>
          <TextField
            label='Today I practiced:'
            id='practice-content'
            type='text'
            className='validate'
            onChange={this._handleSessionSubjectChange}
          />
          <TextField
            id='practice-time'
            label='Time Practicing:'
            type='number'
            className='validate'
            helperText='Minutes'
            onChange={this._handleSessionTimeChange}
          />
          <div className='input-field center'>
            <button
              type='submit'
              className='btn-small'
              onSubmit={this.handleSubmit}>
              Keep Growing!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    focusSkill: state.skills.skillId
  };
};

export default connect(mapStateToProps)(AddSession);
