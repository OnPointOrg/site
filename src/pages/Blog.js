import React, { Component, setState, state } from 'react'
import { ThemeProvider, theme, Text, Grid, Box, Divider, Flex } from '@chakra-ui/core';
import DefaultNav from '../components/DefaultNav';
import VerifiedNav from '../components/VerifiedNav';
import BlogTrendingNew from '../components/BlogTrendingNew';
import BlogGrid from '../components/BlogGrid';
import firebase from 'firebase';

export class Blog extends Component {
    
    state = {
        currentNav: <DefaultNav />
    }

    checkIfSignedIn() {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                this.setState({
                    currentNav: <VerifiedNav />
                });
            } else {
                this.setState({
                    currentNav: <DefaultNav />
                });
            }
        });
    }
    render() {
        return (
            <ThemeProvider theme={theme}>
                { this.state.currentNav }
                <BlogTrendingNew />
                <BlogGrid />
            </ThemeProvider>
        )
    }
}

export default Blog;