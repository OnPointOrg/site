import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
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
  ThemeProvider,
  Link as ChakraLink,
} from "@chakra-ui/core";

import * as firebase from "firebase";
import DefaultNav from "../components/DefaultNav";

const VARIANT_COLOR = "teal";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    signInSuccess: "",
    redirect: null,
    currentNav: <DefaultNav />,
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
    // const { history } = this.props;

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(
              "Error Message: " + errorMessage + " Error Code: " + errorCode
            );
            this.setState({
              signInSuccess: "Your Email Or Password Is Invalid!",
            });
          });
      })
      .catch((error) => {
        // Handle Errors here.
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
                  <Button
                    type="submit"
                    variantColor={VARIANT_COLOR}
                    width="full"
                    mt={4}
                  >
                    Sign In
                  </Button>
                  <Text fontSize="xs">{this.state.signInSuccess}</Text>

                  <Box mt={1}>
                    Need An Account?{" "}
                    <ChakraLink color={`${VARIANT_COLOR}.500`}>
                      <Link to="/signup">Sign Up Here</Link>
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
