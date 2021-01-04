import React from 'react';
import { Box, Button, Link as ChakraLink } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
  return (
    <Box mx={3}>
      <Link to={`/${props.link}`}>
        <Button
          variantColor="teal"
          variant="ghost"
          rounded="full"
          _hover={{ textDecoration: 'none' }}
        >
          <ChakraLink p={4}>{props.name}</ChakraLink>
        </Button>
      </Link>
    </Box>
  );
};

export default NavLink;
