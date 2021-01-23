import React from 'react';
import {
   Box,
   Flex,
   Image,
   Text,
   Heading,
   Grid,
   Link as ChakraLink,
   IconButton
} from '@chakra-ui/core';
import ArticlePost from '../article/ArticlePost';
import VerifiedNav from '../nav/VerifiedNav';
import DefaultNav from '../nav/DefaultNav';

import firebase from 'firebase';

import firestoreDatabase from '../../firebase/config';

import { FaEnvelope } from 'react-icons/fa';
import Loading from '../home/Loading';

const articles = [];

export class Profile extends React.Component {
   state = {
      currentNav: <Loading />,
      user: null,
      articlesByUser: null
   };

   componentDidMount = async () => {
      firebase.auth().onAuthStateChanged((user) => {
         if (user) {
            this.setState({
               currentNav: <VerifiedNav />
            });
         }
      });
      console.log(this.state.user);

      await firestoreDatabase
         .collection('articles')
         .where('username', '==', this.state.user)
         .get()
         .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
               articles.push(doc);
            });
            this.setState({
               articlesByAuthor: articles
            });
         });
   };

   render() {
      return (
         <Box>
            {this.state.currentNav}
            <Flex>
               <Box
                  backgroundColor="#25353F"
                  width="50%"
                  height={window.screen.height}
               >
                  <Image
                     justifyContent="center"
                     mx="auto"
                     size="350px"
                     src="https://unavatar.now.sh/gravatar/aditya1rawat@gmail.com"
                  />
                  <Heading textAlign="center" my="25px">
                     Aditya Rawat
                  </Heading>
                  <ChakraLink
                     href="mailto:aditya1rawat@gmail.com"
                     title="Email"
                     color="teal.500"
                     isExternal
                     width="50%"
                  >
                     <Text
                        fontSize="20px"
                        textAlign="center"
                        width="50%"
                        mx="auto"
                     >
                        Email{' '}
                        <IconButton
                           color="gray.500"
                           variant="ghost"
                           aria-label="Email"
                           name="email"
                           fontSize="20px"
                           padding="10px"
                           icon={FaEnvelope}
                        />
                     </Text>
                  </ChakraLink>
               </Box>
               <Box width="100%" mt="10px">
                  <Heading textAlign="center">Articles</Heading>

                  <Grid
                     templateColumns="repeat(3, 1fr)"
                     gap={6}
                     mb="50px"
                     padding="25px"
                  >
                     {this.state.articlesByUser != null &&
                        this.state.articlesByUser.slice().map((article) => {
                           console.log(article.data());
                           console.log('DOCUMENT ID =====================');
                           console.log(article.id);

                           return (
                              <ArticlePost
                                 title={article.data().title}
                                 summary={article.data().summary}
                                 date={article.data().content.time}
                                 user={article.data().username}
                                 thumbnailImage={article.data().thumbnailImage}
                                 docId={article.id}
                                 category={article.data().category}
                              />
                           );
                        })}
                  </Grid>
               </Box>
            </Flex>
         </Box>
      );
   }
}

export default Profile;
