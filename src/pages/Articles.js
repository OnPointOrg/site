import React, { Component } from 'react';
import DefaultNav from '../components/nav/DefaultNav';
import VerifiedNav from '../components/nav/VerifiedNav';
import ArticleGrid from '../components/article/ArticleGrid';
import Footer from '../components/Footer';
import firebase from 'firebase';
import { Box } from '@chakra-ui/core';
import Loading from '../components/home/Loading';
import GetStarted from '../components/GetStarted';

class Articles extends Component {
    state = {
        currentNav: <DefaultNav />,
        page: <Loading />
    };

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    currentNav: <VerifiedNav />,
                    page: <ArticleGrid />
                });
            } else {
                this.setState({
                    currentNav: <DefaultNav />,
                    page: (
                        <GetStarted
                            text="You cannot view our collection of articles without an account!
               Make your free account to view all of our articles!"
                        />
                    )
                });
            }
        });
    };

    render() {
        return (
            <Box width="100%">
                {this.state.currentNav}
                {this.state.page}
                <Footer />
            </Box>
        );
    }
}

export default Articles;
