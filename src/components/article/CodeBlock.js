import React, { Component } from 'react';
import { Box, Heading, Text } from '@chakra-ui/core';

export class CodeBlock extends Component {
   render() {
      return (
         <Box padding="5" rounded="8px" my="8" bg="#011627">
            {this.props.code}
         </Box>
      );
   }
}

export default CodeBlock;
