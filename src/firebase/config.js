import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB8wmB1FBLAA8gQOPVyxISPAivzfnjPWwY',
  authDomain: 'mymoney-shikulja.firebaseapp.com',
  projectId: 'mymoney-shikulja',
  storageBucket: 'mymoney-shikulja.appspot.com',
  messagingSenderId: '592983668014',
  appId: '1:592983668014:web:f1572b78081f90af8b76bf',
};

// init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
