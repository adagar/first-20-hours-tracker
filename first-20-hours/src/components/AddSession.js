import React, { Component } from 'react';

export default class AddSession extends Component {
  render() {
    return (
      <div id='side-session-form' class='sidenav side-form'>
        <form class='add-session container section'>
          <h6>New Session</h6>
          <div class='divider'></div>
          <div>
            <div class='input-field'>
              <input id='practice-content' type='text' class='validate' />
              <label for='practice-content'>Today I practiced:</label>
            </div>
            <div class='input-field'>
              <input id='practice-time' type='number' class='validate' />
              <label for='practice-time'>Time Practicing:</label>
              <span class='helper-text'>Minutes</span>
            </div>
          </div>
          <div class='input-field center'>
            <button class='btn-small'>Practice!</button>
          </div>
        </form>
      </div>
    );
  }
}
