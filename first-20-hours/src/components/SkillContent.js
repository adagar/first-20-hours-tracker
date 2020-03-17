import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSkill, watchSkills, focusOnSkill } from '../actions';
import { compose } from 'redux';
import { useFirebaseConnect, firestoreConnect } from 'react-redux-firebase';
import M from 'materialize-css';

export class SkillContent extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    M.AutoInit();
    this.props.updateSkills();
  }

  _renderResources = resources => {
    console.log('_rendeResources', resources);
    resources = Array.isArray(resources) ? resources : [resources];
    return (
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>{resource}</li>
        ))}
      </ul>
    );
  };

  _renderSessions = sessions => (
    <ul>
      {sessions.map((session, index) => (
        <li key={index}>
          <div>
            {session.date ? new Date(session.date).toLocaleDateString() : null}
          </div>
          <div>{session.content}</div>
          <div>{session.length}</div>
        </li>
      ))}
    </ul>
  );

  _deleteSkill = skillId => {
    console.log('#### DELETETING SKILL', skillId);
    const { deleteSkill } = this.props;
    deleteSkill(skillId);
    this.props.updateSkills();
  };

  _focusSkill = evt => {
    const { dispatch, focusOnSkill } = this.props;
    const skillId = evt.target.getAttribute('data-id');
    console.log('#### FOCUS SKILL', skillId);
    focusOnSkill(skillId);
  };

  RenderSkill = (data, id) => {
    console.log('RENDERING THIS CONTENT:', data);
    const totalTime = this.convertTotalMinToString(data.sessions);

    const resources = Array.isArray(data.resources)
      ? data.resources
      : [data.resources];
    const renderedInfo = (
      <div key={id}>
        <div className='card-panel skill white row'>
          <div>
            <img src={require('../resources/clock.png')} alt='skill thumb' />
          </div>
          <div className='skill-details'>
            <div className='skill-title'>{data.skill}</div>
            <div className='skill-resources'>
              {this._renderResources(data.resources)}
            </div>
            <div className='skill-sessions'>
              <ul>{this._renderSessions(data.sessions)}</ul>
            </div>
            <div className='skill-total'>{totalTime}</div>
          </div>

          <div className='center'>
            <button
              className='sidenav-trigger skill-session-add btn-floating btn-small add-btn '
              data-target='side-session-form'
              onClick={this._focusSkill}>
              <i className='material-icons' data-id={id}>
                alarm_add
              </i>
            </button>
            <button
              className='skill-delete btn-floating btn-small delete-btn'
              onClick={() => {
                this._deleteSkill(id);
              }}>
              <i className='material-icons' data-id={id}>
                delete_outline
              </i>
            </button>
          </div>
        </div>
      </div>
    );
    console.log('RENDERED CONTENT:', renderedInfo);
    return renderedInfo;
  };

  // Convert minutes to total time
  convertTotalMinToString = sessions => {
    // console.log('### SESSIONS', sessions);
    if (sessions && sessions.length) {
      let sumMin = sessions.reduce((sum, session) => {
        let sessionLength = parseInt(session.length)
          ? parseInt(session.length)
          : 0;
        return sum + sessionLength;
      }, 0);
      return `${Math.floor(sumMin / 60)} hours and ${sumMin % 60} minutes`;
    } else {
      return 'Get started!';
    }
  };

  render() {
    const { userId } = this.props;

    if (this.props.skills === null) {
      return <div>Loading...</div>;
    } else {
      const skillData = this.props.skills
        .filter(skill => skill.data.userId == userId)
        .map(skill => {
          // console.log('SKILL USER ID', skill.data.userId, userId);
          console.log('RENDERING SKILL:', skill.data, skill.id);
          return this.RenderSkill(skill.data, skill.id);
        });
      console.log('SKILL DATA RENDERED:', skillData);
      return <div>{skillData}!</div>;
    }
    return (
      <div>
        {/* {watchSkills.docChanges().map(change => {
          return RenderSkill(change.doc.data(), change.doc.id);
        })} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    userId: state.auth.user.uid,
    mySkills: state.skills.mySkills
  };
};

const mapDispatchToProps = dispatch => {
  return {
    watchSkills: () => dispatch(watchSkills()),
    deleteSkill: skillId => dispatch(deleteSkill(skillId)),
    focusOnSkill: skillId => dispatch(focusOnSkill(skillId))
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  SkillContent
);
