import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TextField, IconButton } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import { withStyles, mergeClasses } from '@material-ui/styles';
import { addNewSkill } from '../actions';
import M from 'materialize-css';

const styles = () => ({
  btnFloating: {
    padding: '25px 0'
  },
  inlineBtn: {
    padding: '25px 0px'
  }
});
class AddSkill extends Component {
  constructor(props) {
    super(props);

    this.sideNavRef = React.createRef();
    this.skillTitleRef = React.createRef();
    this.skillResourceRef = React.createRef();

    this.state = { skill: '', resources: [''] };
    console.log('#### CONSTRUCTOR', typeof this.state.resources);
  }

  handleSkillChange = ({ target }) => {
    this.setState({ skill: target.value });
  };

  handleResourcesChange = ({ target }, index) => {
    console.log('#### HANDLING RESOURCE CHANGE', target);
    this.setState(state => {
      let resources = [...state.resources];
      resources[index] = target.value;
      return { resources };
    });
    console.log(this.state.resources);
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
    const { classes, userId } = this.props;
    console.log('#### USER', userId);
    const resources = () => {
      let resourceList = [];
      resourceList.push(
        <TextField
          key={0}
          data-key={0}
          placeholder='e.g. Course, Video, Book'
          id='skill-resource-0'
          className='validate'
          placeholder='e.g. Class, book, video'
          label='Resources:'
          ref={this.skillResourceRef}
          onChange={e => this.handleResourcesChange(e, 0)}
        />
      );
      for (let i = 1; i < this.state.resources.length; i++) {
        resourceList.push(
          <TextField
            key={i}
            data-key={i}
            id={'skill-resource-' + i}
            className='validate'
            ref={this.skillResourceRef}
            onChange={e => this.handleResourcesChange(e, i)}
          />
        );
      }
      return resourceList;
    };
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
            {resources()}
            <IconButton
              aria-label='add resource'
              className={classes.inlineBtn}
              onClick={() => {
                this.setState(state => {
                  console.log('#### NEW RESOURCE', state.resources);
                  // let newResources = ...state.resources, ''
                  return { resources: [...state.resources, ''] };
                });
              }}>
              <AddCircleOutline />
            </IconButton>
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
    isAuthenticated: state.auth.isAuthenticated,
    userId: state.auth.user.uid
  };
};

export default withStyles(styles)(connect(mapStateToProps)(AddSkill));
