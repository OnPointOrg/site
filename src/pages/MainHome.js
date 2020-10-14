import React from "react";
import {
  ThemeProvider,
  theme,
  Heading,
  Text,
  Button,
  Box,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import DefaultNav from "../components/nav/DefaultNav";
import VerifiedNav from "../components/nav/VerifiedNav";
import { FaBookReader, FaUsers } from "react-icons/fa";
import firebase from "firebase";
// import Footer from "../components/Footer";

export class MainHome extends React.Component {
  state = {
    currentNav: <DefaultNav />,
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
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
      <ThemeProvider theme={theme}>
        {this.state.currentNav}
        <Box mb={20} overflow="hidden">
          <Box as="section" mt="3rem">
            <Box maxW="760px" mx="auto" textAlign="center">
              <Heading
                fontSize="5rem"
                letterSpacing="tight"
                fontWeight="bold"
                mb="16px"
                lineHeight="1.2"
              >
                This Is OnPoint
              </Heading>
              <Heading
                fontSize="3.5rem"
                letterSpacing="tight"
                fontWeight="bold"
                mb="16px"
                lineHeight="1.2"
              >
                <Box as="span" color="teal.500">
                  {" "}
                  We're Changing The Way You See Media Forever
                </Box>
              </Heading>

              <Text opacity={0.7} fontSize={{ base: "lg", lg: "xl" }} mt="6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>

              <div
                mt="10"
                spacing="3"
                justify="center"
                direction={{ base: "column", sm: "row" }}
              >
                <Link to="/signup">
                  <Button
                    h="4rem"
                    px="40px"
                    mr="25px"
                    mt="35px"
                    fontSize="1.2rem"
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
                    mr="25px"
                    mt="35px"
                    h="4rem"
                    px="40px"
                    fontSize="1.2rem"
                    target="__blank"
                    leftIcon={FaBookReader}
                  >
                    Start Reading
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    as="a"
                    size="lg"
                    mr="25px"
                    mt="35px"
                    h="4rem"
                    px="40px"
                    fontSize="1.2rem"
                    leftIcon={FaUsers}
                  >
                    About Us
                  </Button>
                </Link>
              </div>
            </Box>
          </Box>
        </Box>
        {/* <Footer /> */}
      </ThemeProvider>
    );
  }
}

export default MainHome;
