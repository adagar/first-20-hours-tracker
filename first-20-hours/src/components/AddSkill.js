import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { withStyles, mergeClasses } from '@material-ui/styles';
import { addNewSkill } from '../actions';
import M from 'materialize-css';

const styles = () => ({
  btnFloating: {
    padding: '25px 0'
  }
});
class AddSkill extends Component {
  constructor(props) {
    super(props);

    this.sideNavRef = React.createRef();
    this.skillTitleRef = React.createRef();
    this.skillResourceRef = React.createRef();

    this.state = { skill: '', resources: [] };
  }

  handleSkillChange = ({ target }) => {
    this.setState({ skill: target.value });
  };

  handleResourcesChange = ({ target }) => {
    this.setState({ resources: target.value });
  };

  handleSubmit = evt => {
    console.log('### SUBMIT NEW SKILL', this.sideNavRef.current);

    evt.preventDefault();
    const { dispatch } = this.props;
    const { skill, resources } = this.state;

    dispatch(addNewSkill(skill, resources));
    this.props.updateSkills();
    this._toggleSideNav();
  };

  _toggleSideNav = () => {
    const sideNavInstance = M.Sidenav.getInstance(this.sideNavRef.current);
    sideNavInstance.close();
    console.log('####skill ttile ref:', this.skillTitleRef.current);
  };

  componentDidMount() {
    M.AutoInit();
  }

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

        <div
          id='side-form'
          className={`sidenav side-form ${classes.root}`}
          autoComplete='off'
          ref={this.sideNavRef}>
          <form
            className='add-skill container section'
            onSubmit={this.handleSubmit}>
            <h6 className='center'>New Skill</h6>
            <div className='divider'></div>
            <TextField
              label='I want to learn:'
              placeholder='e.g. Drawing'
              id='skill-content'
              type='text'
              className='validate'
              ref={this.skillTitleRef}
              onChange={this.handleSkillChange}
            />
            <TextField
              placeholder='e.g. Course, Video, Book'
              id='skill-resource'
              // type='text'
              className='validate'
              placeholder='e.g. Class, book, video'
              label='Resources:'
              ref={this.skillResourceRef}
              onChange={this.handleResourcesChange}
            />
            <div className='input-field center'>
              <button
                type='submit'
                className='btn-small'
                onSubmit={this.handleSubmit}>
                Start Learning!
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default withStyles(styles)(connect(mapStateToProps)(AddSkill));
