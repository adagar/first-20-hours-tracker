import { myFirebase } from '../firebase/firebase';

// Add Skills
export const ADD_SKILL_REQUEST = 'ADD_SKILL_REQUEST';
export const ADD_SKILL_SUCCESS = 'ADD_SKILL_SUCCESS';
export const ADD_SKILL_FAILURE = 'ADD_SKILL_FAILURE';

// TODO Create action functions for creating skills and sessions
// example
const addSkillSuccess = (skill, resources) => {
  return {
    type: ADD_SKILL_SUCCESS,
    skill,
    resources
  };
};
