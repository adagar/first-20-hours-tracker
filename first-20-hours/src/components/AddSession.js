import React, { Component } from 'react';

export default class AddSession extends Component {
  render() {
    return (
      <div id='side-session-form' className='sidenav side-form'>
        <form className='add-session container section'>
          <h6>New Session</h6>
          <div className='divider'></div>
          <div>
            <div className='input-field'>
              <input id='practice-content' type='text' className='validate' />
              <label>Today I practiced:</label>
            </div>
            <div className='input-field'>
              <input id='practice-time' type='number' className='validate' />
              <label>Time Practicing:</label>
              <span className='helper-text'>Minutes</span>
            </div>
          </div>
          <div className='input-field center'>
            <button className='btn-small'>Practice!</button>
          </div>
        </form>
      </div>
    );
  }
}
