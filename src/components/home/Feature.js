import * as React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/core';
import { motion } from 'framer-motion';

const Feature = ({ title, icon, children, ...props }) => {
    return (
        <motion.div whileHover={{ scale: 1.1 }}>
            <Box
                rounded="12px"
                boxShadow="lg"
                bg="#000"
                p="40px"
                {...props}
                minH="300px"
                borderColor="white"
                borderWidth="1px"
            >
                <Flex
                    borderColor="white"
                    borderWidth="1px"
                    rounded="full"
                    w="12"
                    h="12"
                    align="center"
                    justify="center"
                    bg="black"
                    color="white"
                >
                    {icon}
                </Flex>
                <Heading
                    as="h3"
                    size="md"
                    fontWeight="semibold"
                    mt="1em"
                    mb="0.5em"
                    color="white"
                >
                    {title}
                </Heading>
                <Text fontSize="lg" opacity={0.7} color="white">
                    {children}
                </Text>
            </Box>
        </motion.div>
    );
};

export default Feature;
