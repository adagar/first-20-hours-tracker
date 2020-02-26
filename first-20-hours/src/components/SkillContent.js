import React, { Component } from 'react';
import { connect } from 'react-redux';
import { watchSkills } from '../actions';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import M from 'materialize-css';

export class SkillContent extends Component {
  constructor() {
    super();
    this.state = { skills: null };
  }

  componentDidMount() {
    M.AutoInit();
    const { watchSkills, isAuthenticated } = this.props;
    this.asyncSkills = watchSkills().then(extData => {
      console.log('LOADED!', extData);
      this.asyncSkills = null;
      this.setState({ skills: extData });
    });
  }

  updateSkills = () => {
    console.log('UPDATE MY SKILLS!');
  };

  render() {
    if (this.state.skills === null) {
      return <div>Loading...</div>;
    } else {
      const skillData = this.state.skills.map(skill => {
        console.log('RENDERING SKILL:', skill.data, skill.id);
        return RenderSkill(skill.data, skill.id);
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

const _renderResources = resources => {
  console.log('_rendeResources', resources);
  resources = Array.isArray(resources) ? resources : [resources];
  return (
    <ul>
      {resources.map(resource => (
        <li>{resource}</li>
      ))}
    </ul>
  );
};

const _renderSessions = sessions => (
  <ul>
    {sessions.map(session => (
      <li>
        <div>
          {session.date ? new Date(session.date).toLocaleDateString() : null}
        </div>
        <div>{session.content}</div>
        <div>{session.length}</div>
      </li>
    ))}
  </ul>
);

const RenderSkill = (data, id) => {
  console.log('RENDERING THIS CONTENT:', data);
  const totalTime = convertTotalMinToString(data.sessions);

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
            {_renderResources(data.resources)}
          </div>
          <div className='skill-sessions'>
            <ul>{_renderSessions(data.sessions)}</ul>
          </div>
          <div className='skill-total'>{totalTime}</div>
        </div>

        <div className='center'>
          <a
            className='sidenav-trigger skill-session-add btn-floating btn-small add-btn '
            data-target='side-session-form'>
            <i className='material-icons' data-id={id}>
              alarm_add
            </i>
          </a>
          <a className='skill-delete btn-floating btn-small delete-btn '>
            <i className='material-icons' data-id={id}>
              delete_outline
            </i>
          </a>
        </div>
      </div>
    </div>
  );
  console.log('RENDERED CONTENT:', renderedInfo);
  return renderedInfo;
};

// Convert minutes to total time
const convertTotalMinToString = sessions => {
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

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    watchSkills: () => dispatch(watchSkills())
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  SkillContent
);
