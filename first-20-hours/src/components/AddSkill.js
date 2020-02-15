import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { withStyles, mergeClasses } from '@material-ui/styles';

const styles = () => ({
  btnFloating: {
    padding: '25px 0'
  }
});
class AddSkill extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.btnFloating}>
        <div className='center'>
          <a
            className='btn-floating btn-small add-btn sidenav-trigger'
            data-target='side-form'>
            <i className='material-icons'>note_add</i>
          </a>
        </div>

        <div id='side-form' className='sidenav side-form'>
          <form className='add-skill container section'>
            <h6 className='center'>New Skill</h6>
            <div className='divider'></div>
            <TextField
              label='I want to learn:'
              placeholder='e.g. Drawing'
              id='skill-content'
              type='text'
              className='validate'
              multiline
            />
            <TextField
              placeholder='e.g. Course, Video, Book'
              id='skill-resource'
              type='text'
              className='validate'
              placeholder='e.g. Class, book, video'
              label='Resources:'
              multiline
            />
            <div className='input-field center'>
              <button className='btn-small'>Start Learning!</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AddSkill);
