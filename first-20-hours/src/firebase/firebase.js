import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDNMSFYz5NnAkcM9JYJhCcw7Bi-jpYmPow',
  authDomain: 'hour-tracker-f3737.firebaseapp.com',
  databaseURL: 'https://hour-tracker-f3737.firebaseio.com',
  projectId: 'hour-tracker-f3737',
  storageBucket: 'hour-tracker-f3737.appspot.com',
  messagingSenderId: '1025199454616',
  appId: '1:1025199454616:web:94d5b34657ea7c73dd93ed',
  measurementId: 'G-JGR67TNSQP'
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
