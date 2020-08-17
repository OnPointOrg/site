import firebase from 'firebase';
const user = firebase.auth().currentUser;

if(user != null) {
    const name = user.displayName;
    const email = user.email;
    const photoUrl = user.photoURL;
    // const emailVerified = user.emailVerified
    const uid = user.uid
} else {
    
}