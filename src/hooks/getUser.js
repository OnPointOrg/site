import { adminauth } from '../firebase/admin';

export const getUser = async uid => {
    adminauth
        .getUser(uid)
        .then(userRecord => {
            console.log(userRecord.toJSON());
        })
        .catch(error => {
            console.log(error);
        });
};
