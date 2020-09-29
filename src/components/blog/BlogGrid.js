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

import getDocs, { articles } from "../../hooks/ReadArticlesFromFirebase";

import firestoreDatabase from "../../firebase/config";
import { Redirect } from "react-router";

export class BlogGrid extends Component {
  state = {
    // articles: null,
    documents: null,
  };

  componentDidMount = () => {
    firestoreDatabase
      .collection("articles")
      .get()
      .then((querySnapshot) => {
        // const articles = [];
        const documents = [];
        querySnapshot.forEach((doc) => {
          // const article = doc.data();
          // articles.push(article);
          console.log("ARTICLE ID: ==========================");
          console.log(doc.id);
          documents.push(doc);
        });
        this.setState({
          // articles: articles,
          documents: documents,
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
            fontSize="50px"
            textAlign="center"
            marginBottom="25px"
            marginTop="25px"
          >
            All Articles
          </Heading>
          <Divider />
          <Grid templateColumns="repeat(4, 1fr)" gap={6} margin="15px">
            {/* {this.state.articles != null &&
              this.state.articles.map((article) => {
                return (
                  <BlogPost
                    title={article.title}
                    summary={article.summary}
                    date={article.content.time}
                    user={article.username}
                  />
                );
              })} */}
            {this.state.documents != null &&
              this.state.documents.map((document) => {
                console.log("DOCUMENT ID =====================");
                console.log(document.id);
                return (
                  <BlogPost
                    docId={document.id}
                    title={document.data().title}
                    summary={document.data().summary}
                    date={document.data().content.time}
                    user={document.data().username}
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
