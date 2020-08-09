import React from "react";
import { useState, state, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  Heading,
  Text,
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
  Link as ChakraLink
} from "@chakra-ui/core";

import DarkModeLightModeButton from "../components/DarkModeLightModeButton";

import * as firebase from "firebase";
import database from "../firebase/config";
import DefaultNav from "../components/DefaultNav";
import { ThemeProvider } from "emotion-theming";

const VARIANT_COLOR = "teal";

class SignIn extends React.Component {
  state = {
    fullName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    signUpSuccess: "",
    isLoggedIn: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.writeUserData(this.state);
  };

  // toastOnClick = () => {
  //   toast({
  //     title: "Account created.",
  //     description: "We've created your account for you.",
  //     status: "success",
  //     duration: 2000,
  //     isClosable: true,
  //   })
  // }

  writeUserData = () => {
    //const userRef = database.ref("users");
    database
      .ref("users")
      .orderByChild("email")
      .equalTo(this.state.email)
      .once("value", (snap) => {
        if (snap.exists()) {
          console.log(snap.val());
          console.log("Email Already Exists");
          this.setState({
            emailError: "This Email Already Exists! Choose Another Or Login",
          });

          if (this.state.password.length < 8) {
            this.setState({
              passwordError:
                "Your Password Is Too Short! Minimum Password Length Is 8",
            });
            console.log("Password Error Has Ocurred");
          } else {
            this.setState({
              passwordError: "",
            });
          }
        } else if (this.state.email.length === 0) {
          this.setState({ emailError: "Please Enter An Email!" });
          if (this.state.password.length < 8) {
            this.setState({
              passwordError:
                "Your Password Is Too Short! Minimum Password Length Is 8",
            });
          } else {
            this.setState({
              passwordError: "",
            });
          }
        } else {
          this.setState({
            emailError: "",
          });
          console.log(" ############# Inside else ##############");
          if (this.state.password.length < 8) {
            this.setState({
              passwordError:
                "Your Password Is Too Short! Minimum Password Length Is 8",
            });
            console.log("Password Error Has Ocurred");
          } else {
            this.setState({
              passwordError: "",
            });
            database.ref("users/" + Math.floor(Math.random() * 1001)).set({
              email: this.state.email,
              password: this.state.password,
              firstName: this.state.fullName.split(" ")[0],
              lastName: this.state.fullName.split(" ")[1],
              fullName: this.state.fullName,
              isLoggedIn: true,
            });
            this.setState({
              signUpSuccess: "Account Created Successfully!",
            });
          }
        }
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
            <Box p={4}>
              <Box textAlign="center">
                <Text>Sign In</Text>
                <Heading>Continue Your Journey</Heading>
                <Heading>@ Onpoint</Heading>
              </Box>
              <Box my={8} textAlign="left">
                <form onSubmit={this.handleSubmit}>

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

                  <Stack isInline justifyContent="space-between" mt={4}>
                    <Box>
                      <Checkbox>Remember Me</Checkbox>
                    </Box>
                  </Stack>
                  <Button
                    type="submit"
                    variantColor={VARIANT_COLOR}
                    width="full"
                    mt={4}
                    onClick={this.toastOnClick}
                  >
                    Sign In
                  </Button>
                  <Text fontSize="xs">{this.state.signUpSuccess}</Text>

                  <Box mt={1}>
                    Need An Account? {" "}
                    <ChakraLink color={`${VARIANT_COLOR}.500`}>
                      <Link to="/signup" >
                        Sign Up Here
                      </Link>
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

export default SignIn;
