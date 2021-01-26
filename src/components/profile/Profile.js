import React from 'react';
import {
   Box,
   Flex,
   Image,
   Text,
   Heading,
   Grid,
   Link as ChakraLink,
   IconButton,
   Button
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
      articlesByUser: null,
      email: null
   };

   componentDidMount = () => {
      firebase.auth().onAuthStateChanged((user) => {
         if (user) {
            this.setState({
               currentNav: <VerifiedNav />,
               user: user.displayName,
               email: user.email
            });

            firestoreDatabase
               .collection('articles')
               .where('username', '==', this.state.user)
               .get()
               .then((querySnapshot) => {
                  console.log(this.state.user);
                  console.log(querySnapshot);
                  querySnapshot.forEach((doc) => {
                     console.log('DOC' + doc);
                     articles.push(doc);
                  });
                  this.setState({
                     articlesByAuthor: articles
                  });
               });
         } else {
            this.setState({
               currentNav: <DefaultNav />
            });
         }
      });

      // console.log(this.state.user);
   };

   render() {
      return (
         <Box height="88vh" overflow="none">
            {this.state.currentNav}
            <Flex overflowY="hidden" height="100%">
               <Box backgroundColor="#25353F" width="50%">
                  <Image
                     my="25px"
                     justifyContent="center"
                     mx="auto"
                     size="350px"
                     src="https://unavatar.now.sh/gravatar/aditya1rawat@gmail.com"
                  />
                  <Heading textAlign="center" my="25px">
                     {this.state.user}
                  </Heading>
                  <ChakraLink
                     href={`mailto:${this.state.email}`}
                     title="Email"
                     color="teal.500"
                     isExternal
                     textAlign="center"
                     display="block"
                     textDecoration="none"
                  >
                     <Button>
                        Email <FaEnvelope style={{ marginLeft: '15px' }} />
                     </Button>
                  </ChakraLink>
               </Box>
               <Box width="100%" mt="10px" overflow="scroll" overflowX="hidden">
                  <Heading textAlign="center">Articles</Heading>

                  <Grid
                     templateColumns="repeat(3, 1fr)"
                     gap={6}
                     my="25px"
                     padding="25px"
                  >
                     {articles != null &&
                        articles.map((article) => {
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
                                 views={article.data().views}
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
