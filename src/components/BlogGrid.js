import React, { Component } from 'react'
import { ThemeProvider, theme, Grid, Text, Box } from '@chakra-ui/core'
import BlogPost from './BlogPost'

export class BlogGrid extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Box margin="15px">
                    <Text textAlign="center" fontSize="2xl">All Articles</Text>
                    <Grid templateColumns="repeat(4, 1fr)" gap={6} margin="15px">
                        <BlogPost />
                        <BlogPost />
                        <BlogPost />
                        <BlogPost />
                        <BlogPost />
                        <BlogPost />
                        <BlogPost />
                        <BlogPost />
                    </Grid>
                </Box>
            </ThemeProvider>
        )
    }
}

export default BlogGrid;
