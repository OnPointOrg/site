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
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import DefaultNav from "../components/nav/DefaultNav";
import VerifiedNav from "../components/nav/VerifiedNav";
import Navbar from "../components/nav/Navbar";
import { FaBookReader } from "react-icons/fa";
import firebase from "firebase";
import logo from "../images/logo.png";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { MdAccessibility, MdGrain, MdPalette, MdEmail } from "react-icons/md";
import Feature from "../components/Feature";
import BlogTrendingNew from "../components/blog/BlogTrendingNew";

export class Home extends React.Component {
  state = {
    currentNav: <DefaultNav />,
  };

  componentDidMount = () => {
    // console.log(firebase.auth().currentUser);
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
      <div>
        <Navbar />
        <Flex
          direction="column"
          align="center"
          maxW={{ xl: "1200px" }}
          m="0 auto"
        >
          <Flex
            align="center"
            justify={{
              base: "center",
              md: "space-around",
              xl: "space-between",
            }}
            direction={{ base: "column-reverse", md: "row" }}
            wrap="no-wrap"
            minH="70vh"
            px={8}
            mb={16}
          >
            <Stack
              spacing={4}
              height="100%"
              // align={["center", "center", "flex-start", "flex-start"]}
            >
              <Heading
                mt="10px"
                as="h1"
                size="xl"
                fontSize="6rem"
                fontWeight="bold"
                color="primary.800"
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
                    colorScheme="teal"
                    rightIcon={"arrow-forward"}
                  >
                    Get Started
                  </Button>
                </Link>
                <Link to="/blog">
                  <Button
                    as="a"
                    size="lg"
                    mt="25px"
                    h="5rem"
                    borderRadius="10px"
                    px="40px"
                    fontSize="1.5rem"
                    leftIcon={FaBookReader}
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
                animate={{ rotate: 360, scale: 0.75 }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 20,
                }}
                whileHover={{
                  rotate: 360,
                  scale: 1,
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
        <Box as="section">
          <Box maxW="760px" mx="auto" textAlign="center" mt="25px">
            <Heading textStyle="heading" mb="5">
              An experience you'd expect from a design system
            </Heading>
            <Text fontSize="lg" color="primary">
              Opinionated and designed for daily use.
            </Text>
          </Box>
          <Flex justifyContent="center">
            <Grid
              templateColumns="repeat(3, 1fr)"
              gap={10}
              px="15"
              margin="55px"
            >
              <Feature icon={MdAccessibility} title="Accessible"></Feature>
              <Feature icon={MdPalette} title="Themeable">
                Customize any part of our components to match your design needs.
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
                Guaranteed to boost your productivity when building your app or
                website.
              </Feature>
              <Feature icon={MdEmail} title="Active Community">
                We're a team of active maintainers ready to help you whenever
                you need.
              </Feature>
            </Grid>
          </Flex>
        </Box>
        <BlogTrendingNew />
        <Footer />
      </div>
    );
  }
}

export default Home;
