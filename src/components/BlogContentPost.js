import React, { Component } from "react";
import {
  ThemeProvider,
  Heading,
  Box,
  theme,
  Button,
  Text,
  Code,
  Grid,
  Link as ChakraLink,
  Divider,
} from "@chakra-ui/core";

import { FaQuoteLeft } from "react-icons/fa";

import firebase from "firebase";
import firestoreDatabase from "../firebase/config";
import getDocs, {
  articles,
  articleHtmlBody,
} from "../hooks/ReadArticlesFromFirebase";

import DefaultNav from "./DefaultNav";
import { Link } from "react-router-dom";

export class BlogContentPost extends Component {
  state = {
    article: null,
    articleTitle: "",
    articleAuthor: "",
    articleSummary: "",
    articleDate: "",
    articleContent: "",
  };

  componentDidMount = async () => {
    let docId = this.props.match.params.docId;
    //console.log("DOC ID FROM ROUTER");
    //console.log(docId);
    // getDocs(docId)

    // getDocs(docId)
    await getDocs(docId).then(() => {
      return articleHtmlBody;
    });
    console.log(
      "$$$$$$$$$$$$$$$$$$$$$$$$$$ HTML Array $$$$$$$$$$$$$$$$$$$$$$$$$$$$"
    );
    // articleHtmlBody
    console.log(articleHtmlBody);
    console.log(articleHtmlBody[0]);
    this.setState({
      articleTitle: articleHtmlBody[0],
      articleAuthor: articleHtmlBody[1],
      articleSummary: articleHtmlBody[2],
      articleDate: articleHtmlBody[4],
      articleContent: articleHtmlBody[5],
    });
  };

  returnArticleContent = () => {
    return this.state.articleContent;
  };

  // createArticle = async () => {};

  render() {
    //console.log("GENERATED HTML -----------------------------");
    // const articleBody = this.createArticle();
    //console.log(articleBody);
    return (
      <ThemeProvider theme={theme}>
        <DefaultNav />
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
              By{" "}
              <ChakraLink color="teal.500">
                <Link>{this.state.articleAuthor}</Link>
              </ChakraLink>
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
          {this.returnArticleContent()}
        </Box>

        {/* <Button onClick={this.createArticle}>
          Click Me For Juicy Firebse Data! Members Only!
        </Button> */}
      </ThemeProvider>
    );
  }
}

export default BlogContentPost;
