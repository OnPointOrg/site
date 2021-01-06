import React from 'react';
import { Box, Button, Text } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
    return (
        <Box mx={3}>
            <Link to={`/${props.link}`}>
                <Button size="md" variant="ghost">
                    <Text fontSize="lg">{props.name}</Text>
                </Button>
            </Link>
        </Box>
    );
};

export default NavLink;
