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
  Divider,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import DefaultNav from "../components/nav/DefaultNav";
import VerifiedNav from "../components/nav/VerifiedNav";
import { FaBookReader } from "react-icons/fa";
import firebase from "firebase";
import logo from "../images/logo.png";
import { motion } from "framer-motion";
// import Footer from "../components/Footer";

export class Home extends React.Component {
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
              w={{ base: "80%", md: "40%" }}
              align={["center", "center", "flex-start", "flex-start"]}
            >
              <Heading
                mt="10px"
                as="h1"
                size="xl"
                fontSize="5rem"
                fontWeight="bold"
                color="primary.800"
              >
                This Is OnPoint.
              </Heading>
              <Heading
                as="h2"
                size="md"
                color="primary.800"
                fontSize="2rem"
                opacity="0.8"
                fontWeight="normal"
                lineHeight={1.5}
              >
                This is the subheader section where you describe the basic
                benefits of your product
              </Heading>
              <div mt="10" spacing="3" justify="center" direction="row">
                <Link to="/signup">
                  <Button
                    h="4rem"
                    px="40px"
                    mr="20px"
                    mt="15px"
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
                    mt="15px"
                    h="4rem"
                    px="40px"
                    fontSize="1.2rem"
                    target="__blank"
                    leftIcon={FaBookReader}
                  >
                    Start Reading
                  </Button>
                </Link>
              </div>
              <Box mt={5}>
                <Link to="/about">
                  <ChakraLink
                    // fontSize="xs"
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

        <Divider mb={"50px"} />

        <Box as="section" style={{ py: [4, 5], color: "white" }}>
          <Box>
            <Text
              style={{
                fontSize: "25px",
                fontWeight: "bolder",
                margin: "10px 15px",
              }}
              variant="eyebrow"
            >
              THE RUNDOWN
            </Text>
            <Heading as="h2" variant="title">
              High school clubs for{" "}
              <Text
                as="span"
                style={{
                  borderRadius: "default",
                  px: 2,
                  mx: [-2, 0],
                  whiteSpace: "nowrap",
                  color: "#5d114c",
                  bg: "rgb(255, 212, 64)",
                }}
              >
                creative coding
              </Text>
              .
            </Heading>
            <Text as="p" variant="lead" style={{ maxWidth: "copyPlus" }}>
              Hack Clubs at high schools meet weekly (this year, via Zoom),
              typically for 1.5hrs after school. As a club leader, you get
              members (mostly beginners) started on something to learn/create,
              then members work at their own pace, building websites, apps, &
              games, and presenting them at the end.
            </Text>
            <Grid columns={[null, null, "3fr 2fr"]} gap={[3, 4]} pt={[3, 4]}>
              <Image
                src="https://cloud-7incndho1.vercel.app/2020-09-03_5dby0c0pac7ch2r7fy66q5dvy58x762p.png"
                alt="Hack Club meeting at State College Area High School, 2017-06-01"
                showAlt
              />
              <Grid
                templateColumns="repeat(auto, 1fr)"
                gap={3}
                style={{
                  span: {
                    width: 36,
                    height: 36,
                    borderRadius: 24,
                    display: "inline-block",
                    fontSize: 2,
                    lineHeight: "30px",
                    textAlign: "center",
                    fontWeight: "bold",
                    border: "3px solid currentColor",
                  },
                  Text: { mt: 0 },
                  strong: { display: "block" },
                }}
              >
                <p as="span" color="green">
                  1
                </p>
                <p variant="subtitle">
                  <strong>
                    A group of students—many beginners—gather to start coding.
                  </strong>
                  The leader (that’s you!) presents for a few minutes, getting
                  the group started building something new.
                </p>
                <Text as="span" color="cyan">
                  2
                </Text>
                <p variant="subtitle">
                  <strong>Everyone gets hacking, individually.</strong> Not
                  hacking bank accounts—being creative & making something
                  awesome with code.
                </p>
                <p as="span" color="blue">
                  3
                </p>
                <Text as="p" variant="subtitle">
                  <strong>To end, everyone demos their work.</strong>
                  As a leader, you’re cultivating a community of makers. Each
                  member showing off their work builds momentum & motivation.
                </Text>
              </Grid>
            </Grid>
            <Grid
              columns={[null, "1fr 2fr"]}
              mt={[3, 5]}
              style={{ maxWidth: "copyUltra", mx: "auto" }}
            >
              <Heading
                as="h3"
                variant="headline"
                style={{ fontSize: [4, 5], mb: 0 }}
              >
                Go beyond club meetings.
              </Heading>
              <Text
                as="p"
                variant="lead"
                style={{ mt: 0, a: { variant: "styles.a", color: "blue" } }}
              >
                Hack Clubs attend and run{" "}
                <a href="https://hackathons.hackclub.com/">hackathons</a> like{" "}
                <a href="https://windyhacks.com">Windy&nbsp;City&nbsp;Hacks</a>{" "}
                &{" "}
                <a href="https://www.sfchronicle.com/bayarea/article/Hack-the-Fog-makes-history-as-San-12729895.php">
                  Hack the Fog
                </a>
                , run summer programs like{" "}
                <a href="http://thecspn.com/?p=43434">Hack Camp</a>, and compete
                in events like the{" "}
                <a href="http://www.congressionalappchallenge.us">
                  Congressional App Challenge
                </a>
                . The&nbsp;hack’s the limit.
              </Text>
            </Grid>
          </Box>
        </Box>
      </div>
    );
  }
}

export default Home;
