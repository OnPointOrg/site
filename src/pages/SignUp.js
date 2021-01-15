import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
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
   Checkbox
} from '@chakra-ui/core';

import * as firebase from 'firebase';

import DefaultNav from '../components/nav/DefaultNav';
import VerifiedNav from '../components/nav/VerifiedNav';
import Footer from '../components/Footer';

const VARIANT_COLOR = 'teal';

class SignUp extends Component {
   state = {
      fullName: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isChecked: false,
      emailError: '',
      passwordError: '',
      signUpSuccess: '',
      redirect: null,
      currentNav: <DefaultNav />,
      signButton: (
         <Button type="submit" variantColor={VARIANT_COLOR} width="full" mt={4}>
            Sign Up
         </Button>
      )
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

   handleChange = (e) => {
      this.setState({
         [e.target.id]: e.target.value
      });
   };

   handleSubmit = (e) => {
      e.preventDefault();
      this.setState({
         signButton: (
            <Button
               isLoading
               loadingText="Signing Up"
               variantColor={VARIANT_COLOR}
               width="full"
               mt={4}
            >
               Sign Up
            </Button>
         )
      });
      this.signUpSubmit(this.state);
   };

   onChangeCheckbox = (event) => {
      // console.log(this.state.isChecked);
      this.setState({
         isChecked: event.target.checked
      });
      console.log(this.state.isChecked);
   };

   setUserInfo = () => {
      const user = firebase.auth().currentUser;

      user
         .updateProfile({
            displayName: this.state.fullName
         })
         .then(function () {
            console.log('Info Saved');
            console.log('displayName: ' + user.displayName);
         })
         .catch((error) => {
            console.log('User Info Error: ' + error);
         });
   };

   signUpSubmit = () => {
      const email = this.state.email;
      const password = this.state.password;
      const fullName = this.state.fullName;
      firebase
         .auth()
         .createUserWithEmailAndPassword(email, password)
         .catch((error) => {
            const errorCode = error.code;
            if (errorCode === 'auth/email-already-in-use') {
               this.setState({
                  emailError:
                     'This Email Is Already In Use! Please Sign In Or Use A Different Email!',
                  signUpSuccess: '',
                  signButton: (
                     <Button
                        type="submit"
                        variantColor={VARIANT_COLOR}
                        width="full"
                        mt={4}
                     >
                        Sign Up
                     </Button>
                  )
               });
               if (this.state.password.length < 8) {
                  this.setState({
                     passwordError:
                        'This Password Is Too Short And/Or Weak! Please Choose A Stronger Password With At Least 8 Characters!',
                     signUpSuccess: '',
                     signButton: (
                        <Button
                           type="submit"
                           variantColor={VARIANT_COLOR}
                           width="full"
                           mt={4}
                        >
                           Sign Up
                        </Button>
                     )
                  });
               } else {
                  this.setState({
                     passwordError: '',
                     signUpSuccess: ''
                  });
               }
            } else if (
               this.state.password.length < 8 ||
               errorCode === 'auth/weak-password'
            ) {
               this.setState({
                  passwordError:
                     'This Password Is Too Short And/Or Weak! Please Choose A Stronger Password With At Least 8 Characters!',
                  signUpSuccess: '',
                  signButton: (
                     <Button
                        type="submit"
                        variantColor={VARIANT_COLOR}
                        width="full"
                        mt={4}
                     >
                        Sign Up
                     </Button>
                  )
               });
               if (errorCode === 'auth/email-already-in-use') {
                  this.setState({
                     emailError:
                        'This Email Is Already In Use! Please Sign In Or Use A Different Email!',
                     signUpSuccess: '',
                     signButton: (
                        <Button
                           type="submit"
                           variantColor={VARIANT_COLOR}
                           width="full"
                           mt={4}
                        >
                           Sign Up
                        </Button>
                     )
                  });
               } else {
                  this.setState({
                     emailError: '',
                     signUpSuccess: ''
                  });
               }
            }
         })
         .then(() => {
            console.log(this.state);
            if (this.state.isChecked) {
               sessionStorage.setItem('email', this.state.email);
               sessionStorage.setItem('password', this.state.password);
               sessionStorage.setItem('checkbox', this.state.isChecked);
               localStorage.email = sessionStorage.getItem('email');
               localStorage.password = sessionStorage.getItem('password');
               localStorage.checkbox = sessionStorage.getItem('checkbox');
            }
            const user = firebase.auth().currentUser;
            if (user) {
               const { history } = this.props;
               this.setState({
                  emailError: '',
                  passwordError: '',
                  signUpSuccess:
                     'Account Created Successfully! You Are Now Logged In!',
                  redirect: history.push('/')
               });
               console.log(user);
               user.updateProfile({ displayName: fullName });
               console.log(user);
            }
         });
   };

   render() {
      return (
         <Box height="100%">
            {this.state.currentNav}
            <Flex
               my={'5rem'}
               minHeight="50vh"
               width="full"
               align="center"
               justifyContent="center"
            >
               <Box>
                  <Box>
                     <Box textAlign="center">
                        <Text color="white">Sign Up</Text>
                        <Heading color="teal.500">Start Your Journey</Heading>
                        <Heading color="teal.500">@ Onpoint</Heading>
                     </Box>
                     <Box my={8} textAlign="left">
                        <form onSubmit={this.handleSubmit}>
                           <FormControl isRequired>
                              <FormLabel color="white">Full Name</FormLabel>
                              <InputGroup>
                                 <InputLeftElement
                                    children={<Icon name="view" />}
                                 />
                                 <Input
                                    onChange={this.handleChange}
                                    id="fullName"
                                    type="text"
                                    placeholder="John Doe"
                                    name="name"
                                    value={this.state.fullName}
                                 />
                              </InputGroup>
                              <Text fontSize="xs" color="red">
                                 {this.state.error}
                              </Text>
                           </FormControl>

                           <FormControl isRequired mt={4}>
                              <FormLabel color="white">Email</FormLabel>
                              <InputGroup>
                                 <InputLeftElement
                                    children={<Icon name="email" />}
                                 />
                                 <Input
                                    onChange={this.handleChange}
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="john@doe.org"
                                    value={this.state.email}
                                 />
                              </InputGroup>
                              <Text fontSize="xs" color="red">
                                 {this.state.emailError}
                              </Text>
                           </FormControl>
                           <FormControl isRequired mt={4}>
                              <FormLabel color="white">Password</FormLabel>
                              <InputGroup>
                                 <InputLeftElement
                                    children={<Icon name="lock" />}
                                 />
                                 <Input
                                    onChange={this.handleChange}
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="notpassword123"
                                    value={this.state.password}
                                 />
                              </InputGroup>
                              <Text fontSize="xs" color="red">
                                 {this.state.passwordError}
                              </Text>
                           </FormControl>

                           <Stack
                              isInline
                              justifyContent="space-between"
                              mt={4}
                           ></Stack>

                           {this.state.signButton}
                           <Text fontSize="xs" color="green">
                              {this.state.signUpSuccess}
                           </Text>
                           <Text fontSize="xs">{this.state.redirect}</Text>

                           <Box mt={1}>
                              <Checkbox
                                 checked={this.state.isChecked}
                                 name="lsRememberMe"
                                 onChange={this.onChangeCheckbox}
                                 color="white"
                              >
                                 Remember Me
                              </Checkbox>
                           </Box>

                           <Box mt={1} color="white">
                              Already Have An Account?{' '}
                              <ChakraLink color={`${VARIANT_COLOR}.500`}>
                                 <Link to="/signin">Sign In Here.</Link>
                              </ChakraLink>
                           </Box>
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

export default SignUp;
