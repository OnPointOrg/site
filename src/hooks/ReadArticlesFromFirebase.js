import React from "react";
import firestoreDatabase from "../firebase/config";
import {
  Heading,
  List,
  ListItem,
  Text,
  CloseButton,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Code,
  Divider,
  Image,
} from "@chakra-ui/core";
import Quote from "../components/blog/Quote";

const convertFromUnix = (date) => {
  const dateObject = new Date(date);

  date = dateObject.toLocaleString();
  return date;
};

export const articleHtmlInformation = [];
export const articleHtmlBody = [];

const getDocs = async (articleID) => {
  await firestoreDatabase
    .collection("articles")
    .doc(articleID)
    .get()
    .then((querySnapshot) => {
      const article = querySnapshot.data();

      articleHtmlInformation.push(article.title);
      articleHtmlInformation.push(article.username);
      articleHtmlInformation.push(article.summary);
      articleHtmlInformation.push(article.category);
      articleHtmlInformation.push(convertFromUnix(article.content.time));

      caseChecks(article);
    })
    .then(() => {
      return articleHtmlBody;
    });
};

const caseChecks = (article) => {
  let contentBlockLength = article.content.blocks.length;
  for (let i = 0; i < contentBlockLength; i++) {
    const contentType = article.content.blocks[i].type;
    switch (contentType) {
      default:
        break;

      case "paragraph":
        const paragraphText = article.content.blocks[i].data.text;
        articleHtmlBody.push(<Text>{paragraphText}</Text>);
        break;

      case "header":
        const headerText = article.content.blocks[i].data.text;
        articleHtmlBody.push(<Heading>{headerText}</Heading>);
        break;

      case "list":
        const items = article.content.blocks[i].data.items;
        const allItems = [];
        for (let j = 0; j < items.length; j++) {
          allItems.push(items[j]);
        }

        articleHtmlBody.push(
          <List styleType="disc">
            {allItems.map((listItem) => (
              <ListItem>{listItem}</ListItem>
            ))}
          </List>
        );
        break;

      case "warning":
        const warningText = article.content.blocks[i].data.message;
        const warningTitle = article.content.blocks[i].data.title;
        articleHtmlBody.push(
          <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>{warningTitle}</AlertTitle>
            <AlertDescription>{warningText}</AlertDescription>
            <CloseButton position="absolute" right="8px" top="8px" />
          </Alert>
        );
        break;

      case "code":
        const codeContent = article.content.blocks[i].data.code;
        articleHtmlBody.push(<Code>{codeContent}</Code>);

        break;

      case "linkTool":
        break;

      case "delimiter":
        articleHtmlBody.push(<Divider m="10" />);
        break;

      case "quote":
        const quote = article.content.blocks[i].data.text;
        const credits = article.content.blocks[i].data.caption;
        articleHtmlBody.push(
          <Quote quote={quote} credits={credits} />
        );
        break;

      case "image":
        console.log("--------- Image URL Inside The Image Case ---------");
        console.log(this.imageUrl);
        articleHtmlBody.push(<Image src="" alt="" />);
        break;
    }
  }
  return articleHtmlBody;
};

export default getDocs;
