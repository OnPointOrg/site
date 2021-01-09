import React from 'react';
import {
   Heading,
   Button,
   Link as ChakraLink,
   Box,
   Flex,
   Stack,
   Image,
   Text,
   Grid,
   Icon
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import paypallogo from '../../images/paypallogo.png';
import hcbanklogo from '../../images/hcbanklogo.svg';
import { motion } from 'framer-motion';

import {
   FaSearch,
   FaPlay,
   FaNewspaper,
   FaComment,
   FaUsers,
   FaCalendar,
   FaCheckCircle,
   FaScroll
} from 'react-icons/fa';
import Feature from '../Feature';

export const DefaultHome = () => {
   return (
      <Box>
         <Box as="section" width="100%" bg="teal.700" py="35px">
            <Flex
               direction="column"
               align="center"
               width="90%"
               display="block"
               mx="auto"
               height="100%"
               justifyContent="center"
            >
               <Flex align="center" px={8} mb={16}>
                  <Stack spacing={4} height="100%">
                     <Heading
                        mt="10px"
                        as="h2"
                        size="xl"
                        fontSize="6rem"
                        fontWeight="bold"
                        color="primary.800"
                        width="80%"
                     >
                        This Is OnPoint.
                     </Heading>
                     <Heading
                        as="h2"
                        size="md"
                        color="primary.800"
                        fontSize="3rem"
                        opacity="0.8"
                        fontWeight="normal"
                        lineHeight={1.5}
                     >
                        This Is What We Do
                     </Heading>
                     <div mt="10" spacing="3" justify="center" direction="row">
                        <Link to="/signup">
                           <Button
                              h="5rem"
                              borderRadius="10px"
                              px="40px"
                              mr="20px"
                              mt="25px"
                              fontSize="1.5rem"
                              as="a"
                              size="lg"
                              bg="teal.900"
                              rightIcon={'arrow-forward'}
                           >
                              Get Started
                           </Button>
                        </Link>
                        <Link to="/articles">
                           <Button
                              as="a"
                              size="lg"
                              mt="25px"
                              h="5rem"
                              borderRadius="10px"
                              px="40px"
                              fontSize="1.5rem"
                              leftIcon={FaScroll}
                           >
                              Start Reading
                           </Button>
                        </Link>
                     </div>
                     <Box mt={5}>
                        <Link to="/about">
                           <ChakraLink
                              fontSize="20px"
                              textAlign="center"
                              color="primary.800"
                              opacity="0.6"
                           >
                              Learn More
                           </ChakraLink>
                        </Link>
                     </Box>
                  </Stack>
                  <Box
                     w={{ base: '80%', sm: '60%', md: '50%' }}
                     mb={{ base: 12, md: 0 }}
                  >
                     <motion.div
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 0.8 }}
                        transition={{
                           type: 'spring',
                           stiffness: 180,
                           damping: 20
                        }}
                        whileHover={{
                           rotate: 360,
                           scale: 0.9
                        }}
                     >
                        <Image
                           src={logo}
                           size="100%"
                           rounded="1rem"
                           shadow="2xl"
                           ml="30px"
                        />
                     </motion.div>
                  </Box>
               </Flex>
            </Flex>
         </Box>
         <Box
            width="90%"
            display="block"
            mx="auto"
            height="auto"
            align="center"
            justifyContent="center"
         >
            <Box pb="120px">
               <Box
                  maxW="760px"
                  mx="auto"
                  textAlign="center"
                  mb="56px"
                  mt="5rem"
               >
                  <Heading as="h2" fontSize="50px" mb="5">
                     Redefine The Media
                  </Heading>
                  <Text opacity={0.7} fontSize="lg">
                     Well Maybe Not Redefine, But You'll Still Make An Impact
                  </Text>
               </Box>
               <Grid
                  templateColumns={{
                     base: 'repeat(1, 1fr)',
                     md: 'repeat(3, 1fr)'
                  }}
                  gap={10}
                  px={{ md: 12 }}
                  mx="auto"
                  height="auto"
                  align="center"
                  justifyContent="center"
               >
                  <Feature icon={<FaCalendar />} title="Daily Articles">
                     Articles about relevant topics that are concise yet
                     detailed and include visual aids. Crafted for precision.
                  </Feature>
                  <Feature icon={<FaSearch />} title="Analytic Articles">
                     Long articles containing deep analysis about certain topics
                     such as how sport drafts work or how the electoral college
                     functions.
                  </Feature>
                  <Feature icon={<FaPlay />} title="Weekly Videos">
                     Weekly videos provide a brief description of the events we
                     covered during the week.
                  </Feature>
                  <Feature icon={<FaNewspaper />} title="Newsletter">
                     Important articles are sent out every week to users. It is
                     customizable to the user’s preference.
                  </Feature>
                  <Feature
                     icon={<FaComment />}
                     title="Guest Speakers / Interviews"
                  >
                     We will conduct interviews and hold speaker events to
                     further educate the public about specific topics.
                  </Feature>
                  <Feature icon={<FaUsers />} title="Active Community">
                     We want to use our platform to allow others to provide
                     opportunities that will benefit our community.
                  </Feature>
               </Grid>
            </Box>
         </Box>

         <Box bg="teal.500" as="section">
            <Box py="120px" px="32px" color="white">
               <Box mx="auto" textAlign="center" mb="56px" width="75%">
                  <Heading as="h2" fontSize="50px" mb="5">
                     Support OnPoint
                  </Heading>
                  <Text fontSize="lg" opacity={0.7}>
                     To keep your experience a satisfying and memorable one, we
                     will graciously accept donations to fund our operations to
                     continue
                  </Text>
               </Box>

               <Flex
                  direction={{ base: 'column', md: 'row' }}
                  spacing="6"
                  maxW="600px"
                  mx="auto"
                  bg="white"
                  color="gray.800"
                  shadow="md"
                  rounded="lg"
                  p="6"
               >
                  <Flex flex="1" isInline spacing="6">
                     <Image
                        h="50px"
                        w="50px"
                        src={hcbanklogo}
                        mr="20px"
                        mt="1px"
                     />
                     <Box flex="1">
                        <Text fontSize="lg" fontWeight="bold" mt="-1">
                           Hack Club Bank
                        </Text>
                        <Text opacity={0.7}>
                           Support Us So We Can Continue To Grow
                        </Text>
                     </Box>
                  </Flex>
                  <Button
                     w={{ base: '100%', md: 'auto' }}
                     alignSelf="center"
                     as="a"
                     minW="7rem"
                     bg="teal.500"
                     _hover={{
                        backgroundColor: 'teal.800'
                     }}
                     href="#"
                     target="_blank"
                     color="white"
                  >
                     Sponsor
                  </Button>
               </Flex>

               <Flex
                  direction={{ base: 'column', md: 'row' }}
                  spacing="6"
                  maxW="600px"
                  mx="auto"
                  bg="white"
                  color="gray.800"
                  shadow="md"
                  rounded="lg"
                  p="6"
                  mt="6"
               >
                  <Flex flex="1" isInline spacing="6">
                     <Image
                        h="50px"
                        w="50px"
                        src={paypallogo}
                        mr="20px"
                        mt="1px"
                     />
                     <Box flex="1">
                        <Text fontSize="lg" fontWeight="bold" mt="-1">
                           PayPal
                        </Text>
                        <Text opacity={0.7}>
                           Support The Developer, Aditya Rawat.
                        </Text>
                     </Box>
                  </Flex>
                  <Button
                     w={{ base: '100%', md: 'auto' }}
                     alignSelf="center"
                     as="a"
                     minW="7rem"
                     bg="teal.500"
                     _hover={{
                        backgroundColor: 'teal.800'
                     }}
                     href="#"
                     target="_blank"
                     color="white"
                  >
                     Sponsor
                  </Button>
               </Flex>

               <Box maxW="600px" mx="auto" textAlign="center">
                  <Text textStyle="caps" mb="8" mt="4rem">
                     Sponsors{' '}
                     <span role="img" aria-label="emoji building">
                        🏦
                     </span>
                  </Text>
                  <Flex justify="center">
                     <Box>
                        <motion.div whileHover={{ scale: 1.1 }}>
                           <ChakraLink
                              href="https://hackclub.com"
                              target="_blank"
                              _hover=""
                           >
                              <Image
                                 w="56px"
                                 h="56px"
                                 alt={'alt'}
                                 src={
                                    'https://assets.hackclub.com/icon-rounded.png'
                                 }
                                 loading="lazy"
                              />
                           </ChakraLink>
                        </motion.div>
                     </Box>
                  </Flex>
               </Box>
            </Box>
         </Box>

         <Box
            as="section"
            bg={'#81e6d91c'}
            bgPos="bottom center"
            bgSize="120px"
            bgRepeat="repeat no-repeat"
            borderTopColor="teal.500"
            borderTopWidth="10px"
            borderBottomColor="teal.500"
            borderBottomWidth="10px"
         >
            <Box
               pt="12rem"
               maxW="50rem"
               height="735px"
               mx="auto"
               textAlign="center"
            >
               <Flex direction="column" align="center" mx="auto">
                  <FaCheckCircle fontSize="75px" />
                  <Heading textStyle="heading" mt="6" mb="6">
                     Get Started!
                  </Heading>
                  <Text mb="40px" fontSize="lg" opacity={0.7}>
                     Make your free account to start writing the next big story!
                     If you have any other questions, contact us by{' '}
                     <ChakraLink
                        href="mailto:aditya1rawat@gmail.com"
                        textDecoration="underline"
                        isExternal
                     >
                        email <Icon name="external-link" mx="2px" />
                     </ChakraLink>{' '}
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
      </Box>
   );
};

export default DefaultHome;
