import React from 'react';
import { Box } from '@chakra-ui/core';
import DefaultNav from '../components/nav/DefaultNav';
import VerifiedNav from '../components/nav/VerifiedNav';
import firebase from 'firebase';

import Footer from '../components/Footer';

import ExplorePage from '../Test/ExplorePage';
import Loading from '../components/home/Loading';
import DefaultHome from '../components/home/DefaultHome';

export class Home extends React.Component {
   state = {
      currentNav: <DefaultNav />,
      user: '',
      page: <Loading />
   };

   componentDidMount = () => {
      firebase.auth().onAuthStateChanged((firebaseUser) => {
         if (firebaseUser) {
            this.setState({
               currentNav: <VerifiedNav />,
               page: <ExplorePage user={this.state.user} />
            });
         } else {
            this.setState({
               currentNav: <DefaultNav />,
               page: <DefaultHome />
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

export default Home;
