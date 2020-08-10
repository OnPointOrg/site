import React, { Component } from 'react'
import { ThemeProvider, theme, Text, Grid, Box, Divider, Flex } from '@chakra-ui/core';
import DefaultNav from '../components/DefaultNav';
import VerifiedNav from '../components/VerifiedNav';
import BlogPost from '../components/BlogPost';

export class Blog extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <DefaultNav />
                <Box margin="25px">
                    <Flex align="center">
                        <Flex>
                            <Text fontSize="2xl">Trending Articles</Text>
                        </Flex>
                        <Flex width="500px" align="center" justify="center" />
                            <Text fontSize="2xl">New Articles</Text>
                    </Flex>
                </Box>
                <Divider />
                <Box margin="25px">
                    <Flex align="center">
                        <BlogPost />
                        <Flex marginRight="15px" />
                        <BlogPost />
                    </Flex>
                </Box>
            </ThemeProvider>
        )
    }
}

export default Blog;