import React, { Component } from "react";
import { Heading } from "@chakra-ui/core";

import firebase from "firebase";
import firestoreDatabase from "../firebase/config";
import getDocs, { articles } from "../hooks/ReadArticlesFromFirebase";

import { ThemeProvider, theme, Button } from "@chakra-ui/core";

export class BlogContentPost extends Component {
  state = {
    article: null,
  };

  componentDidMount = () => {
      console.log("===============================================")
      console.log("We ARE IN THE BlogContentPost.js COMPONENT")
      this.createArticle()
  }

  createArticle = () => {
    let docId = this.props.match.params.docId;
    console.log("DOC ID FROM ROUTER");
    console.log(docId)
    console.log(getDocs(docId));
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Heading>Single Blog Post</Heading>
        <Button onClick={this.createArticle}>
          Click Me For Juicy Firebse Data! Members Only!
        </Button>
      </ThemeProvider>
    );
  }
}

export default BlogContentPost;
