import React from 'react';
import { Box, Flex, Stack, Text, Icon, Heading, Button } from '@chakra-ui/core';

import { Link } from 'react-router-dom';
import { FaChartLine, FaMoon } from 'react-icons/fa';
import { WiSunrise } from 'react-icons/wi';

import TrendingGrid from './TrendingGrid';

import firebase from 'firebase';
import { FeaturedArticle } from './FeaturedArticle';

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
      user: '',
      featured: null
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
            <Flex padding="2rem 2rem" justify="center" mx="auto">
               <Text
                  fontSize="3rem"
                  as="b"
                  mr="25px"
                  color="white"
                  textAlign="center"
               >
                  Good {tod()}, {this.state.user}!
               </Text>
               <Text as="span" mt="20px">
                  {todIcon}
               </Text>
            </Flex>
            <FeaturedArticle />
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
               <Flex direction="column" w="100%" mt="auto">
                  <TrendingGrid />
               </Flex>
            </Stack>
            {/* <Stack
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
               <Flex direction="column" w="100%" marginLeft="47px" mt="auto">
                  <TrendingGrid />
               </Flex>
            </Stack> */}

            <Box
               as="section"
               backgroundColor="#81e6d91c"
               width={'50%'}
               height={'25%'}
               my="175px"
               mx="auto"
               boxShadow="1px 5px 0 13px #81e6d91c"
               borderRadius="15px"
            >
               <Stack isInline spacing={8} p={10} mx="auto">
                  <Box align="center" my="15px">
                     <Heading>Check Out The Rest Of Our Articles!</Heading>
                  </Box>
                  <Box align="center" mt="30px">
                     <Link to="/articles">
                        <Button
                           as="a"
                           my="auto"
                           mx="auto"
                           rightIcon="arrow-forward"
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
                  </Box>
               </Stack>
            </Box>
         </Box>
      );
   }
}

export default ExplorePage;
