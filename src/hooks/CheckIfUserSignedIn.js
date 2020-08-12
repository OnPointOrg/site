import React from "react";
import * as firebase from "firebase";
import DefaultNav from "../components/DefaultNav";
import VerifiedNav from "../components/VerifiedNav";

const checkIfUserSignedIn = () => {
    const user = firebase.auth().currentUser;
    if (user) {
        console.log("The User Is Logged In.");
        console.log(user);
        return <VerifiedNav />;
    } else {
        console.log("The User Is Not Logged In");
        return <DefaultNav />;
    }
};

export default checkIfUserSignedIn;
