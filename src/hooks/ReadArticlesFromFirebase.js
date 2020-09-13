import React, { Component } from "react";
import firebase from "firebase";
import firestoreDatabase from "../firebase/config";
import { Heading, List, ListItem, Text, Box, CloseButton, Alert, AlertIcon, AlertTitle, AlertDescription, Code } from "@chakra-ui/core";
import { FaQuoteLeft } from "react-icons/fa";

const convertFromUnix = (date) => {
  const dateObject = new Date(date);

  date = dateObject.toLocaleString();
  return date;
};

// export const finalArray = null;
export const articleHtmlBody = [];

const getDocs = async (articleID) => {
  //console.log("Article ID: " + articleID);
  await firestoreDatabase
    .collection("articles")
    .doc(articleID)
    .get()
    .then((querySnapshot) => {
      //console.log("---------------------------------------------------");
      //console.log(articleID + " ========== " + querySnapshot.data());
      const article = querySnapshot.data();
      // articles.push(article);
      console.log("This Is Article JSON for Article Id# " + articleID);
      //console.log(querySnapshot.id);
      // console.log('Article Information ------')
      console.log(article);
      articleHtmlBody.push(article.title);
      articleHtmlBody.push(article.username);
      articleHtmlBody.push(article.summary);
      articleHtmlBody.push(article.category);
      articleHtmlBody.push(convertFromUnix(article.content.time));

      console.log("Article Title: " + article.title);
      //console.log(article.category);
      //console.log(article.username);
      // console.log(article.content.blocks[0].type);
      // console.log(article.content.blocks[0].data.text);
      //console.log();

      caseChecks(article);
      console.log("The Article Array>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      //console.log(typeof articles);
      console.log(articleHtmlBody);
      return articleHtmlBody;
    })
    .then(() => {
      console.log("The Article Array>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      //console.log(typeof articles);
      console.log(articleHtmlBody);
      return articleHtmlBody;
    });
};

const caseChecks = (article) => {
  let contentBlockLength = article.content.blocks.length;
  for (let i = 0; i < contentBlockLength; i++) {
    const contentType = article.content.blocks[i].type;
    switch (contentType) {
      case "paragraph":
        const paragraphText = article.content.blocks[i].data.text;
        console.log("Paragraph >>>>>> : " + paragraphText);
        articleHtmlBody.push(<Text>{paragraphText}</Text>);
        console.log(articleHtmlBody.length);
        break;
      case "header":
        const headerText = article.content.blocks[i].data.text;
        articleHtmlBody.push(<Heading>{headerText}</Heading>);
        break;

      case "list":
        const items = article.content.blocks[i].data.items;
        //console.log(items);
        const allItems = [];
        for (let j = 0; j < items.length; j++) {
          allItems.push(<ListItem>{items[j]}</ListItem>);
        }

        const listArray = [];
        articleHtmlBody.push(<List>{allItems}</List>);
        break;
      // --------------------------
      case "warning":
        const warningText = article.content.blocks[i].data.message;
        const warningTitle = article.content.blocks[i].data.title;
        articleHtmlBody.push(
          <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>{ warningTitle }</AlertTitle>
            <AlertDescription>
              { warningText }
            </AlertDescription>
            <CloseButton position="absolute" right="8px" top="8px" />
          </Alert>
        );

        break;
      // --------------------------
      case "code":
        console.log("I am in Code ..............");
        const codeContent = article.content.blocks[i].data.code;
        articleHtmlBody.push(
          <Code>{codeContent}</Code>
        );

        console.log(" Article Length: " + articleHtmlBody.length);
        break;
      // --------------------------
      case "linkTool":
        //Working On At The Moment
        break;
      // --------------------------
      case "quote":
        const quote = article.content.blocks[i].data.text;
        const credits = article.content.blocks[i].data.caption;
        articleHtmlBody.push(
          <Box
            width="900px"
            borderWidth="1px"
            rounded="lg"
            overflow="hidden"
            mx="125px"
            my="25px"
          >
            <Box marginTop="50px" marginLeft="50px">
              <Heading>
                <FaQuoteLeft />
              </Heading>
            </Box>
            <Box>
              <Box
                marginTop="30px"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
              >
                <Text fontSize="xl" mx="100px">
                  Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit
                  amet consectetur adipiscing elit pellentesque. Velit egestas
                  dui id ornare. Scelerisque eleifend donec pretium vulputate
                  sapien nec sagittis aliquam malesuada. Vel quam elementum
                  pulvinar etiam. Id diam maecenas ultricies mi eget mauris
                  pharetra.{" "}
                </Text>
                <Box
                  d="flex"
                  alignItems="center"
                  color="gray.600"
                  marginTop="50px"
                  margin="50px"
                >
                  <Text fontSize="lg">- Lorem Ipsum</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        );
        break;
    }
  }
  return articleHtmlBody;
};

export default getDocs;
