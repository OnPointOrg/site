import React, { Component } from 'react';
import {
  Heading,
  Box,
  Text,
  Divider,
  Image,
  SimpleGrid,
  Stack
} from '@chakra-ui/core';

import { Link } from 'react-router-dom';

import firebase from 'firebase';
import getDocs, {
  articleHtmlBody,
  articleHtmlInformation
} from '../../hooks/ReadArticlesFromFirebase';

import DefaultNav from '../nav/DefaultNav';
import VerifiedNav from '../nav/VerifiedNav';

let currentArticleHtmlBody = [];

export class ArticleContentPost extends Component {
  state = {
    article: null,
    articleTitle: null,
    articleAuthor: null,
    articleSummary: null,
    articleDate: null,
    articleContent: [],
    currentNav: <DefaultNav />
  };

  componentDidMount = async () => {
    currentArticleHtmlBody = [];
    currentArticleHtmlBody = articleHtmlBody;
    this.setState({
      articleContent: currentArticleHtmlBody
    });
    console.log(this.props.timestamp);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          currentNav: <VerifiedNav />
        });
      } else {
        this.setState({
          currentNav: <DefaultNav />
        });
      }
    });

    let docId = this.props.match.params.docId;

    await getDocs(docId)
      .then(() => {
        this.setState({ articleContent: [] });
        console.log('Get Docs Article Content:' + this.state.articleContent);
        console.log(currentArticleHtmlBody);
        this.setState({
          articleTitle: articleHtmlInformation[0],
          articleAuthor: articleHtmlInformation[1],
          articleSummary: articleHtmlInformation[2],
          articleDate: articleHtmlInformation[4],
          articleImage: articleHtmlInformation[5],
          articleContent: currentArticleHtmlBody
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
        {/* <Box textAlign="center" mt="50px">
          
        </Box> */}
        <Box
          alignItems="center"
          display="block"
          mx="auto"
          width="75%"
          mt="25px"
        >
          <SimpleGrid minChildWidth="120px" spacing="250px" columns={2}>
            <Box width="175%" margin="25px">
              <Heading
                as="h1"
                fontSize="50px"
                textAlign="left"
                mx="50px"
                my="15px"
                mt="50px"
              >
                {this.state.articleTitle}
              </Heading>
            </Box>
            <Box width="100%" margin="15px">
              <Image
                src={this.state.articleImage}
                display="block"
                mx="auto"
                height="auto"
                width="60%"
                rounded="lg"
              />
            </Box>
          </SimpleGrid>
          <Box>
            <Stack isInline>
              <Box ml="75px" textAlign="left" fontSize="15px">
                By{' '}
                <Link to={`/${this.state.articleAuthor}`}>
                  <Box as="span" textDecor="underline">
                    {this.state.articleAuthor}
                  </Box>
                </Link>
              </Box>
              <Text fontSize="15px">{this.state.articleDate}</Text>
            </Stack>
          </Box>
          <Text paddingLeft="75px" marginTop="25px">
            {this.state.articleSummary}
          </Text>
        </Box>
        <Box />
        <Box />
        <Divider mx="100px" my="50px" />
        <Box marginBottom="75px" display="block" mx="auto" width="55%">
          {this.state.articleContent.map((element) => (
            <Box margin="25px">{element}</Box>
          ))}
        </Box>
      </div>
    );
  }
}

export default ArticleContentPost;
