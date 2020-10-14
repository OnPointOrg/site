import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Icon,
  theme,
  ThemeProvider,
  Link as ChakraLink,
  FormErrorMessage,
} from "@chakra-ui/core";

import DefaultNav from "../components/nav/DefaultNav";
import VerifiedNav from "../components/nav/VerifiedNav";

import * as firebase from "firebase";

const VARIANT_COLOR = "teal";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    signInStatus: (
      <Button type="submit" variantColor={VARIANT_COLOR} width="full" mt={5}>
        Sign In
      </Button>
    ),
    redirect: null,
    currentNav: <DefaultNav />,
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          currentNav: <VerifiedNav />,
        });
      } else {
        this.setState({
          currentNav: <DefaultNav />,
        });
      }
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.signInSubmit();
    console.log(this.state);
  };

  signInSubmit = () => {
    const email = this.state.email;
    const password = this.state.password;

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            const { history } = this.props;
            this.setState({
              signInStatus: (
                <Button
                  isLoading
                  loadingText="Logging In..."
                  width="full"
                  mt={4}
                />
              ),
              redirect: setTimeout(() => {
                history.push("/");
              }, 1500),
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === "auth/wrong-password") {
              this.setState({
                passwordError: (
                  <FormErrorMessage>
                    You Have Entered An Invalid Password. Try Again Or Reset
                    Your Password
                  </FormErrorMessage>
                ),
              });
            } else if (errorCode === "auth/user-not-found") {
              this.setState({
                emailError: (
                  <FormErrorMessage>This Email Does Not Exist</FormErrorMessage>
                ),
              });
            }
            console.log("Error Message: " + errorMessage);
            console.log("Error Code: " + errorCode);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        {this.state.currentNav}
        <Flex
          marginTop="7rem"
          minHeight="50vh"
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
                  {this.state.signInStatus}
                  <Box mt={1}>
                    Need An Account?{" "}
                    <ChakraLink color={`${VARIANT_COLOR}.500`}>
                      <Link to="/signup">Sign Up Here</Link>
                    </ChakraLink>
                  </Box>
                  <Box mt={1}>
                    <ChakraLink color="teal.500">
                      <Link to="/forgotpassword">
                        Forgot Your Password?
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

export default withRouter(SignIn);
