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
                <Flex align="center">
                    <Flex bg="green.50" align="flex-end">
                        <Text>Box 1</Text>
                    </Flex>
                    <Flex bg="blue.50" width="50px" align="center" justify="center">
                        <Text textAlign="center" bg="pink.50">
                            Box 2
                        </Text>
                    </Flex>
                    <Box>
                        <Text bg="tomato" color="white">
                            Box 3
                        </Text>
                    </Box>
                </Flex>
            </ThemeProvider>
        )
    }
}

export default Blog;