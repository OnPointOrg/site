import React, { Component } from 'react';
import {
   Heading,
   Box,
   Text,
   Divider,
   Image,
   SimpleGrid,
   Stack,
   Link as ChakraLink
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

let authorProfile = '';

export class ArticleContentPost extends Component {
   state = {
      article: null,
      articleTitle: null,
      articleAuthor: null,
      articleSummary: null,
      articleDate: null,
      articleContent: [],
      articleAuthorUuid: null,
      articleAuthorProfile: '',
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
            authorProfile = this.state.articleAuthor
               .toLowerCase()
               .split(' ')
               .join('');
            this.setState({
               articleAuthorProfile: authorProfile
            });
         });
   };

   render() {
      return (
         <div>
            {this.state.currentNav}
            <Box />
            <SimpleGrid minChildWidth="120px" spacing="100px" columns={2}>
               <Box
                  alignItems="center"
                  display="block"
                  mx="auto"
                  width="75%"
                  mt="25px"
               >
                  <Box mt="75px">
                     <Box width="100%" ml="25px">
                        <Heading
                           as="h1"
                           fontSize="50px"
                           textAlign="left"
                           mx="50px"
                        >
                           {this.state.articleTitle}
                        </Heading>
                     </Box>
                  </Box>

                  <Box>
                     <Stack isInline my="35px">
                        <Box ml="75px" textAlign="left" fontSize="20px">
                           By{' '}
                           <ChakraLink color="teal.500">
                              <Link to={`/${this.state.articleAuthorProfile}`}>
                                 {this.state.articleAuthor}
                              </Link>
                           </ChakraLink>
                        </Box>
                        <Text fontSize="20px">
                           <span>&bull;&bull;&bull;</span>
                        </Text>
                        <Text fontSize="20px">{this.state.articleDate}</Text>
                     </Stack>
                  </Box>
                  <Text paddingLeft="75px" marginTop="25px" width="125%">
                     {this.state.articleSummary}
                  </Text>
               </Box>
               <Box width="75%" my="auto">
                  <Image
                     my="75px"
                     src={this.state.articleImage}
                     display="block"
                     mx="auto"
                     rounded="lg"
                  />
               </Box>
            </SimpleGrid>
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
