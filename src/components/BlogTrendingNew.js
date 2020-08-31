import React, { Component } from "react";
import {
  ThemeProvider,
  theme,
  Grid,
  Box,
  Divider,
  Flex,
  Heading,
} from "@chakra-ui/core";
import BlogPost from "./BlogPost";

import getDocs, { articles } from "../hooks/ReadArticlesFromFirebase";

import firestoreDatabase from "../firebase/config";

export class BlogTrendingNew extends Component {

  state = {
    articles: null
  }

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
        <Box margin="25px">
          <Flex align="center">
            <Flex>
              <Heading fontSize="35px">Trending Articles</Heading>
            </Flex>
            <Flex width="600px" align="center" justify="center" />
            <Heading fontSize="35px">New Articles</Heading>
          </Flex>
        </Box>
        <Divider />
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Box margin="50px">
            <Flex align="center">
            {this.state.articles != null &&
              this.state.articles.map((article) => {
                return (
                  <BlogPost
                    title={article.title}
                    summary={article.summary}
                    date={article.content.time}
                    user={article.username}
                  />
                );
              })}
              <Flex marginRight="15px" />
              {this.state.articles != null &&
              this.state.articles.map((article) => {
                return (
                  <BlogPost
                    title={article.title}
                    summary={article.summary}
                    date={article.content.time}
                    user={article.username}
                  />
                );
              })}
            </Flex>
          </Box>
          <Box margin="50px">
            <Flex align="center">
              <BlogPost />
              <Flex marginRight="15px" />
              <BlogPost />
            </Flex>
          </Box>
        </Grid>
      </ThemeProvider>
    );
  }
}

export default BlogTrendingNew;
