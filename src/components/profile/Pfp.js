import { projectStorage } from '../../firebase';
import firebase from 'firebase';

export const getRandomColor = () => {
   var letters = '0123456789ABCDEF';
   var color = '#';
   for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
};

const getInitials = (name) => {
   let initials;
   const nameSplit = name.split(' ');
   const nameLength = nameSplit.length;
   if (nameLength > 1) {
      initials =
         nameSplit[0].substring(0, 1) +
         nameSplit[nameLength - 1].substring(0, 1);
   } else if (nameLength === 1) {
      initials = nameSplit[0].substring(0, 1);
   } else return;

   return initials.toUpperCase();
};

export const createImageFromInitials = async (size, name, color) => {
   let pfpUrl = '';
   if (name == null) return;
   name = getInitials(name);

   const canvas = document.createElement('canvas');
   const context = canvas.getContext('2d');
   canvas.width = canvas.height = size;

   context.fillStyle = '#ffffff';
   context.fillRect(0, 0, size, size);

   context.fillStyle = `${color}50`;
   context.fillRect(0, 0, size, size);

   context.fillStyle = color;
   context.textBaseline = 'middle';
   context.textAlign = 'center';
   context.font = `${size / 2}px Roboto`;
   context.fillText(name, size / 2, size / 2);

   const storageRef = projectStorage.ref(`users/` + name);
   await storageRef
      .putString(canvas.toDataURL(), 'data_url')
      .then(async (snapshot) => {
         console.log(snapshot);
         console.log('Uploaded');
         await storageRef.getDownloadURL().then((url) => {
            console.log(url);
            pfpUrl = url;
            console.log(firebase.auth().currentUser);
            console.log(pfpUrl);
            console.log(typeof pfpUrl);
            firebase
               .auth()
               .currentUser.updateProfile({
                  photoURL: pfpUrl
               })
               .then(() => {
                  console.log(firebase.auth().currentUser.photoURL);
               });
         });
      });
};
