import { myFirebase } from '../firebase/firebase';

const db = myFirebase.firestore();

// Add Skills
export const ADD_SKILL_REQUEST = 'ADD_SKILL_REQUEST';
export const ADD_SKILL_SUCCESS = 'ADD_SKILL_SUCCESS';
export const ADD_SKILL_FAILURE = 'ADD_SKILL_FAILURE';

// TODO Create action functions for creating skills and sessions
// example
const requestAddSkill = (skill, resources) => {
  return {
    type: ADD_SKILL_REQUEST
  };
};

const newSkillError = () => {
  return {
    type: ADD_SKILL_FAILURE
  };
};

const receiveNewSkill = () => {
  return {
    type: ADD_SKILL_SUCCESS
  };
};

// Thunk Functions
export const addNewSkill = (skill, resources) => dispatch => {
  dispatch(requestAddSkill());

  const newSkill = { skill, resources, sessions: [] };
  console.log('#### NEW SKILL', newSkill);

  db.collection('skill')
    .add(newSkill)
    .then(dispatch(receiveNewSkill()))
    .catch(err => {
      dispatch(newSkillError());
    });
};
