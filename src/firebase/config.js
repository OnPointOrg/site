import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCikY7FxY0XE0hPeSwrpcAgmj61H8RshyY",
    authDomain: "onpointnewsorg.firebaseapp.com",
    databaseURL: "https://onpointnewsorg.firebaseio.com",
    projectId: "onpointnewsorg",
    storageBucket: "onpointnewsorg.appspot.com",
    messagingSenderId: "65120918931",
    appId: "1:65120918931:web:ae558371d2cc82efc21c66",
    measurementId: "G-4MCLR7Y6CV"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };