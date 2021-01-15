import React from 'react';

import {
   Box,
   Flex,
   Link as ChakraLink,
   Heading,
   Text,
   Button,
   Icon
} from '@chakra-ui/core';

import { FaCheckCircle } from 'react-icons/fa';

import { Link } from 'react-router-dom';

export const GetStarted = (props) => {
   return (
      <Box
         backgroundColor="#25353F"
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
         <Box py="10rem" w="100%" mx="auto" textAlign="center">
            <Flex direction="column" align="center" mx="auto">
               <FaCheckCircle fontSize="75px" color="white" />
               <Heading textStyle="heading" my="25px" color="white">
                  Get Started!
               </Heading>
               <Text
                  mb="40px"
                  fontSize="lg"
                  opacity={0.7}
                  width="50%"
                  color="white"
               >
                  {props.text} If you have any other questions, contact us by{' '}
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
                  variantColor="teal"
                  variant="outline"
                  rightIcon={'arrow-forward'}
               >
                  Get Started Now
               </Button>
            </Link>
         </Box>
      </Box>
   );
};

export default GetStarted;
