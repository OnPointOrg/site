import React, { Component } from 'react';
import { Flex, Badge, Text, Box, Image } from '@chakra-ui/core';

export class BlogPost extends Component {
    render() {
        return (
            <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
                <Image rounded="md" src="https://bit.ly/2k1H1t6" />
                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <Badge rounded="full" px="2" variantColor="teal">
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
                            4 beds &bull; 3 baths
                        </Box>
                    </Box>

                    <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                    >
                        Hey
                    </Box>

                    <Box>
                        1$2
                        <Box as="span" color="gray.600" fontSize="sm">
                            / wk
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default BlogPost
