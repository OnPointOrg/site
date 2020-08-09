import React from "react";
import { useState, state, setState, Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  Heading,
  Text,
  Link as ChakraLink,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
  InputGroup,
  InputLeftElement,
  Icon,
  theme,
  Alert,
  AlertIcon
} from "@chakra-ui/core";

import DarkModeLightModeButton from "../components/DarkModeLightModeButton";

import * as firebase from 'firebase';
import database from '../firebase/config';
import DefaultNav from "../components/DefaultNav";
import { ThemeProvider } from "emotion-theming";

const VARIANT_COLOR = "teal";

class SignUp extends Component {

  state = {
    fullName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    signUpSuccess: "",
    redirect: <Redirect to="/signup" />
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.signUpSubmit(this.state);

    console.log("Hello There")
    // console.log(this.state);
  };

  signUpSubmit = () => {
    const email = this.state.email;
    const password = this.state.password;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/email-already-in-use') {
        this.setState({
          emailError: "This Email Is Already In Use! Please Sign In Or Use A Different Email!"
        });
        if (this.state.password.length < 8) {
          this.setState({
            passwordError: "This Password Is Too Short And/Or Weak! Please Choose A Stronger Password With At Least 8 Characters!"
          });
        } else {
          this.setState({
            passwordError: ""
          })
        }
      } else if (this.state.password.length < 8 || errorCode === 'auth/weak-password') {
        this.setState({
          passwordError: "This Password Is Too Short And/Or Weak! Please Choose A Stronger Password With At Least 8 Characters!"
        });
        if (errorCode === 'auth/email-already-in-use') {
          this.setState({
            emailError: "This Email Is Already In Use! Please Sign In Or Use A Different Email!"
          });
        } else {
          this.setState({
            emailError: ""
          })
        }
      }
    });
    this.setState({
      emailError: "",
      passwordError: "",
      // redirect: <Redirect to="/" />
    })
  }

  // redirectToHome() {
  //   if (this.state.passwordError === "" && this.state.emailError === "") {
  //     this.setState({
  //       redirect: <Redirect to="/" />
  //     })
  //   }
  // }

// toastOnClick = () => {
//   toast({
//     title: "Account created.",
//     description: "We've created your account for you.",
//     status: "success",
//     duration: 2000,
//     isClosable: true,
//   })
// }

// writeUserData = () => {
//   //const userRef = database.ref("users");
//   database
//     .ref("users")
//     .orderByChild("email")
//     .equalTo(this.state.email)
//     .once("value", (snap) => {
//       if (snap.exists()) {
//         console.log(snap.val());
//         console.log("Email Already Exists");
//         this.setState({
//           emailError: "This Email Already Exists! Choose Another Or Login",
//         });

//         if (this.state.password.length < 8) {
//           this.setState({
//             passwordError:
//               "Your Password Is Too Short! Minimum Password Length Is 8",
//           });
//           console.log("Password Error Has Ocurred");
//         } else {
//           this.setState({
//             passwordError: "",
//           });
//         }
//       } else if (this.state.email.length === 0) {
//         this.setState({ emailError: "Please Enter An Email!" });
//         if (this.state.password.length < 8) {
//           this.setState({
//             passwordError:
//               "Your Password Is Too Short! Minimum Password Length Is 8",
//           });
//         } else {
//           this.setState({
//             passwordError: "",
//           });
//         }
//       } else {
//         this.setState({
//           emailError: "",
//         });
//         console.log(" ############# Inside else ##############");
//         if (this.state.password.length < 8) {
//           this.setState({
//             passwordError:
//               "Your Password Is Too Short! Minimum Password Length Is 8",
//           });
//           console.log("Password Error Has Ocurred");
//         } else {
//           this.setState({
//             passwordError: "",
//           });
//           database
//             .ref("users/" + Math.floor(Math.random() * 1001))
//             .set({
//               email: this.state.email,
//               password: this.state.password,
//               firstName: this.state.fullName.split(' ')[0],
//               lastName: this.state.fullName.split(' ')[1],
//               fullName: this.state.fullName,
//               isLoggedIn: true
//             });
//           this.setState({
//             signUpSuccess: "Account Created Successfully!",
//             redirect: <Redirect to="/" />
//           });
//         }
//       }
//     });
// }
render() {
  return (
    <ThemeProvider theme={theme}>
      <DefaultNav />
      <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
        {/* <Box
          borderWidth={1}
          px={4}
          width="full"
          maxWidth="500px"
          borderRadius={4}
          textAlign="center"
          boxShadow="lg"
        > */}
          <Box>
            <Box textAlign="center">
              <Text>Sign Up</Text>
              <Heading>Start Your Journey</Heading>
              <Heading>@ Onpoint</Heading>
            </Box>
            <Box my={8} textAlign="left">
              <form onSubmit={this.handleSubmit}>
                <FormControl isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <InputGroup>
                    <InputLeftElement children={<Icon name="view" />} />
                    <Input onChange={this.handleChange} id="fullName" type="text" placeholder="John Doe" value={this.state.fullName} />
                  </InputGroup>
                  <Text fontSize="xs">{this.state.error}</Text>
                </FormControl>

                <FormControl isRequired mt={4}>
                  <FormLabel>Email</FormLabel>
                  <InputGroup>
                    <InputLeftElement children={<Icon name="email" />} />
                    <Input onChange={this.handleChange} id="email" type="email" placeholder="john@doe.org" value={this.state.email} />
                  </InputGroup>
                  <Text fontSize="xs">{this.state.emailError}</Text>
                </FormControl>
                <FormControl isRequired mt={4}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <InputLeftElement children={<Icon name="lock" />} />
                    <Input onChange={this.handleChange} id="password" type="password" placeholder="notpassword123" value={this.state.password} />
                  </InputGroup>
                  <Text fontSize="xs">{this.state.passwordError}</Text>
                </FormControl>

                <Stack isInline justifyContent="space-between" mt={4}>
                </Stack>

                <Button
                  type="submit"
                  variantColor={VARIANT_COLOR}
                  width="full"
                  mt={4}
                >
                  Sign Up
                </Button>
                <Text fontSize="xs">{this.state.signUpSuccess}</Text>
                <Text fontSize="xs">{this.state.redirect}</Text>


                <Box mt={1}>
                  Already Have An Account?{" "}
                  <ChakraLink color={`${VARIANT_COLOR}.500`}>
                    <Link to="/signin">Sign In Here.</Link>
                  </ChakraLink>
                </Box>
              </form>
            </Box>
          </Box>
        {/* </Box> */}
      </Flex>
    </ThemeProvider>
  );
}
};

export default SignUp;