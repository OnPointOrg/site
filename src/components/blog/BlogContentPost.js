import React, { Component } from "react";
import { Heading, Box, Text, Grid, Divider } from "@chakra-ui/core";

import firebase from "firebase";
import getDocs, {
  articleHtmlBody,
  articleHtmlInformation,
} from "../../hooks/ReadArticlesFromFirebase";

import DefaultNav from "../nav/DefaultNav";
import VerifiedNav from "../nav/VerifiedNav";

// import { Link } from "react-router-dom";

export class BlogContentPost extends Component {
  state = {
    article: null,
    articleTitle: null,
    articleAuthor: null,
    articleSummary: null,
    articleDate: null,
    articleContent: null,
    currentNav: <DefaultNav />,
  };

  componentDidMount = async () => {
    console.log(this.props.timestamp);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          currentNav: <VerifiedNav />,
        });
      } else {
        this.setState({
          currentNav: <DefaultNav />,
        });
      }
    });

    let docId = this.props.match.params.docId;

    await getDocs(docId).then(() => {
      console.log(this.state.articleContent);
      console.log(articleHtmlBody);
      // return articleHtmlBody;
    });

    this.setState({
      articleTitle: articleHtmlInformation[0],
      articleAuthor: articleHtmlInformation[1],
      articleSummary: articleHtmlInformation[2],
      articleDate: articleHtmlInformation[4],
      articleContent: articleHtmlBody,
    });

    // let currentPath = window.location.pathname;
    // this.props.history.replace(`${currentPath}/replace`);
    // setTimeout(() => {
    //   this.props.history.replace(currentPath);

    // }, 0);
  };

  returnArticleContent = async () => {
    console.log(this.state.articleContent);
    return this.state.articleContent;
  };

  render() {
    return (
      <div>
        {this.state.currentNav}
        <Grid templateColumns="repeat(4, 1fr)" gap={1}>
          <Box />
          <Box width="200%" alignItems="center">
            <Heading
              as="h1"
              fontSize="50px"
              textAlign="center"
              mx="50px"
              my="25px"
            >
              {this.state.articleTitle}
            </Heading>
            <Text textAlign="center" fontSize="25px">
              By <Text as="strong">{this.state.articleAuthor}</Text>
            </Text>
            <Text textAlign="center" fontSize="25px">
              &bull;&bull;&bull;
            </Text>
            <Text textAlign="center" fontSize="25px">
              {this.state.articleDate}
            </Text>
            <Text padding="10px" textAlign="center" marginTop="25px">
              {this.state.articleSummary}
            </Text>
          </Box>
          <Box />
          <Box />
        </Grid>
        <Divider mx="100px" my="50px" />
        <Box mx="125px" marginBottom="75px">
          {articleHtmlBody.map((element) => (
            <Box margin="25px">{element}</Box>
          ))}
        </Box>
      </div>
    );
  }
}

export default BlogContentPost;
