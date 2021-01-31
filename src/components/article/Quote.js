import React, { Component } from 'react';
import { Box, Heading, Text } from '@chakra-ui/core';

import { FaQuoteLeft } from 'react-icons/fa';

export class Quote extends Component {
   render() {
      return (
         <Box
            border="1px"
            rounded="lg"
            overflow="hidden"
            // width="80%"
            my="25px"
            display="block"
            mx="auto"
         >
            <Box margin="25px">
               <Heading>
                  <FaQuoteLeft />
               </Heading>
            </Box>
            <Box>
               <Box
                  marginTop="30px"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
               >
                  <Text fontSize="xl" mx="75px">
                     {this.props.quote}
                  </Text>
                  <Box
                     alignItems="center"
                     color="gray.600"
                     margin="25px"
                     mr="50px"
                  >
                     <Text fontSize="lg" textAlign="right">
                        - {this.props.credits}
                     </Text>
                  </Box>
               </Box>
            </Box>
         </Box>
      );
   }
}

export default Quote;
