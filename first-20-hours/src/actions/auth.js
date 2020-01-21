import { myFirebase } from '../firebase/firebase';

// ACTION TYPES

// Default login/logout actions
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const VERIFY_REQUEST = 'VERIFY_REQUEST';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';

// Add Skills
export const ADD_SKILL_REQUEST = 'ADD_SKILL_REQUEST';
export const ADD_SKILL_SUCCESS = 'ADD_SKILL_SUCCESS';
export const ADD_SKILL_FAILURE = 'ADD_SKILL_FAILURE';

// Add Session
export const ADD_SESSION_REQUEST = 'ADD_SESSION_REQUEST';
export const ADD_SESSION_SUCCESS = 'ADD_SESSION_SUCCESS';
export const ADD_SESSION_FAILURE = 'ADD_SESSION_FAILURE';

// TODO What other action types do we have?

// ACTION FUNCTIONS

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  };
};

const receiveLogin = user => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

const loginError = () => {
  return {
    type: LOGIN_FAILURE
  };
};

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

const logoutError = () => {
  return {
    type: LOGOUT_FAILURE
  };
};

const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST
  };
};

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS
  };
};

// TODO Create action functions for creating skills and sessions
// example
const addSkillSuccess = (skill, resources) => {
  return {
    type: ADD_SKILL_SUCCESS,
    skill,
    resources
  };
};

// Thunk Functions
export const loginUser = (email, password) => dispatch => {};
