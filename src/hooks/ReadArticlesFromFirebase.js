import React, { Component } from "react";
import firebase from "firebase";
import firestoreDatabase from "../firebase/config";
import { Heading, List } from "@chakra-ui/core";

const convertFromUnix = (date) => {
  const dateObject = new Date(date);

  date = dateObject.toLocaleString();
  return date;
};

// export const finalArray = null;
export const articleHtmlBody = [];

const getDocs = (articleID) => {
  //console.log("Article ID: " + articleID);
  firestoreDatabase
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
  //console.log('Starts ################## Generated Article HTML ###################');
  //console.log(articleHtmlBody.length);
  //console.log('Ends ################## Generated Article HTML ###################');
};

const createElement = (type, content, attributes = "") => {
  return `<${type}${attributes}>${content}</${type}>`;
};

const createSelfCloseTag = (type, attributes = "") => {
  return `<${type}${attributes} />`;
};

const createQuoteElement = (quote, credits) => {
  return `
          <Box width="900px" borderWidth="1px" rounded="lg" overflow="hidden" margin="50px"><Box marginTop="50px" marginLeft="50px"><Heading><FaQuoteLeft /></Heading></Box><Box><Box marginTop="30px" fontWeight="semibold" as="h4" lineHeight="tight"><Text fontSize="xl" mx="100px">${quote}</Text><Box d="flex" alignItems="center" color="gray.600" marginTop="50px" margin="50px"><Text fontSize="lg">- ${credits}</Text></Box></Box></Box></Box>
          `;
};

const caseChecks = (article) => {
  let contentBlockLength = article.content.blocks.length;
  for (let i = 0; i < contentBlockLength; i++) {
    const contentType = article.content.blocks[i].type;
    switch (contentType) {
      case "paragraph":
        const paragraphText = article.content.blocks[i].data.text;
        console.log("Paragraph >>>>>> : " + paragraphText);
        //console.log("-----Element-----");
        //console.log(createElement("Text", paragraphText));
        articleHtmlBody.push(createElement("Text", paragraphText));
        console.log(articleHtmlBody.length);
        break;
      case "header":
        const headerText = article.content.blocks[i].data.text;
        //console.log(createElement("Heading", headerText));
        articleHtmlBody.push(createElement("Heading", headerText));
        break;

      case "list":
        const items = article.content.blocks[i].data.items;
        //console.log(items);
        const allItems = [];
        for (let j = 0; j < items.length; j++) {
          allItems.push(createElement("ListItem", items[j]));
          articleHtmlBody.push(createElement("ListItem", items[j]));
        }

        const listArray = [];
        createElement("List", allItems.join(""));
        //console.log("-----Element-----");
        //console.log(createElement("List", allItems.join("")));
        articleHtmlBody.push(createElement("List", allItems.join("")));
        break;
      // --------------------------
      case "warning":
        const warningText = article.content.blocks[i].data.message;
        const warningTitle = article.content.blocks[i].data.title;
        const warningTitleElement = createElement("AlertTitle", warningTitle);
        const warningTextElement = createElement(
          "AlertDescription",
          warningText
        );
        const warningIcon = createSelfCloseTag("AlertIcon");
        const allWarningContent = [warningTextElement, warningTitleElement];
        articleHtmlBody.push(
          createElement(
            "Alert",
            allWarningContent.join(""),
            ' status="warning"'
          )
        );
        /*console.log(
              createElement(
                "Alert",
                allWarningContent.join(""),
                ' status="warning"'
              )
            );*/
        articleHtmlBody.push(
          createElement(
            "Alert",
            allWarningContent.join(""),
            ' status="warning"'
          )
        );
        break;
      // --------------------------
      case "code":
        console.log("I am in Code ..............");
        const codeContent = article.content.blocks[i].data.code;
        articleHtmlBody.push(
          createSelfCloseTag("Code", ` children="${codeContent}"`)
        );
        /*console.log(
              createSelfCloseTag("Code", ` children="${codeContent}"`)
            );*/
        //articleHtmlBody.push(createSelfCloseTag("Code", ` children="${codeContent}"`));
        console.log(" Article Length: " + articleHtmlBody.length);
        break;
      // --------------------------
      case "linkTool":
        // Will work on when I actually get Link data
        //console.log("In Link, But It's Being Worked On");
        break;
      // --------------------------
      case "quote":
        const quote = article.content.blocks[i].data.text;
        const credits = article.content.blocks[i].data.caption;
        //console.log(createQuoteElement(quote, credits));
        articleHtmlBody.push(createQuoteElement(quote, credits));
        break;
    }
  }
};

export default getDocs;
