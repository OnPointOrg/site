import React, { Component } from 'react'
import { ThemeProvider, theme, Grid, Box, Divider, Flex, Heading } from '@chakra-ui/core';
import BlogPost from './BlogPost';

export class BlogTrendingNew extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Box margin="25px">
                    <Flex align="center">
                        <Flex>
                            <Heading fontSize="35px">Trending Articles</Heading>
                        </Flex>
                        <Flex width="600px" align="center" justify="center" />
                            <Heading fontSize="35px">New Articles</Heading>
                    </Flex>
                </Box>
                <Divider />
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <Box margin="50px">
                    <Flex align="center">
                        <BlogPost />
                        <Flex marginRight="15px" />
                        <BlogPost />
                    </Flex>
                </Box>
                <Box margin="50px">
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