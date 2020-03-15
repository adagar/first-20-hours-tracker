import {
  ADD_SKILL_REQUEST,
  ADD_SKILL_SUCCESS,
  ADD_SKILL_FAILURE,
  DELETE_SKILL_REQUEST,
  DELETE_SKILL_SUCCESS,
  DELETE_SKILL_FAILURE,
  WATCH_SKILLS,
  ADD_SESSION_REQUEST,
  ADD_SESSION_SUCCESS,
  ADD_SESSION_FAILURE,
  FOCUS_SKILL
} from '../actions';

export default (
  state = {
    skills: [],
    skillId: null
  },
  action
) => {
  switch (action.type) {
    case FOCUS_SKILL:
      return {
        ...state,
        skillId: action.skillId
      };
    default:
      return state;
  }
};
