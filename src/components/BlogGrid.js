import React, { Component } from "react";
import {
  ThemeProvider,
  theme,
  Grid,
  Heading,
  Box,
  Divider,
  Button,
} from "@chakra-ui/core";
import BlogPost from "./BlogPost";

import getDocs, { articles } from "../hooks/ReadArticlesFromFirebase";

import firestoreDatabase from "../firebase/config";

export class BlogGrid extends Component {
  state = {
    articles: null,
  };

  componentDidMount = () => {
    firestoreDatabase
      .collection("articles")
      .get()
      .then((querySnapshot) => {
        const articles = [];
        querySnapshot.forEach((doc) => {
          const article = doc.data();
          articles.push(article);
        });
        this.setState({
          articles: articles,
        });
      });
  };

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
            {this.state.articles != null &&
              this.state.articles.map((article) => {
                return (
                  <BlogPost
                    title={article.title}
                    summary={article.summary}
                    date={article.content.time}
                    user={article.user}
                  />
                );
              })}
          </Grid>
        </Box>
      </ThemeProvider>
    );
  }
}

export default BlogGrid;