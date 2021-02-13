// import admin from 'firebase-admin';

// if (!admin.apps.length) {
//     admin.initializeApp({
//         credential: admin.credential.cert(
//             JSON.parse(
//                 Buffer.from(
//                     process.env.REACT_APP_FIREBASE_ADMIN_KEY,
//                     'base64'
//                 ).toString()
//             )
//         ),
//         databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//         storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
//     });
// }

// const adminauth = admin.auth();
// // const admindb = admin.firestore();
// export { adminauth };
