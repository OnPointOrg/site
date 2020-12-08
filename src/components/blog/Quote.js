import React, { Component } from "react";
import { Box, Heading, Text } from "@chakra-ui/core";

import { FaQuoteLeft } from "react-icons/fa";

export class Quote extends Component {
  render() {
    return (
      <Box
        width="900px"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        mx="125px"
        my="25px"
      >
        <Box marginTop="50px" marginLeft="50px">
          <Heading>
            <FaQuoteLeft />
          </Heading>
        </Box>
        <Box>
          <Box
            marginTop="30px"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
          >
            <Text fontSize="xl" mx="100px">
              {this.props.quote}
            </Text>
            <Box
              d="flex"
              alignItems="center"
              color="gray.600"
              marginTop="50px"
              margin="50px"
            >
              <Text fontSize="lg">- {this.props.credits}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Quote;
