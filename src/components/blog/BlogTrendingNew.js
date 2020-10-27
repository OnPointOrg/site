import React, { Component } from "react";
import { Grid, Box, Divider, Heading } from "@chakra-ui/core";
import BlogPost from "./BlogPost";

import getDocs, { articles } from "../../hooks/ReadArticlesFromFirebase";

import firestoreDatabase from "../../firebase/config";

export class BlogTrendingNew extends Component {
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
      <div>
        <Box margin="15px">
          <Heading
            as="h1"
            fontSize="50px"
            textAlign="center"
            marginBottom="25px"
            marginTop="25px"
          >
            Trending Articles
          </Heading>
          <Divider />
          <Grid templateColumns="repeat(4, 1fr)" gap={6} margin="15px">
            {this.state.articles != null &&
              this.state.articles.slice(0, 4).map((article) => {
                return (
                  <BlogPost
                    title={article.title}
                    summary={article.summary}
                    date={article.content.time}
                    user={article.username}
                  />
                );
              })}
          </Grid>
        </Box>
        <Divider />
        <Box margin="15px">
          <Heading
            as="h1"
            fontSize="50px"
            textAlign="center"
            marginBottom="25px"
            marginTop="25px"
          >
            New Articles
          </Heading>
          <Divider />
          <Grid templateColumns="repeat(4, 1fr)" gap={6} margin="15px">
            {this.state.articles != null &&
              this.state.articles.slice(0, 4).map((article) => {
                return (
                  <BlogPost
                    title={article.title}
                    summary={article.summary}
                    date={article.content.time}
                    user={article.username}
                  />
                );
              })}
          </Grid>
        </Box>
      </div>
    );
  }
}

export default BlogTrendingNew;
