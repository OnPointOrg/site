import React, { Component } from 'react';
import {
   Heading,
   Box,
   Text,
   Divider,
   Image,
   Stack,
   Link as ChakraLink,
   Avatar
} from '@chakra-ui/core';

import { Link } from 'react-router-dom';

import firebase from 'firebase';
import getDocs, {
   articleHtmlBody,
   words,
   articleHtmlInformation
} from '../../hooks/ReadArticlesFromFirebase';

import DefaultNav from '../nav/DefaultNav';
import VerifiedNav from '../nav/VerifiedNav';

let currentArticleHtmlBody = [];

let email = '';
let authorProfile = '';

const calculateReadingTime = (numOfWords) => {
   const averageReadingSpeed = 200;
   let readingTime = 0;
   if (numOfWords > 0 && numOfWords < 200) {
      readingTime = '<1';
   } else if (numOfWords > 200) {
      readingTime = Math.ceil(numOfWords / averageReadingSpeed);
   }
   return readingTime;
};

export class ArticleContentPost extends Component {
   state = {
      article: null,
      articleTitle: null,
      articleAuthor: null,
      articleDate: null,
      articleContent: [],
      articleAuthorUuid: null,
      articleAuthorProfile: '',
      currentNav: <DefaultNav />
   };

   componentDidMount = async () => {
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
            console.log(
               'Get Docs Article Content:' + this.state.articleContent
            );

            this.setState({
               articleTitle: articleHtmlInformation[0],
               articleAuthor: articleHtmlInformation[1],
               articleSummary: articleHtmlInformation[2],
               articleDate: articleHtmlInformation[4],
               articleImage: articleHtmlInformation[5],
               articleContent: articleHtmlBody
            });
         })
         .then(() => {
            console.log(words);
            authorProfile = this.state.articleAuthor
               .toLowerCase()
               .split(' ')
               .join('');
            this.setState({
               articleAuthorProfile: authorProfile
            });
            email = firebase.auth().currentUser.email;
         });
   };

   render() {
      return (
         <div>
            {this.state.currentNav}
            <Box />
            <Box
               alignItems="center"
               display="block"
               mx="auto"
               width="75%"
               mt="25px"
               overflow="hidden"
            >
               <Box>
                  <Box width="80%" mx="auto">
                     <Heading as="h1" fontSize="50px" textAlign="center">
                        {this.state.articleTitle}
                     </Heading>
                  </Box>
               </Box>

               <Box>
                  <Stack isInline mt="35px" width="65%" mx="auto">
                     <Box textAlign="left" fontSize="15px" width="75%">
                        <ChakraLink color="teal.500">
                           <Link to={`/${this.state.articleAuthorProfile}`}>
                              <Avatar
                                 src={`https://unavatar.now.sh/gravatar/${email}`}
                                 size="sm"
                                 mx="10px"
                              />
                              <Text fontSize="20px" as="span">
                                 {this.state.articleAuthor}
                              </Text>
                           </Link>
                        </ChakraLink>
                     </Box>
                     <Box width="50%" textAlign="right">
                        <Text fontSize="20px">
                           {this.state.articleDate} &bull;{' '}
                           {`${calculateReadingTime(words)} min reading`}
                        </Text>
                     </Box>
                  </Stack>
               </Box>
            </Box>
            <Box width="50%" mx="auto" textAlign="center">
               <Image
                  my="50px"
                  src={this.state.articleImage}
                  display="block"
                  mx="auto"
                  justifyContent="center"
                  rounded="lg"
               />
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
