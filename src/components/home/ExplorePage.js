import React from 'react';
import {
   Badge,
   Box,
   Flex,
   Stack,
   Text,
   Icon,
   PseudoBox,
   Heading,
   Button
} from '@chakra-ui/core';

import { Link } from 'react-router-dom';
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

export class ExplorePage extends React.Component {
   state = {
      user: ''
   };
   componentDidMount = () => {
      firebase.auth().onAuthStateChanged((firebaseUser) => {
         if (firebaseUser) {
            this.setState({
               user: firebaseUser.displayName.split(' ')[0]
            });
         }
      });
   };
   render() {
      return (
         <Box direction="column" overflow="hidden" bg="#81e6d91c">
            <Flex direction="column" padding="2rem 4rem">
               <Flex align="center">
                  <Text
                     fontSize="3rem"
                     as="b"
                     ml="75px"
                     mr="25px"
                     color="white"
                  >
                     Good {tod()}, {this.state.user}!
                  </Text>
                  {todIcon}
               </Flex>
            </Flex>
            <Box w="85%" align="center" display="block" mx="auto">
               <PseudoBox
                  transition="transform 0.5s"
                  _hover={{
                     transform: 'scale(1.07, 1.05)',
                     transition: '0.5s ease-in-out'
                  }}
                  backgroundImage={'url(http://u.filein.io/hAVS2J6jdY.jpeg)'}
                  h="30rem"
                  style={{
                     backgroundSize: 'cover',
                     backgroundPosition: 'center center'
                  }}
                  justifyContent="center"
                  padding="3rem"
                  direction="column"
                  borderRadius="1.5rem"
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
                        rounded="md"
                        py="1"
                        px="2"
                        mx="1"
                        backgroundColor="black"
                     >
                        <Text color="white">Technology</Text>
                     </Badge>
                     <Badge
                        rounded="md"
                        py="1"
                        px="2"
                        mx="1"
                        backgroundColor="black"
                     >
                        <Text color="white">Politics</Text>
                     </Badge>
                     <Badge
                        rounded="md"
                        py="1"
                        px="2"
                        mx="1"
                        backgroundColor="black"
                     >
                        <Text color="white">Sports</Text>
                     </Badge>
                  </Flex>
               </PseudoBox>
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
                     marginRight="7px"
                     marginBottom="10px"
                  >
                     What's going viral!
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
                     marginRight="7px"
                     marginBottom="10px"
                  >
                     Read and discover the next big thing!
                  </Text>
                  <TrendingGrid />
               </Flex>
            </Stack>
            <Box bg="#7289DA">
               <Box py="10" px="20" h="150px">
                  <Flex
                     align="center"
                     justify="space-between"
                     m="auto"
                     px="75px"
                  >
                     <Flex color="white">
                        <Box>
                           <Heading size="lg" lineHeight="1.2" mb="1">
                              Start Reading More
                           </Heading>
                           <Text opacity={0.7}>
                              There are more articles waiting for you to read!
                              So get going!
                           </Text>
                        </Box>
                     </Flex>
                     <Link to="/articles">
                        <Button
                           my="auto"
                           as="a"
                           justifyContent="center"
                           alignItems="center"
                           fontWeight="bold"
                           shadow="md"
                           variantColor="teal"
                           px="24px"
                           h="56px"
                           rounded="lg"
                           fontSize="md"
                           w="200px"
                        >
                           Go To Articles
                        </Button>
                     </Link>
                  </Flex>
               </Box>
            </Box>
         </Box>
      );
   }
}

export default ExplorePage;
