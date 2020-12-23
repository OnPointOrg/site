import React, { Component } from "react";
import { Heading, Box, Text, Divider, Image } from "@chakra-ui/core";

import firebase from "firebase";
import getDocs, {
  articleHtmlBody,
  articleHtmlInformation,
} from "../../hooks/ReadArticlesFromFirebase";

import DefaultNav from "../nav/DefaultNav";
import VerifiedNav from "../nav/VerifiedNav";

let currentArticleHtmlBody = [];

export class ArticleContentPost extends Component {
  state = {
    article: null,
    articleTitle: null,
    articleAuthor: null,
    articleSummary: null,
    articleDate: null,
    articleContent: [],
    currentNav: <DefaultNav />,
  };

  componentDidMount = async () => {
    currentArticleHtmlBody = [];
    currentArticleHtmlBody = articleHtmlBody;
    this.setState({
      articleContent: currentArticleHtmlBody,
    });
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

    await getDocs(docId)
      .then(() => {
        this.setState({ articleContent: [] });
        console.log("Get Docs Article Content:" + this.state.articleContent);
        console.log(currentArticleHtmlBody);
        this.setState({
          articleTitle: articleHtmlInformation[0],
          articleAuthor: articleHtmlInformation[1],
          articleSummary: articleHtmlInformation[2],
          articleDate: articleHtmlInformation[4],
          articleImage: articleHtmlInformation[5],
          articleContent: currentArticleHtmlBody,
        });
      })
      .then(() => {
        currentArticleHtmlBody = [];
        console.log(articleHtmlBody);
        console.log(currentArticleHtmlBody);
      });
  };

  render() {
    return (
      <div>
        {this.state.currentNav}
        <Box />
        <Box textAlign="center">
          <Image
            src={this.state.articleImage}
            display="block"
            mx="auto"
            height="auto"
            width="35%"
            mt="25px"
            rounded="lg"
          />
        </Box>
        <Box alignItems="center" display="block" mx="auto" width="75%">
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
            {this.state.articleDate}
          </Text>
          <Text padding="10px" textAlign="center" marginTop="25px">
            {this.state.articleSummary}
          </Text>
        </Box>
        <Box />
        <Box />
        <Divider mx="100px" my="50px" />
        <Box marginBottom="75px" display="block" mx="auto" width="80%">
          {this.state.articleContent.map((element) => (
            <Box margin="25px">{element}</Box>
          ))}
        </Box>
      </div>
    );
  }
}

export default ArticleContentPost;
