import React, { Component } from 'react';

import ArticleGrid from '../components/article/ArticleGrid';
import firebase from 'firebase';
import { Box } from '@chakra-ui/core';
import Loading from '../components/home/Loading';
import GetStarted from '../components/GetStarted';

class Articles extends Component {
    state = {
        page: <Loading />
    };

    // componentDidMount = () => {
    //     firebase.auth().onAuthStateChanged(user => {
    //         if (user) {
    //             this.setState({
    //                 page: <ArticleGrid />
    //             });
    //         } else {
    //             this.setState({
    //                 page: (
    //                     <GetStarted
    //                         text="You cannot view our collection of articles without an account!
    //            Make your free account to view all of our articles!"
    //                     />
    //                 )
    //             });
    //         }
    //     });
    // };

    render() {
        return (
            <Box width="100%">
                <ArticleGrid />
            </Box>
        );
    }
}

export default Articles;
