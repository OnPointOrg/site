import React from 'react';
import firestoreDatabase from '../firebase/config';
import {
   Heading,
   List,
   ListItem,
   CloseButton,
   Alert,
   AlertIcon,
   AlertTitle,
   AlertDescription,
   Code,
   Divider
} from '@chakra-ui/core';
import Quote from '../components/article/Quote';

let views = null;

const convertFromUnix = (date) => {
   const dateObject = new Date(date);
   date = dateObject.toLocaleDateString('en-US');
   return date;
};

export const articleHtmlInformation = [];
export const articleHtmlBody = [];
export let words = 0;

const getDocs = async (articleID) => {
   await firestoreDatabase
      .collection('articles')
      .doc(articleID)
      .get()
      .then((querySnapshot) => {
         const article = querySnapshot.data();
         views = article.views + 1;
         articleHtmlInformation.push(article.title);
         articleHtmlInformation.push(article.username);
         articleHtmlInformation.push(article.summary);
         articleHtmlInformation.push(article.category);
         articleHtmlInformation.push(convertFromUnix(article.content.time));
         articleHtmlInformation.push(article.thumbnailImage);
         articleHtmlInformation.push(article.email);
         articleHtmlInformation.push(views);

         caseChecks(article);
      })
      .then(() => {
         firestoreDatabase.collection('articles').doc(articleID).update({
            views: views
         });
      })
      .then(() => {
         return articleHtmlBody;
      });
};

const caseChecks = (article) => {
   let contentBlockLength = article.content.blocks.length;
   for (let i = 0; i < contentBlockLength; i++) {
      const contentType = article.content.blocks[i].type;
      console.log(contentType);
      switch (contentType) {
         default:
            break;

         case 'paragraph':
            const paragraphText = article.content.blocks[i].data.text;
            console.log(paragraphText);
            articleHtmlBody.push(
               <p dangerouslySetInnerHTML={{ __html: paragraphText }} />
            );
            words += paragraphText.split(' ').length;
            console.log(words);
            break;

         case 'header':
            const headerText = article.content.blocks[i].data.text;
            articleHtmlBody.push(<Heading pt="50px">{headerText}</Heading>);
            words += headerText.split(' ').length;
            console.log(words);
            break;

         case 'list':
            const items = article.content.blocks[i].data.items;
            console.log(items);
            items.map(() => {
               words += 1;
            });
            console.log(words);
            const allItems = [];
            for (let j = 0; j < items.length; j++) {
               allItems.push(items[j]);
            }

            if (article.content.blocks[i].data.style === 'ordered') {
               articleHtmlBody.push(
                  <List as="ol" styleType="decimal">
                     {allItems.map((listItem) => (
                        <ListItem>{listItem}</ListItem>
                     ))}
                  </List>
               );
            } else {
               articleHtmlBody.push(
                  <List styleType="disc">
                     {allItems.map((listItem) => (
                        <ListItem>{listItem}</ListItem>
                     ))}
                  </List>
               );
            }
            break;

         case 'warning':
            const warningText = article.content.blocks[i].data.message;
            const warningTitle = article.content.blocks[i].data.title;
            words += warningTitle.split(' ').length;
            words += warningText.split(' ').length;
            articleHtmlBody.push(
               <Alert status="error">
                  <AlertIcon />
                  <AlertTitle mr={2}>{warningTitle}</AlertTitle>
                  <AlertDescription>{warningText}</AlertDescription>
                  <CloseButton position="absolute" right="8px" top="8px" />
               </Alert>
            );
            break;

         case 'code':
            const codeContent = article.content.blocks[i].data.code;
            words += codeContent.split(' ').length;
            articleHtmlBody.push(
               <Code
                  display="block"
                  whiteSpace="pre"
                  fontFamily="Source Code Pro"
                  p="10px"
                  borderRadius="5px"
                  children={codeContent}
               />
            );

            break;

         case 'linkTool':
            break;

         case 'delimiter':
            articleHtmlBody.push(<Divider m="10" />);
            break;

         case 'quote':
            const quote = article.content.blocks[i].data.text;
            const credits = article.content.blocks[i].data.caption;
            words += quote.split(' ').length;
            words += credits.split(' ').length;
            articleHtmlBody.push(<Quote quote={quote} credits={credits} />);
            break;

         case 'image':
            console.log('--------- Image URL Inside The Image Case ---------');
            console.log(article.content.blocks[i].data.file);
            const imageUrl = article.content.blocks[i].data.file.url;
            const imageCaption = article.content.blocks[i].data.caption;
            articleHtmlBody.push(
               <figure>
                  <img
                     src={imageUrl}
                     alt={imageCaption}
                     style={{ borderRadius: '10px' }}
                  />
                  <figcaption
                     style={{
                        textAlign: 'center',
                        marginTop: '5px',
                        fontSize: '20px'
                     }}
                  >
                     {imageCaption}
                  </figcaption>
               </figure>
            );
            break;
      }
   }
   return articleHtmlBody && words;
};

export default getDocs;
