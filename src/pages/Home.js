import React from "react";
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
  Icon,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import DefaultNav from "../components/nav/DefaultNav";
import VerifiedNav from "../components/nav/VerifiedNav";
import firebase from "firebase";
import logo from "../images/logo.png";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import {
  MdAccessibility,
  MdGrain,
  MdPalette,
  MdEmail,
  MdLibraryBooks,
  MdDoneAll,
} from "react-icons/md";
import Feature from "../components/Feature";
import ArticleTrendingNew from "../components/article/ArticleTrendingNew";

export class Home extends React.Component {
  state = {
    currentNav: <DefaultNav />,
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({
          currentNav: <VerifiedNav />,
        });
      } else {
        this.setState({
          currentNav: <DefaultNav />,
        });
      }
    });
  };

  render() {
    return (
      <Box width="100%">
        {this.state.currentNav}
        <Box width="100%" bg="teal.700" height="700px">
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
                      colorScheme="teal.500"
                      rightIcon={"arrow-forward"}
                    >
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/article">
                    <Button
                      as="a"
                      size="lg"
                      mt="25px"
                      h="5rem"
                      borderRadius="10px"
                      px="40px"
                      fontSize="1.5rem"
                      leftIcon={MdLibraryBooks}
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
                w={{ base: "80%", sm: "60%", md: "50%" }}
                mb={{ base: 12, md: 0 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 0.8 }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 20,
                  }}
                  whileHover={{
                    rotate: 360,
                    scale: 0.9,
                  }}
                >
                  <Image
                    src={logo}
                    size="100%"
                    rounded="1rem"
                    shadow="2xl"
                    mt="15px"
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
          <Box as="section">
            <Box pb="120px">
              <Box maxW="760px" mx="auto" textAlign="center" mb="56px" mt="5rem">
                <Heading as="h2" fontSize="50px" mb="5">
                  Redefine The Media
                </Heading>
                <Text opacity={0.7} fontSize="lg">
                  Well Maybe Not Redefine, But You'll Still Make An Impact
                </Text>
              </Box>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(3, 1fr)",
                }}
                gap={10}
                px={{ md: 12 }}
                mx="auto"
                height="auto"
                align="center"
                justifyContent="center"
              >
                <Feature icon={MdAccessibility} title="Accessible">
                  This is an interesting feature
                </Feature>
                <Feature icon={MdPalette} title="Themeable">
                  Customize any part of our components to match your design
                  needs.
                </Feature>
                <Feature icon={MdGrain} title="Composable">
                  Designed with composition in mind. Compose new components with
                  ease.
                </Feature>
                <Feature icon={MdAccessibility} title="Light and Dark UI">
                  Optimized for multiple color modes. Use light or dark, your
                  choice.
                </Feature>
                <Feature icon={MdAccessibility} title="Developer Experience">
                  Guaranteed to boost your productivity when building your app
                  or website.
                </Feature>
                <Feature icon={MdEmail} title="Active Community">
                  We're a team of active maintainers ready to help you whenever
                  you need.
                </Feature>
              </Grid>
            </Box>
          </Box>
          <ArticleTrendingNew />
        </Box>
        <Box
          bg={"#81e6d91c"}
          bgPos="bottom center"
          bgSize="120px"
          bgRepeat="repeat no-repeat"
          mt="100px"
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
              <Icon as={MdDoneAll} fontSize="75px" />
              <Heading textStyle="heading" mt="6" mb="6">
                Get Started!
              </Heading>
              <Text mb="40px" fontSize="lg" opacity={0.7}>
                Make your free account to start writing the next big story! If
                you have any other questions, contact us by{" "}
                <ChakraLink
                  href="mailto:aditya1rawat@gmail.com"
                  textDecoration="underline"
                  isExternal
                >
                  email <Icon name="external-link" mx="2px" />
                </ChakraLink>{" "}
                or go{" "}
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
                rightIcon={"arrow-forward"}
              >
                Get Started Now
              </Button>
            </Link>
          </Box>
        </Box>
        <Footer />
      </Box>
    );
  }
}

export default Home;
