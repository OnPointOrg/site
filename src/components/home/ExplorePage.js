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

let todIcon = <WiSunrise size="4rem" color="white" />;

const tod = () => {
   const today = new Date();
   const hr = today.getHours();

   if (hr < 12) {
      return 'Morning';
   } else if (hr < 18) {
      todIcon = <Icon name="sun" size="3rem" color="white" />;
      return 'Afternoon';
   } else {
      todIcon = <FaMoon size="2rem" color="white" />;
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
         <Box overflow="hidden" bg="#81e6d91c">
            <Flex padding="2rem 4rem">
               <Text
                  fontSize="3rem"
                  as="b"
                  mr="25px"
                  color="white"
                  textAlign="center"
               >
                  Good {tod()}, {this.state.user}!
               </Text>
               <Text as="span" mt="10px">
                  {todIcon}
               </Text>
            </Flex>
            <Box w="85%" align="center" display="block" mx="auto" mt="25px">
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
                     <Text
                        fontSize="2.25rem"
                        as="b"
                        marginRight="15px"
                        color="white"
                     >
                        Trending
                     </Text>
                     <FaChartLine size="2.3rem" color="white" />
                  </Flex>
                  <Text
                     fontSize="1.125rem"
                     marginRight="7px"
                     marginBottom="10px"
                     color="white"
                  >
                     What's going viral!
                  </Text>
                  <TrendingGrid />
               </Flex>
               <Flex direction="column" w="100%" marginLeft="47px">
                  <Flex align="center">
                     <Text
                        fontSize="2.25rem"
                        as="b"
                        marginRight="15px"
                        color="white"
                     >
                        Recommended
                     </Text>
                     <FaThumbsUp size="2.3rem" color="white" />
                  </Flex>
                  <Text
                     fontSize="1.125rem"
                     marginRight="7px"
                     marginBottom="10px"
                     color="white"
                  >
                     Read and discover the next big thing!
                  </Text>
                  <TrendingGrid />
               </Flex>
            </Stack>

            <Box as="section" bg="#7289DA">
               <Box px="20" h="160px">
                  <Flex
                     align="center"
                     justify="space-between"
                     pt="50px"
                     px="75px"
                  >
                     <Box>
                        <Heading size="lg" lineHeight="1.2">
                           Start Reading More
                        </Heading>
                        <Text opacity={0.7}>
                           There are more articles waiting for you to read! So
                           get going!
                        </Text>
                     </Box>
                     <Link to="/articles">
                        <Button
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
