import React, { Component } from 'react';
import { Grid, Box, Divider, Heading } from '@chakra-ui/core';

import firestoreDatabase from '../../firebase/config';

import HomeArticles from './HomeArticles';

export class ArticleTrendingNew extends Component {
  state = {
    articles: null,
    show: false
  };

  handleToggle = () => {
    this.setState({
      show: !this.state.show
    });
  };

  componentDidMount = () => {
    firestoreDatabase
      .collection('articles')
      .get()
      .then((querySnapshot) => {
        const articles = [];
        querySnapshot.forEach((doc) => {
          const article = doc.data();
          articles.push(article);
        });
        this.setState({
          articles: articles
        });
      });
  };

  render() {
    return (
      <div>
        <Box margin="15px">
          <Heading as="h2" fontSize="50px" textAlign="center">
            Trending Articles
          </Heading>
          <Divider />
          <Grid templateColumns="repeat(3, 1fr)" gap={6} margin="15px">
            {this.state.articles != null &&
              this.state.articles.slice(0, 4).map((article) => {
                console.log(article);
                console.log('DOCUMENT ID =====================');
                console.log(article.documentId);
                return (
                  <HomeArticles
                    title={article.title}
                    summary={article.summary}
                    time={article.content.time}
                    username={article.username}
                    docId={article.documentId}
                  />
                );
              })}
          </Grid>
        </Box>
      </div>
    );
  }
}

export default ArticleTrendingNew;
