import React from 'react';
import { state, Component } from "react";
import {
    Box,
    Icon,
    Badge,
    Image,
    ThemeProvider
}
    from "@chakra-ui/core"

class BlogPost extends Component {

    state = {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
    }

    render() {
        return (
            <ThemeProvider>
                <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
                    <Image src="https://bit.ly/2Z4KKcF" alt="Rear view of modern home with pool" />

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
                                25 Views
                        </Box>
                        </Box>

                        <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                        >
                            An Outstanding Title
                    </Box>

                        <Box>
                            Aditya Rawat
                            <Box as="span" color="gray.600" fontSize="sm">
                                / August 9, 2020
                    </Box>
                        </Box>

                        
                    </Box>
                </Box>
            </ThemeProvider>
        );
    }

};

export default BlogPost;