import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAqemHaapbBuIQ-GIejylSeDd6cB_AWOVc",
  authDomain: "goalcoach-8cf6d.firebaseapp.com",
  databaseURL: "https://goalcoach-8cf6d.firebaseio.com",
  projectId: "goalcoach-8cf6d",
  storageBucket: "goalcoach-8cf6d.appspot.com",
  messagingSenderId: "576578432386"
};


export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
