import React, { Component } from 'react'
import { ThemeProvider, theme, Text, Grid, Box, Divider } from '@chakra-ui/core';
import DefaultNav from '../components/DefaultNav';
import VerifiedNav from '../components/VerifiedNav';
import BlogPost from '../components/BlogPost';

export class Blog extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <DefaultNav />
                <Grid templateColumns="repeat(5, 2fr)" gap={3}>
                    <Text fontSize="2xl">Trending Blogs</Text>
                </Grid>
                <Divider mt={5} mb={5} />
                <Grid templateColumns="repeat(5, 2fr)" gap={3}>
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                </Grid>
            </ThemeProvider>
        )
    }
}

export default Blog;