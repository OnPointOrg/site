import React from "react";
import {
  ThemeProvider,
  theme,
  Heading,
  Text,
  Button,
  SimpleGrid,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import VerifiedNav from "../components/nav/VerifiedNav";
import DefaultNav from "../components/nav/DefaultNav";

import firebase from "firebase";

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
        <Heading textAlign="center" marginTop="50px" fontSize="65px">
          We Are OnPoint
        </Heading>
        <br />
        <Text marginTop="10px" textAlign="center" fontSize="35px">
          We Want To Change The Way You See The Media Forever
        </Text>
        <br />
        <br />
        <SimpleGrid columns={3} spacing={5}>
          <Button size="lg" margin="10px" width="50%" marginLeft="250px">
            <Link to="/about">Learn More</Link>
          </Button>
          <Button size="lg" margin="10px" width="50%" marginLeft="135px">
            <Link to="/signup">Get Started</Link>
          </Button>

          <Button size="lg" margin="10px" width="50%">
            <Link to="/blog">Start Reading</Link>
          </Button>
        </SimpleGrid>
      </ThemeProvider>
    );
  }
}

export default MainHome;
