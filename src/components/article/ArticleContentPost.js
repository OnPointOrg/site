import React, { Component } from 'react';
import {
   Heading,
   Box,
   Text,
   Divider,
   Image,
   Stack,
   Link as ChakraLink,
   Avatar,
   Grid
} from '@chakra-ui/core';

import firebase from 'firebase';

import getDocs, {
   articleHtmlBody,
   words,
   articleHtmlInformation
} from '../../hooks/ReadArticlesFromFirebase';

import DefaultNav from '../nav/DefaultNav';
import VerifiedNav from '../nav/VerifiedNav';
import ArticlePost from './ArticlePost';
import firestoreDatabase from '../../firebase/config';

let currentArticleHtmlBody = [];

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
      articleAuthorEmail: null,
      articleDate: null,
      articleContent: [],
      articleAuthorUuid: null,
      articlesByAuthor: null,
      documentId: null,
      currentNav: <DefaultNav />
   };

   componentDidMount = async () => {
      this.setState({
         articleContent: currentArticleHtmlBody
      });
      console.log(this.props.timestamp);
      firebase.auth().onAuthStateChanged((user) => {
         if (user) {
            console.log(articleHtmlInformation[1]);
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

      await getDocs(docId).then(() => {
         this.setState({ articleContent: [], documentId: docId });
         console.log('Get Docs Article Content:' + this.state.articleContent);

         this.setState({
            articleTitle: articleHtmlInformation[0],
            articleAuthor: articleHtmlInformation[1],
            articleSummary: articleHtmlInformation[2],
            articleDate: articleHtmlInformation[4],
            articleImage: articleHtmlInformation[5],
            articleAuthorEmail: articleHtmlInformation[6],
            articleContent: articleHtmlBody
         });
      });

      firestoreDatabase
         .collection('articles')
         .where('username', '==', this.state.articleAuthor)
         .get()
         .then((querySnapshot) => {
            const articles = [];
            querySnapshot.forEach((doc) => {
               console.log(doc.id);
               console.log(doc.data);
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
            <Box
               as="section"
               alignItems="center"
               display="block"
               mx="auto"
               width="75%"
               mt="25px"
               overflow="hidden"
            >
               <Box>
                  <Box width="80%" mx="auto">
                     <Heading color="white" fontSize="50px" textAlign="center">
                        {this.state.articleTitle}
                     </Heading>
                  </Box>
               </Box>

               <Box>
                  <Stack isInline mt="35px" width="65%" mx="auto">
                     <Box textAlign="left" fontSize="15px" width="75%">
                        <ChakraLink
                           color="teal.500"
                           href={`mailto:${this.state.articleAuthorEmail}`}
                        >
                           <Avatar
                              src={`https://unavatar.now.sh/gravatar/${this.state.articleAuthorEmail}`}
                              size="sm"
                              mx="10px"
                           />
                           <Text fontSize="20px" as="span">
                              {this.state.articleAuthor}
                           </Text>
                        </ChakraLink>
                     </Box>
                     <Box width="50%" textAlign="right">
                        <Text fontSize="20px" color="white">
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
                  <Box margin="25px" color="white">
                     {element}
                  </Box>
               ))}
            </Box>

            <Box
               as="section"
               alignItems="center"
               display="block"
               mx="auto"
               width="75%"
               overflow="hidden"
            >
               <Heading textAlign="center" color="white" my="50px">
                  More Articles By {this.state.articleAuthor}
               </Heading>
               <Grid templateColumns="repeat(3, 1fr)" gap={6} mb="50px">
                  {this.state.articlesByAuthor != null &&
                     this.state.articlesByAuthor.slice(0, 4).map((article) => {
                        console.log(article.data());
                        console.log('DOCUMENT ID =====================');
                        console.log(article.id);
                        if (article.id !== this.state.documentId) {
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
                        }
                     })}
               </Grid>
            </Box>
         </Box>
      );
   }
}

export default ArticleContentPost;
