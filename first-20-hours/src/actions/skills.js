import { myFirebase } from '../firebase/firebase';

const db = myFirebase.firestore();

// Add Skills
export const ADD_SKILL_REQUEST = 'ADD_SKILL_REQUEST';
export const ADD_SKILL_SUCCESS = 'ADD_SKILL_SUCCESS';
export const ADD_SKILL_FAILURE = 'ADD_SKILL_FAILURE';
export const WATCH_SKILLS = 'WATCH_SKILLS';

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

const subscribeToSkills = () => {
  return {
    type: WATCH_SKILLS
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

export const watchSkills = () => dispatch => {
  dispatch(subscribeToSkills());

  return new Promise((resolve, reject) => {
    console.log('GETTING SKILLS');
    let docCollection = [];
    db.collection('skill')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          docCollection.push({ data: doc.data(), id: doc.id });
        });
        console.log('DOC COLLECTION:', docCollection);
        resolve(docCollection);
        // if (doc.exists) {
        //   console.log('DOC EXISTS');
        //   resolve(doc);
        // }
      })
      .catch(err => {
        reject(err);
      });
  });

  // db.collection('skill').onSnapshot(snapshot => {
  //   // snapshot.docChanges().forEach(change => {
  //   //   console.log(change.doc.data(), change.doc.id);
  //   // });
  //   console.log('SNAPSHOT TIME', snapshot);
  //   return snapshot.docChanges;
  // });
};
