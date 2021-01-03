import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCikY7FxY0XE0hPeSwrpcAgmj61H8RshyY',
  authDomain: 'onpointnewsorg.firebaseapp.com',
  databaseURL: 'https://onpointnewsorg.firebaseio.com',
  projectId: 'onpointnewsorg',
  storageBucket: 'onpointnewsorg.appspot.com',
  messagingSenderId: '65120918931',
  appId: '1:65120918931:web:ae558371d2cc82efc21c66',
  measurementId: 'G-4MCLR7Y6CV'
};

firebase.initializeApp(config);
firebase.analytics();

const firestoreDatabase = firebase.firestore();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, firestoreDatabase, timestamp };
export default firestoreDatabase;
