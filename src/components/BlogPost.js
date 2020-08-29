import React, { Component } from "react";

import {
  Badge,
  Box,
  Image,
  Collapse,
  Button,
  Link,
  Tooltip,
  Text,
} from "@chakra-ui/core";

export class BlogPost extends React.Component {

  // constructor(props) {
  //   super(props)
  //   console.log(this.props)
  // }
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
    return(
      date
    )
  };

  displayRealName = () => {
    const displayName = this.props.user.displayName;
  }

  componentDidMount = () => {};

  render() {
    return (
      <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
        <Image src="https://bit.ly/2k1H1t6" />
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
              {/* {console.log(this.props.user)} */}
              {this.displayRealName} &bull;&bull;&bull;{this.convertFromUnix(this.props.date)}
            </Box>
          </Box>

          <Box
            marginTop="5"
            marginBottom="5"
            marginLeft="2px"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {this.props.title}
          </Box>
          <Box>
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
              <Link>Read More</Link>
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default BlogPost;
