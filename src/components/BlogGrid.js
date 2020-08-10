import React, { Component } from 'react'
import { ThemeProvider, theme, Grid } from '@chakra-ui/core'
import BlogPost from './BlogPost'

export class BlogGrid extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Grid templateColumns="repeat(4, 1fr)" gap={6} margin="15px">
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                </Grid>
            </ThemeProvider>
        )
    }
}

export default BlogGrid;
