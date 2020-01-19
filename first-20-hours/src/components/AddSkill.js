import React, { Component } from 'react';

export default class AddSkill extends Component {
  render() {
    return (
      <div>
        <div className='center'>
          <a
            className='btn-floating btn-small add-btn sidenav-trigger'
            data-target='side-form'>
            <i className='material-icons'>note_add</i>
          </a>
        </div>

        <div id='side-form' className='sidenav side-form'>
          <form className='add-skill container section'>
            <h6>New Skill</h6>
            <div className='divider'></div>
            <div className='input-field'>
              <input
                placeholder='e.g. Drawing'
                id='skill-content'
                type='text'
                className='validate'
              />
              <label>I want to learn:</label>
            </div>
            <div className='input-field'>
              <input
                placeholder='e.g. Course, Video, Book'
                id='skill-resource'
                type='text'
                className='validate'
                placeholder='e.g. Class, book, video'
              />
              <label>Resources:</label>
            </div>
            <div className='input-field center'>
              <button className='btn-small'>Start Learning!</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
