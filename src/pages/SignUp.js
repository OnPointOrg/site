import React, { Profiler } from "react";
import { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  InputGroup,
  InputLeftElement,
  Icon,
  theme,
  ThemeProvider,
} from "@chakra-ui/core";

import * as firebase from "firebase";
import DefaultNav from "../components/DefaultNav";
// import { ThemeProvider } from "emotion-theming";

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
    redirect: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.signUpSubmit(this.state);

    console.log("Hello There");
    // console.log(this.state);
  };

  // setUserInfo = () => {
  //   const user = firebase.auth().currentUser;

  //   user.updateProfile({
  //     displayName: "Jane Q. User",
  //     photoURL: "https://example.com/jane-q-user/profile.jpg"
  //   }).then(function () {
  //     // Update successful.
  //   }).catch(function (error) {
  //     // An error happened.
  //   });
  // }

  signUpSubmit = () => {
    const email = this.state.email;
    const password = this.state.password;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        return result.user.updateProfile({
          displayName: this.state.fullName
        })
        console.log("Full Name " + result.displayName)
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        // const errorMessage = error.message;
        if (errorCode === "auth/email-already-in-use") {
          this.setState({
            emailError:
              "This Email Is Already In Use! Please Sign In Or Use A Different Email!",
            signUpSuccess: "",
          });
          if (this.state.password.length < 8) {
            this.setState({
              passwordError:
                "This Password Is Too Short And/Or Weak! Please Choose A Stronger Password With At Least 8 Characters!",
              signUpSuccess: "",
            });
          } else {
            this.setState({
              passwordError: "",
              signUpSuccess: "",
            });
          }
        } else if (
          this.state.password.length < 8 ||
          errorCode === "auth/weak-password"
        ) {
          this.setState({
            passwordError:
              "This Password Is Too Short And/Or Weak! Please Choose A Stronger Password With At Least 8 Characters!",
            signUpSuccess: "",
          });
          if (errorCode === "auth/email-already-in-use") {
            this.setState({
              emailError:
                "This Email Is Already In Use! Please Sign In Or Use A Different Email!",
              signUpSuccess: "",
            });
          } else {
            this.setState({
              emailError: "",
              signUpSuccess: "",
            });
          }
        }
      });
    const { history } = this.props;
    this.setState({
      emailError: "",
      passwordError: "",
      signUpSuccess: "Account Created Successfully! You Are Now Logged In!",
      redirect: setTimeout(() => {
        history.push("/");
      }, 2000),
    });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <DefaultNav />
        <Flex
          minHeight="100vh"
          width="full"
          align="center"
          justifyContent="center"
        >
          <Box>
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
                      <Input
                        onChange={this.handleChange}
                        id="fullName"
                        type="text"
                        placeholder="John Doe"
                        value={this.state.fullName}
                      />
                    </InputGroup>
                    <Text fontSize="xs">{this.state.error}</Text>
                  </FormControl>

                  <FormControl isRequired mt={4}>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<Icon name="email" />} />
                      <Input
                        onChange={this.handleChange}
                        id="email"
                        type="email"
                        placeholder="john@doe.org"
                        value={this.state.email}
                      />
                    </InputGroup>
                    <Text fontSize="xs">{this.state.emailError}</Text>
                  </FormControl>
                  <FormControl isRequired mt={4}>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<Icon name="lock" />} />
                      <Input
                        onChange={this.handleChange}
                        id="password"
                        type="password"
                        placeholder="notpassword123"
                        value={this.state.password}
                      />
                    </InputGroup>
                    <Text fontSize="xs">{this.state.passwordError}</Text>
                  </FormControl>

                  <Stack isInline justifyContent="space-between" mt={4}></Stack>

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
          </Box>
        </Flex>
      </ThemeProvider>
    );
  }
}

export default SignUp;
