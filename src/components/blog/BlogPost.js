import React, { Component } from "react";

import {
  Badge,
  Box,
  Image,
  Collapse,
  Button,
  Tooltip,
  Text,
} from "@chakra-ui/core";
import firebase from "firebase";
import { Link } from "react-router-dom";

export class BlogPost extends React.Component {
  state = {
    show: false,
  };

  handleToggle = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  convertFromUnix = (date) => {
    const dateObject = new Date(date);

    date = dateObject.toLocaleString();
    return date;
  };

  displayRealName = () => {
    const displayName = this.props.user.displayName;
  };

  componentDidMount = () => {
    const user = firebase.auth().currentUser;

    if (user != null) {
      user.providerData.forEach((profile) => {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      });
    }
  };

  render() {
    return (
      <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
        <Image src={this.props.thumbnailImage} height="auto" />
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="3" variantColor="teal">
              Trending
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {console.log(this.props.user)}
              {this.convertFromUnix(this.props.date)}
            </Box>
          </Box>

          <Box
            marginTop="5"
            marginBottom="2.5"
            marginLeft="2px"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {this.props.title}
          </Box>
          <Box
            marginTop="3"
            marginBottom="3"
            marginLeft="2px"
            fontWeight="semibold"
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            lineHeight="tight"
            isTruncated
          >
            {this.props.user}
          </Box>
          <Box marginTop="3">
            <Box as="span" color="white.600" fontSize="sm">
              <Collapse startingHeight={20} isOpen={this.state.show}>
                {this.props.summary}
              </Collapse>
              <Button
                size="sm"
                onClick={this.handleToggle}
                mt="1rem"
                variant="outline"
              >
                Show {this.state.show ? "Less" : "More"}
              </Button>
            </Box>
            <Button size="sm" ml="10px" mt="1rem" variant="ghost">
              {console.log(
                "PROPS DOC ID ===================" + this.props.docId
              )}
              <Link to={() => `/blog/${this.props.docId}`}>Read More</Link>
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default BlogPost;
