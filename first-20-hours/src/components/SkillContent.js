import React, { Component } from 'react';
import { connect } from 'react-redux';
import { watchSkills } from '../actions';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

export class SkillContent extends Component {
  constructor() {
    super();
    this.state = { skills: null };
  }

  componentDidMount() {
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
        return RenderSkill(skill, skill.id);
        // return <div>{skill.data.skill}</div>;
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

const RenderSkill = (data, id) => {
  console.log(data);
  const resources = data.resources
    ? data.resources.map(resource => <li>{resource}</li>).join('')
    : null;
  const totalTime = convertTotalMinToString(data.sessions);
  const sessions = data.sessions
    ? data.sessions
        .map(session => {
          let date = new Date(session.date);
          return (
            <li>
              <div>{date.toLocaleDateString()}</div>
              <div>{session.content}</div>
              <div>{session.length}</div>
            </li>
          );
        })
        .join('')
    : null;

  console.log('SESSIONS', sessions);
  const renderedInfo = (
    <div key={id}>
      <div className='card-panel skill white row'>
        <div>
          <img src='/img/clock.png' alt='skill thumb' />
        </div>
        <div className='skill-details'>
          <div className='skill-title'>{data.skill}</div>
          <div className='skill-resources'>
            <ul>{resources}</ul>
          </div>
          <div className='skill-sessions'>
            <ul>{sessions}</ul>
          </div>
          <div className='skill-total'>{totalTime}</div>
        </div>

        <div className='center'>
          <a className='sidenav-trigger' data-target='side-session-form'>
            <i
              className='skill-session-add btn-floating btn-small add-btn material-icons'
              data-id={id}>
              alarm_add
            </i>
          </a>
          <a className=''>
            <i
              className='skill-delete btn-floating btn-small delete-btn material-icons'
              data-id={id}>
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
