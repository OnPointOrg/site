import React from "react";
import * as firebase from "firebase";
import DefaultNav from "../components/nav/DefaultNav";
import VerifiedNav from "../components/nav/VerifiedNav";
import { Link } from "react-router-dom";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  ThemeProvider,
  CloseButton,
  Link as ChakraLink,
  Icon,
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
      <ThemeProvider>
        <DefaultNav />
        <Alert status="error" margin="30px" marginLeft="275px" width="1000px">
          <AlertIcon />
          <AlertTitle mr={2}>Uh Oh!</AlertTitle>
          <AlertDescription>
            You Are Not Signed In! Your Experience May Be Limited! Sign Up{" "}
            <Link to="/signup">
              <ChakraLink color="teal.500">
                Here <Icon name="external-link" mx="2px" />
              </ChakraLink>
            </Link>{" "}
            Sign In{" "}
            <Link to="/signin">
              <ChakraLink color="teal.500">
                Here <Icon name="external-link" mx="2px" />
              </ChakraLink>
            </Link>
          </AlertDescription>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      </ThemeProvider>
    );
  }
};

export default CheckIfUserSignedIn;
