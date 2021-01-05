import React, { Component } from 'react';
import {
  Button,
  Input,
  Textarea,
  FormLabel,
  Heading,
  Box,
  Text
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
        <Box maxW="1000px" mx="auto" py={16} px={8}>
          <Heading
            as="h2"
            lineHeight="shorter"
            fontWeight="900"
            textAlign="center"
            mb={8}
          >
            Contact Us
          </Heading>
          <Text>Need any help? Found an issue?</Text>
          <form
            name="contact"
            data-netlify="true"
            method="post"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <Box>
              <FormLabel htmlFor="name">Your Name</FormLabel>
              <Input
                type="name"
                name="name"
                aria-describedby="name-helper-text"
                placeholder="Your name"
                size="lg"
                mb={4}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                type="email"
                name="email"
                aria-describedby="email-helper-text"
                placeholder="Your email"
                size="lg"
                mb={4}
                is
              />
            </Box>
            <Box>
              <FormLabel>Message</FormLabel>
              <Textarea
                type="message"
                name="message"
                resize="none"
                placeholder="Type your message here..."
                size="lg"
                mb={4}
              />
            </Box>
            <Button
              size="lg"
              fontWeight={600}
              type="submit"
              isFullWidth
              my="15px"
            >
              Submit
            </Button>
          </form>
        </Box>
        <Footer />
      </Box>
    );
  }
}

export default Contact;
