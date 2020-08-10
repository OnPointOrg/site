import React, { Component } from 'react'
import { ThemeProvider, theme, Text, Grid, Box } from '@chakra-ui/core';
import DefaultNav from '../components/DefaultNav';
import VerifiedNav from '../components/VerifiedNav';

export class Blog extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <DefaultNav />
                <Grid templateColumns="repeat(5, 2fr)" gap={3}>
                    <Box w="100%" h="10" bg="blue.500" />
                    <Box w="100%" h="10" bg="blue.500" />
                    <Box w="100%" h="10" bg="blue.500" />
                    
                </Grid>
            </ThemeProvider>
        )
    }
}

export default Blog;