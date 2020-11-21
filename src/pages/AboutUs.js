import React from "react";
import { Heading, Text, Box, SimpleGrid } from "@chakra-ui/core";
import DefaultNav from "../components/nav/DefaultNav";
import VerifiedNav from "../components/nav/VerifiedNav";
import Footer from "../components/Footer";
import firebase from "firebase";
import adityaverma from "../images/team/adityaverma.png";
import sujithsanniboyina from "../images/team/sujith1.jpg";
import adityarawat from "../images/team/adityarawat1.jpg";
import adityagirish from "../images/team/adityagirish.png";
import adityahari from "../images/team/adityahari.jpg";
import adityaguntupalli from "../images/team/adityaguntupalli.png";

import Profile from "../components/Profile";

export class AboutUs extends React.Component {
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
                Our mission is to provide a platform for teenagers to create
                quality media about various topics in the modern world to
                educate and inform the public.
              </Text>
            </Box>
          </Box>
          <Box
            // width="95%"
            mx="25px"
            height="100%"
            mt={"50px"}
            // ml={"50px"}
            justifyContent="center"
          >
            <SimpleGrid columns={[2, null, 3]} spacing="20px">
              <Profile
                name="Aditya Verma"
                roles={["CEO", "Founder"]}
                bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua"
                img={adityaverma}
                instagram="_adityavermaaa"
                email="adiviusd@gmail.com"
                twitter={false}
              />
              <Profile
                name="Aditya Rawat"
                roles={["Co-Founder", "CTO"]}
                bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua"
                img={adityarawat}
                instagram="ad1tya_rawhaaat"
                email="aditya1rawat@gmail.com"
                twitter="aditya1rawat"
              />
              <Profile
                name="Aditya Girish"
                roles={["Co-Founder", "Tech Lead"]}
                bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua"
                img={adityagirish}
                instagram="aditya.girish"
                email="adityagirish@gmail.com"
              />
              <Profile
                name="Aditya Guntupalli"
                roles={["Co-Founder", "Chief Editor"]}
                bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua"
                img={adityaguntupalli}
                instagram="aditya.guntupalli"
                email="adityaguntupalli10@gmail.com"
                twitter="AdityaGuntupal1"
              />
              <Profile
                name="Aditya Hari"
                roles={["Co-Founder", "HR"]}
                bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua"
                img={adityahari}
                instagram="_aditya_hari_"
                email="adityah0205@gmail.com"
              />
              <Profile
                name="Sujith Sanniboyina"
                roles={["Co-Founder", "Secretary"]}
                bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua"
                img={sujithsanniboyina}
                instagram="sujith.sanniboyina"
                email="22sanniboysujith@gmail.com"
              />
            </SimpleGrid>
          </Box>
        </Box>
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
