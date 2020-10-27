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
  Link as ChakraLink,
} from "@chakra-ui/core";

import DefaultNav from "../components/nav/DefaultNav";
import VerifiedNav from "../components/nav/VerifiedNav";

import * as firebase from "firebase";

class ForgotPassword extends React.Component {
  state = {
    email: "",
    emailError: "",
    passwordError: "",
    submitStatus: (
      <Button type="submit" variantColor="teal" width="full" mt={5}>
        Send
      </Button>
    ),
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

  signInSubmit = () => {
    const email = this.state.email;
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log("Email Sent");
        this.setState({
          submitStatus: (
            <Button variantColor="teal" width="full" mt={5}>
              Email Sent! Please Check Your Inbox In A Few Minutes!
            </Button>
          ),
        });
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          this.setState({
            submitStatus: (
              <Button variantColor="teal" width="full" mt={5}>
                User Not Found! If This Is An Error, Contact Us!
              </Button>
            ),
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
    this.setState({
      submitStatus: (
        <Button isLoading loadingText="Sending..." width="full" mt={4} />
      ),
    });
    this.signInSubmit();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        {this.state.currentNav}
        <Flex
          marginTop="5rem"
          minHeight="50vh"
          width="full"
          align="center"
          justifyContent="center"
        >
          <Box>
            <Box p={4}>
              <Box textAlign="center">
                <Heading>Forgot Your Password?</Heading>
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
                  {this.state.submitStatus}

                  <Box mt={1}>
                    <ChakraLink color="teal.500">
                      <Link to="/signin">Back To Sign In</Link>
                    </ChakraLink>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Flex>
      </div>
    );
  }
}

export default withRouter(ForgotPassword);
