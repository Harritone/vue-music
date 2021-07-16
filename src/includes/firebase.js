import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// eslint-disable-next-line no-var
var firebaseConfig = {
  apiKey: 'AIzaSyAQYnEyT0z_MVkcJJzNu7oZLx-dqD385n8',
  authDomain: 'idnilov-test.firebaseapp.com',
  databaseURL: 'https://idnilov-test.firebaseio.com',
  projectId: 'idnilov-test',
  storageBucket: 'idnilov-test.appspot.com',
  messagingSenderId: '515707218936',
  appId: '1:515707218936:web:c1230b607ff927e82d440d',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

// eslint-disable-next-line object-curly-newline
export {
  auth,
  db,
  usersCollection,
  storage,
  songsCollection,
  commentsCollection,
};
