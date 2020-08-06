import React, { Component } from 'react'
import { ThemeProvider, theme } from '@chakra-ui/core';
import DefaultNav from '../components/DefaultNav';
import VerifiedNav from '../components/VerifiedNav';

export class Blog extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <DefaultNav />
                <h1>Blogs Go Here</h1>
            </ThemeProvider>
        )
    }
}

export default Blog;