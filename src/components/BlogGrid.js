import React, { Component } from "react";
import {
  ThemeProvider,
  theme,
  Grid,
  Heading,
  Box,
  Divider,
} from "@chakra-ui/core";
import BlogPost from "./BlogPost";

export class BlogGrid extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Divider />
        <Box margin="15px">
          <Heading
            as="h1"
            fontSize="100px"
            textAlign="center"
            marginBottom="25px"
            marginTop="25px"
          >
            All Articles
          </Heading>
          <Divider />
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
    );
  }
}

export default BlogGrid;
