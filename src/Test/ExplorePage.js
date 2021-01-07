import { Badge, Box, Flex, Stack, Text } from '@chakra-ui/core';
import React from 'react';

import TrendingGrid from './TrendingGrid';

const tod = () => {
   const today = new Date();
   const hr = today.getHours();

   if (hr < 12) {
      return 'Morning';
   } else if (hr < 18) {
      return 'Afternoon';
   } else {
      return 'Evening';
   }
};

const ExplorePage = (props) => {
   return (
      <Box direction="column" overflowX="hidden">
         <Flex direction="column" padding="2rem 4rem">
            <Flex align="center">
               <Text fontSize="2.25rem" color="teal" as="b" marginLeft="10px">
                  Good {tod()}, {props.user}!
               </Text>
               {/* Icon */}
            </Flex>
         </Flex>
         <Box w="100%" align="center" display="block" mx="auto">
            <Flex
               backgroundImage={
                  'url(https://firebasestorage.googleapis.com/v0/b/onpointnewsorg.appspot.com/o/BlogThumbnail%2Fales-nesetril-Im7lZjxeLhg-unsplash.jpg?alt=media&token=de296acd-f57e-4108-8f52-fb3dfa9ee966)'
               }
               h="25rem"
               style={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center'
               }}
               justifyContent="center"
               boxShadow="0px 0px 20px 5px rgba(0, 0, 0, 0.9)"
               padding="3rem"
               direction="column"
               borderRadius="1.5rem"
               marginX="4rem"
            >
               <Text color="rgba(255, 255, 255, 0.61);" fontSize="0.75rem">
                  Featured Article Of The Week
               </Text>
               <Text fontSize="3rem" as="b" color="red.50">
                  Article Title
               </Text>
               <Text fontSize="1.5rem" color="red.50">
                  Article Description
               </Text>
               <Flex marginTop="auto">
                  <Badge
                     variant="solid"
                     padding="0.2rem 0.6rem"
                     borderRadius="999px"
                     style={{ textTransform: 'lowercase' }}
                     marginRight="10px"
                  >
                     #sealife
                  </Badge>
                  <Badge
                     variant="solid"
                     padding="0.2rem 0.6rem"
                     borderRadius="999px"
                     style={{ textTransform: 'lowercase' }}
                     marginRight="10px"
                  >
                     #abstract
                  </Badge>
                  <Badge
                     variant="solid"
                     padding="0.2rem 0.6rem"
                     borderRadius="999px"
                     bg="rgba(252, 129, 129, 0.41);"
                     style={{ textTransform: 'lowercase' }}
                     marginRight="10px"
                  >
                     <Flex align="center" justify="center">
                        <Box marginRight="2.5px">{/* Icon */}</Box>
                        for you
                     </Flex>
                  </Badge>
               </Flex>
            </Flex>
         </Box>
         <Stack w="100%" padding="2rem 4rem" direction="row">
            <Flex direction="column" w="100%" marginRight="47px">
               <Flex align="center">
                  <Text
                     fontSize="2.25rem"
                     as="b"
                     color="red.300"
                     marginRight="7px"
                  >
                     trending
                  </Text>
                  {/* Icon */}
               </Flex>
               <Text
                  fontSize="1.125rem"
                  color="red.300"
                  marginRight="7px"
                  marginBottom="10px"
               >
                  the best communities, curated for you.
               </Text>
               <TrendingGrid />
            </Flex>
            <Flex direction="column" w="100%" marginLeft="47px">
               <Flex align="center">
                  <Text
                     fontSize="2.25rem"
                     as="b"
                     color="red.300"
                     marginRight="7px"
                  >
                     recommended
                  </Text>
                  {/* Icon */}
               </Flex>
               <Text
                  fontSize="1.125rem"
                  color="red.300"
                  marginRight="7px"
                  marginBottom="10px"
               >
                  the best picks by our in-house jellyfish!
               </Text>
               <TrendingGrid />
            </Flex>
         </Stack>
      </Box>
   );
};

export default ExplorePage;
