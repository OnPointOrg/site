import React, { Component } from 'react';
import DefaultNav from '../components/nav/DefaultNav';
import VerifiedNav from '../components/nav/VerifiedNav';
import ArticleGrid from '../components/article/ArticleGrid';
import Footer from '../components/Footer';
import firebase from 'firebase';
import {
   Box,
   Heading,
   Button,
   Link as ChakraLink,
   Flex,
   Text,
   Icon
} from '@chakra-ui/core';

import { FaCheckCircle } from 'react-icons/fa';

import { Link } from 'react-router-dom';

class Articles extends Component {
   state = {
      currentNav: <DefaultNav />,
      page: (
         <Box
            bg={'#81e6d91c'}
            bgPos="bottom center"
            bgSize="120px"
            bgRepeat="repeat no-repeat"
            borderTopColor="teal.500"
            borderTopWidth="10px"
            borderBottomColor="teal.500"
            borderBottomWidth="10px"
            minH="100%"
            width="100%"
         >
            <Box py="12rem" w="100%" mx="auto" textAlign="center">
               <Flex direction="column" align="center" mx="auto">
                  <FaCheckCircle fontSize="75px" />
                  <Heading textStyle="heading" my="atuo">
                     Get Started!
                  </Heading>
                  <Text mb="40px" fontSize="lg" opacity={0.7} width="50%">
                     You cannot view our collection of articles without an
                     account! Make your free account to view all of our
                     articles! If you have any other questions, contact us by{' '}
                     <ChakraLink
                        href="mailto:aditya1rawat@gmail.com"
                        textDecoration="underline"
                        isExternal
                     >
                        email <Icon name="external-link" mx="2px" />
                     </ChakraLink>{' '}
                     or go{' '}
                     <ChakraLink textDecoration="underline">
                        <Link to="/contact">here</Link>
                     </ChakraLink>
                     !
                  </Text>
               </Flex>
               <Link to="/signup">
                  <Button
                     h="4rem"
                     px="40px"
                     fontSize="1.2rem"
                     as="a"
                     size="lg"
                     colorScheme="teal"
                     rightIcon={'arrow-forward'}
                  >
                     Get Started Now
                  </Button>
               </Link>
            </Box>
         </Box>
      )
   };

   componentDidMount = () => {
      firebase.auth().onAuthStateChanged((user) => {
         if (user) {
            this.setState({
               currentNav: <VerifiedNav />,
               page: <ArticleGrid />
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
         <Box width="100%">
            {this.state.currentNav}
            {this.state.page}
            <Footer />
         </Box>
      );
   }
}

export default Articles;
