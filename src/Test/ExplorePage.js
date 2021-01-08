import React from 'react';
import { Badge, Box, Flex, Stack, Text, Icon } from '@chakra-ui/core';
import { motion } from 'framer-motion';

import { FaChartLine, FaMoon, FaThumbsUp } from 'react-icons/fa';
import { WiSunrise } from 'react-icons/wi';

import TrendingGrid from './TrendingGrid';

import firebase from 'firebase';

let todIcon = <WiSunrise size="4rem" />;

const tod = () => {
   const today = new Date();
   const hr = today.getHours();

   if (hr < 12) {
      return 'Morning';
   } else if (hr < 18) {
      todIcon = <Icon name="sun" size="3rem" />;
      return 'Afternoon';
   } else {
      todIcon = <FaMoon size="2rem" />;
      return 'Evening';
   }
};

let user = '';

export class ExplorePage extends React.Component {
   componentDidMount() {
      firebase.auth().onAuthStateChanged((firebaseUser) => {
         user = firebaseUser.displayName.split(' ')[0];
         console.log(user);
      });
   }

   render() {
      return (
         <Box direction="column" overflowX="hidden" bg="#81e6d91c">
            <Flex direction="column" padding="2rem 4rem">
               <Flex align="center">
                  <Text fontSize="3rem" color="teal" as="b" marginRight="10px">
                     Good {tod()}, {user}!
                  </Text>
                  {todIcon}
               </Flex>
            </Flex>
            <Box w="95%" align="center" display="block" mx="auto">
               <motion.div
                  style={{
                     borderRadius: '1.5rem',
                     marginRight: 'auto',
                     marginLeft: 'auto',
                     width: '100%',
                     marginTop: '15px',
                     boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, 0.9)'
                  }}
                  whileHover={{
                     scale: 1.02,
                     boxShadow: '0px 0px 20px rgba(115, 108, 124, 0.58)'
                  }}
                  // transition={{ duration: 0.25 }}
               >
                  <Box
                     backgroundImage={
                        'url(https://firebasestorage.googleapis.com/v0/b/onpointnewsorg.appspot.com/o/BlogThumbnail%2Fales-nesetril-Im7lZjxeLhg-unsplash.jpg?alt=media&token=de296acd-f57e-4108-8f52-fb3dfa9ee966)'
                     }
                     h="30rem"
                     style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center'
                     }}
                     justifyContent="center"
                     // boxShadow="0px 0px 20px 5px rgba(0, 0, 0, 0.9)"
                     padding="3rem"
                     direction="column"
                     borderRadius="1.5rem"
                  >
                     <Text
                        color="rgba(255, 255, 255, 0.61);"
                        fontSize="0.75rem"
                     >
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
                              featured
                           </Flex>
                        </Badge>
                     </Flex>
                  </Box>
               </motion.div>
            </Box>
            <Stack
               w="90%"
               padding="2rem 4rem"
               direction="row"
               align="center"
               mt="2.5rem"
               mx="auto"
            >
               <Flex direction="column" w="100%" marginRight="47px">
                  <Flex align="center">
                     <Text fontSize="2.25rem" as="b" marginRight="15px">
                        Trending
                     </Text>
                     <FaChartLine size="2.3rem" />
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
                     <Text fontSize="2.25rem" as="b" marginRight="15px">
                        Recommended
                     </Text>
                     <FaThumbsUp size="2.3rem" />
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
   }
}

export default ExplorePage;
