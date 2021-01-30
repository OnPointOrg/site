import * as firebase from 'firebase';
import admin from 'firebase-admin';
import serviceToken from './servicetoken.json';

const config = {
   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.REACT_APP_FIREBASE_APP_ID,
   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

console.log(process.env.REACT_APP_FIREBASE_ADMIN_KEY);

admin.initializeApp({
   credential: admin.credential.cert(serviceToken),
   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
});

firebase.initializeApp(config);
firebase.analytics();

const firestoreDatabase = firebase.firestore();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, firestoreDatabase, timestamp };
export default firestoreDatabase;
