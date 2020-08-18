import React from "react";
import * as firebase from "firebase";
import DefaultNav from "../components/DefaultNav";
import VerifiedNav from "../components/VerifiedNav";

import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    ThemeProvider,
    CloseButton
} from "@chakra-ui/core";

const CheckIfUserSignedIn = () => {
    const user = firebase.auth().currentUser;
    if (user) {
        console.log("The User Is Logged In.");
        console.log(user);
        return <VerifiedNav />;
    } else {
        console.log("The User Is Not Logged In");
        return (
            <ThemeProvider >
                <DefaultNav />
                <Alert status="error" margin="30px" marginLeft="275px" width="1000px">
                    <AlertIcon />
                    <AlertTitle mr={2}>Uh Oh!</AlertTitle>
                    <AlertDescription>You Were Unable To Login! Try Again, Or Try Again Later. If The Problem Persists Contact Support</AlertDescription>
                    <CloseButton position="absolute" right="8px" top="8px" />
                </Alert>
            </ThemeProvider>
        )
    }
};

export default CheckIfUserSignedIn;
