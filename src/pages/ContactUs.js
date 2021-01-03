import React, { Component } from 'react';
import {
  Button,
  Input,
  Textarea,
  FormLabel,
  FormControl,
  Heading,
  Flex,
  Box
} from '@chakra-ui/core';

import firebase from 'firebase';

import DefaultNav from '../components/nav/DefaultNav';
import VerifiedNav from '../components/nav/VerifiedNav';
import Footer from '../components/Footer';

class Contact extends Component {
  state = {
    currentNav: <DefaultNav />
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          currentNav: <VerifiedNav />
        });
      } else {
        this.setState({
          currentNav: <DefaultNav />
        });
      }
    });
  };

  render() {
    return (
      <Box>
        {this.state.currentNav}
        <Flex
          width="80%"
          display="block"
          mx="auto"
          height="auto"
          align="center"
          justifyContent="center"
          my="7rem"
        >
          <Box
            borderWidth={1}
            px={4}
            width="full"
            borderRadius={4}
            textAlign="center"
            boxShadow="lg"
          >
            <Box p={4}>
              <Box textAlign="center">
                <Heading>Contact Us</Heading>
              </Box>
              <Box my={8} textAlign="left">
                <form>
                  <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" placeholder="Enter your name" />
                  </FormControl>

                  <FormControl mt="5">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Enter your email" />
                  </FormControl>

                  <FormControl mt="5">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      type="textarea"
                      placeholder="Enter your message"
                    />
                  </FormControl>

                  <Button variantColor="blue" type="submit" mt={4}>
                    Submit
                  </Button>
                </form>
              </Box>
            </Box>
          </Box>
        </Flex>
        <Footer />
      </Box>
    );
  }
}

export default Contact;
