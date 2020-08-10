import React, { Component } from 'react'
import { ThemeProvider, theme, Text, Grid, Box, Divider, Flex } from '@chakra-ui/core';
import DefaultNav from '../components/DefaultNav';
import VerifiedNav from '../components/VerifiedNav';
import BlogTrendingNew from '../components/BlogTrendingNew';

export class Blog extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <DefaultNav />
                <BlogTrendingNew />
            </ThemeProvider>
        )
    }
}

export default Blog;