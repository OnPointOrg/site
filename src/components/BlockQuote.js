import React, { Component } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { Heading, Box, Text } from '@chakra-ui/core';


export class BlockQuote extends Component {
    render() {
        return (
            <Box width="900px" borderWidth="1px" rounded="lg" overflow="hidden" margin="50px">
                <Box
                    marginTop="50px"
                    marginLeft="50px"
                >
                    <Heading><FaQuoteLeft /></Heading>
                </Box>
                <Box>
                    <Box
                        marginTop="30px"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                    >
                        <Text fontSize="xl" mx="100px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>

                        <Box d="flex" alignItems="center" color="gray.600" marginTop="50px" margin="50px">
                            <Text fontSize="lg">- Bob The Builder</Text>
                        </Box>
                    </Box>
                </Box>     
            </Box>       
        )
    }
}

export default BlockQuote
