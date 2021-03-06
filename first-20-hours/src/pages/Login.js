import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../actions';
import { withStyles } from '@material-ui/styles';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const styles = () => ({
  paper: {
    marginTop: 100,
    display: 'flex',
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#f50057'
  },
  form: {
    marginTop: 1
  },
  errorText: {
    color: '#f50057',
    marginBottom: 5,
    textAlign: 'center'
  },
  submit: {
    backgroundColor: '#666666',
    color: 'white',
    letterSpacing: '1px',
    fontSize: '15px',
    '&:hover': {
      backgroundColor: 'white',
      color: '#666666'
    }
  }
});

export class Login extends Component {
  state = { email: '', password: '' };

  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  };

  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  };

  handleSubmit = evt => {
    const { dispatch } = this.props;
    const { email, password } = this.state;

    evt.preventDefault();
    evt.stopPropagation();

    console.log(dispatch, this.props);
    dispatch(loginUser(email, password));
  };

  render() {
    const { classes, loginError, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to='/' />;
    } else {
      return (
        <Container component='main' maxWidth='xs'>
          <Paper className={classes.paper}>
            <form className={classes.root} onSubmit={this.handleSubmit}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component='h1' variant='h5'>
                Sign in
              </Typography>
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                onChange={this.handleEmailChange}
              />
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                id='password'
                label='Password'
                name='password'
                type='password'
                onChange={this.handlePasswordChange}
              />
              {loginError && (
                <Typography component='p' className={classes.errorText}>
                  Incorrect email or password.
                </Typography>
              )}
              <Button
                type='submit'
                fullWidth
                variant='contained'
                className={classes.submit}
                onSubmit={this.handleSubmit}>
                Sign in
              </Button>
            </form>
          </Paper>
        </Container>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default withStyles(styles)(connect(mapStateToProps)(Login));
