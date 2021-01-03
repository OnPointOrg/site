import React, { Component } from 'react';
import DefaultNav from '../components/nav/DefaultNav';
import VerifiedNav from '../components/nav/VerifiedNav';
import ArticleGrid from '../components/article/ArticleGrid';
import Footer from '../components/Footer';
import firebase from 'firebase';
import { Box } from '@chakra-ui/core';

class Articles extends Component {
  state = {
    currentNav: <DefaultNav />
  };

  componentDidMount = () => {
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
  };

  render() {
    return (
      <Box width="100%">
        {this.state.currentNav}
        <ArticleGrid />
        <Footer />
      </Box>
    );
  }
}

export default Articles;
