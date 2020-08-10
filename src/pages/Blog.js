import React, { Component } from 'react'
import { ThemeProvider, theme, Text, Grid, Box, Divider, Flex } from '@chakra-ui/core';
import DefaultNav from '../components/DefaultNav';
import VerifiedNav from '../components/VerifiedNav';
import BlogTrendingNew from '../components/BlogTrendingNew';
import BlogGrid from '../components/BlogGrid';

export class Blog extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <DefaultNav />
                <BlogTrendingNew />
                <BlogGrid />
            </ThemeProvider>
        )
    }
}

export default Blog;