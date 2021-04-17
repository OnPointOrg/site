import React from 'react';
import { Box } from '@chakra-ui/core';
import firebase from 'firebase';

import ExplorePage from '../components/home/ExplorePage';
import Loading from '../components/home/Loading';
import DefaultHome from '../components/home/DefaultHome';

export class Home extends React.Component {
    state = {
        page: <Loading />
    };

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                this.setState({
                    page: <ExplorePage />
                });
            } else {
                this.setState({
                    page: <DefaultHome />
                });
            }
        });
    };

    render() {
        return <Box width="100%">{this.state.page}</Box>;
    }
}

export default Home;
