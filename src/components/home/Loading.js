import React from 'react';
import { Box, Spinner, Heading } from '@chakra-ui/core';

export const Loading = () => {
    return (
        <Box>
            <Box as="section">
                <Box
                    maxW="760px"
                    mx="auto"
                    textAlign="center"
                    pb="15rem"
                    pt="11rem"
                >
                    <Heading
                        fontSize="4rem"
                        letterSpacing="tight"
                        fontWeight="bold"
                        mb="16px"
                        lineHeight="1.2"
                    >
                        Loading...
                    </Heading>
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Loading;
