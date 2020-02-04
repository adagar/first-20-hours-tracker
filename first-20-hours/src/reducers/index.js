import { combineReducers } from 'redux';
import auth from './auth';

// TODO add reducers for skills & Sessions
import skills from './skills';
import sessions from './sessions';

export default combineReducers({ auth, skills, sessions });
