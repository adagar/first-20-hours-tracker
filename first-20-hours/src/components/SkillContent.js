import React, { Component } from 'react';
import { connect } from 'react-redux';
import { watchSkills } from '../actions';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

export class SkillContent extends Component {
  constructor() {
    super();
    this.state = { skills: [] };
  }

  componentDidMount() {
    const { watchSkills, isAuthenticated } = this.props;
    console.log('AM I AUTHENTICATED', isAuthenticated);
    if (isAuthenticated) {
      this.updateSkills();
      console.log(watchSkills());
    }
  }

  updateSkills = async () => {
    console.log('UPDATE MY SKILLS!');
    // await ski;
  };

  render() {
    const { watchSkills, isAuthenticated } = this.props;
    const renderedSkills = watchSkills();
    console.log('RENDER', renderedSkills);
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
  const resources = data.resources
    .map(resource => `<li>${resource}</li>`)
    .join('');
  const totalTime = convertTotalMinToString(data.sessions);
  const sessions = data.sessions
    .map(session => {
      let date = new Date(session.date);
      return `<li>
        <div>${date.toLocaleDateString()}</div>
        <div>${session.content}</div>
        <div>${session.length}</div>
    </li>`;
    })
    .join('');

  return (
    <div>
      <div class="card-panel skill white row data-id='${id}'">
        <div>
          <img src='/img/clock.png' alt='skill thumb' />
        </div>
        <div class='skill-details'>
          <div class='skill-title'>${data.skill}</div>
          <div class='skill-resources'>
            <ul>${resources}</ul>
          </div>
          <div class='skill-sessions'>
            <ul>${sessions}</ul>
          </div>
          <div class='skill-total'>${totalTime}</div>
        </div>

        <div class='center'>
          <a class='sidenav-trigger' data-target='side-session-form'>
            <i
              class='skill-session-add btn-floating btn-small add-btn material-icons'
              data-id='${id}'>
              alarm_add
            </i>
          </a>
          <a class=''>
            <i
              class='skill-delete btn-floating btn-small delete-btn material-icons'
              data-id='${id}'>
              delete_outline
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

// Convert minutes to total time
const convertTotalMinToString = sessions => {
  console.log('### SESSIONS', sessions);
  if (sessions.length) {
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
