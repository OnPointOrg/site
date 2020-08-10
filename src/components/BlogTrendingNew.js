import React, { Component } from 'react'
import { ThemeProvider, theme, Text, Grid, Box, Divider, Flex } from '@chakra-ui/core';
import DefaultNav from './DefaultNav';
import VerifiedNav from './VerifiedNav';
import BlogPost from './BlogPost';

export class BlogTrendingNew extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Box margin="25px">
                    <Flex align="center">
                        <Flex>
                            <Text fontSize="2xl">Trending Articles</Text>
                        </Flex>
                        <Flex width="600px" align="center" justify="center" />
                            <Text fontSize="2xl">New Articles</Text>
                    </Flex>
                </Box>
                <Divider />
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <Box margin="25px">
                    <Flex align="center">
                        <BlogPost />
                        <Flex marginRight="15px" />
                        <BlogPost />
                    </Flex>
                </Box>
                <Box margin="25px">
                    <Flex align="center">
                        <BlogPost />
                        <Flex marginRight="15px" />
                        <BlogPost />
                    </Flex>
                </Box>
                </Grid>
            </ThemeProvider>
        )
    }
}

export default BlogTrendingNew;