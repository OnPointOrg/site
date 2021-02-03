import React, { Component } from 'react';
import { Grid, Heading, Box, Divider } from '@chakra-ui/core';
import ArticlePost from './ArticlePost';
import firestoreDatabase from '../../firebase';

export class ArticleGrid extends Component {
   state = {
      documents: null
   };

   componentDidMount = () => {
      firestoreDatabase
         .collection('articles')
         .orderBy('date', 'desc')
         .get()
         .then((querySnapshot) => {
            const documents = [];
            querySnapshot.forEach((doc) => {
               console.log('ARTICLE ID: ==========================');
               console.log(doc.id);
               documents.push(doc);
            });
            this.setState({
               documents: documents
            });
         });
   };

   render() {
      return (
         <Box margin="15px">
            <Heading
               as="h1"
               fontSize="50px"
               textAlign="center"
               marginBottom="25px"
               marginTop="25px"
            >
               All Articles
            </Heading>
            <Divider />
            <Grid templateColumns="repeat(4, 1fr)" gap={6} margin="15px">
               {this.state.documents != null &&
                  this.state.documents.map((document) => {
                     console.log('DOCUMENT ID =====================');
                     console.log(document.id);
                     return (
                        <ArticlePost
                           docId={document.id}
                           title={document.data().title}
                           summary={document.data().summary}
                           date={document.data().date}
                           user={document.data().username}
                           category={document.data().category}
                           thumbnailImage={document.data().thumbnailImage}
                           userUuid={document.data().useruid}
                           views={document.data().views}
                        />
                     );
                  })}
            </Grid>
         </Box>
      );
   }
}

export default ArticleGrid;
