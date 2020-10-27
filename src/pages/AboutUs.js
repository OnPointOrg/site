import React from "react";
import { Heading, Text, Box, Grid, Image, Badge } from "@chakra-ui/core";
import DefaultNav from "../components/nav/DefaultNav";
import VerifiedNav from "../components/nav/VerifiedNav";
import firebase from "firebase";
// import Footer from "../components/Footer";
import adityaverma from "../images/team/adityaverma.png";

export class About extends React.Component {
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
      <div>
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
                We Are OnPoint
              </Heading>
              <Heading
                fontSize="3.5rem"
                letterSpacing="tight"
                fontWeight="bold"
                mb="16px"
                lineHeight="1.2"
              >
                <Box as="span" color="teal.500">
                  We're Changing The Way You See Media Forever
                </Box>
              </Heading>

              <Heading
                fontSize="2rem"
                letterSpacing="tight"
                fontWeight="bold"
                mt="3rem"
                lineHeight="1.2"
                textAlign="center"
              >
                Our Mission
              </Heading>
              <Text fontSize="1.5rem" mt="6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Box>
          </Box>
          <Box width="100%" height="100%" mt={"50px"} justifyContent="center">
            <Grid templateColumns="repeat(3, 1fr)" gap={15} marginLeft="100px">
              <Box w="75%">
                <Box maxW="sm" borderWidth="1px" rounded="lg">
                  <Image
                    src={adityaverma}
                    alt="Aditya Verma"
                    overflow="hidden"
                  />
                  <Box
                    px="6"
                    pt="-5"
                    fontWeight="bold"
                    as="h4"
                    lineHeight="tight"
                  >
                    Aditya Verma
                  </Box>

                  <Box p="6">
                    <Box d="flex" alignItems="baseline">
                      <Badge rounded="full" mr="2" px="2" variantColor="teal">
                        CEO
                      </Badge>
                      <Badge rounded="full" px="2" variantColor="teal">
                        Founder
                      </Badge>
                    </Box>
                    <Box
                      pt="3"
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                    >
                      Aditya Verma is a 10th grade student lorem ipsum sit amet
                      etc etc etc this many is dumb and wants to get into
                      medical school
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box w="75%" h="10" bg="blue.500" />
              <Box w="75%" h="10" bg="blue.500" />
              <Box w="75%" h="10" bg="blue.500" />
              <Box w="75%" h="10" bg="blue.500" />
              <Box w="75%" h="10" bg="blue.500" />
            </Grid>
          </Box>
        </Box>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default About;
