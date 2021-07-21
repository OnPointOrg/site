import React from 'react';
import firestoreDatabase from '../firebase';
import {
    Heading,
    List,
    ListItem,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Divider
} from '@chakra-ui/core';
import Quote from '../components/article/Quote';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xt256 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

let views = null;

const convertFromUnix = date => {
    const dateObject = new Date(date);
    date = dateObject.toLocaleDateString('en-US');
    return date;
};

export const articleHtmlInformation = [];
export const articleHtmlBody = [];
export let words = 0;

const getDocs = async articleID => {
    await firestoreDatabase
        .collection('articles')
        .doc(articleID)
        .get()
        .then(querySnapshot => {
            const article = querySnapshot.data();
            views = article.views + 1;
            console.log(article);
            articleHtmlInformation.push(article.title);
            articleHtmlInformation.push(article.username);
            articleHtmlInformation.push(article.summary);
            articleHtmlInformation.push(article.category);
            articleHtmlInformation.push(convertFromUnix(article.date));
            articleHtmlInformation.push(article.thumbnailImage);
            // articleHtmlInformation.push(article.email);
            articleHtmlInformation.push(views);
            articleHtmlInformation.push(article.useruid);

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

const caseChecks = article => {
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
                    <div
                        style={{
                            fontSize: '20px',
                            marginTop: '20px',
                            marginBottom: '20px'
                        }}
                        dangerouslySetInnerHTML={{ __html: paragraphText }}
                    />
                );
                words += paragraphText.split(' ').length;
                console.log(words);
                break;

            case 'header':
                const headerText = article.content.blocks[i].data.text;
                articleHtmlBody.push(
                    <Heading pt="50px" pb="25px">
                        {headerText}
                    </Heading>
                );
                words += headerText.split(' ').length;
                console.log(words);
                break;

            case 'list':
                const items = article.content.blocks[i].data.items;
                console.log(items);
                items.map(item => {
                    words += item.split(' ').length;
                });
                console.log(words);
                const allItems = [];
                for (let j = 0; j < items.length; j++) {
                    allItems.push(items[j]);
                }

                if (article.content.blocks[i].data.style === 'ordered') {
                    articleHtmlBody.push(
                        <List as="ol" styleType="decimal">
                            {allItems.map(listItem => (
                                <ListItem fontSize="20px">{listItem}</ListItem>
                            ))}
                        </List>
                    );
                } else {
                    articleHtmlBody.push(
                        <List styleType="disc">
                            {allItems.map(listItem => (
                                <ListItem fontSize="20px">{listItem}</ListItem>
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
                    </Alert>
                );
                break;

            case 'code':
                const codeContent = article.content.blocks[i].data.code;
                words += codeContent.split(' ').length;
                console.log(codeContent);
                articleHtmlBody.push(
                    <SyntaxHighlighter
                        language="javascript"
                        style={xt256}
                        showLineNumbers
                    >
                        {codeContent}
                    </SyntaxHighlighter>
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
                console.log(
                    '--------- Image URL Inside The Image Case ---------'
                );
                console.log(article.content.blocks[i].data.file);
                const imageUrl = article.content.blocks[i].data.file.url;
                const imageCaption = article.content.blocks[i].data.caption;
                articleHtmlBody.push(
                    <figure>
                        <img
                            src={imageUrl}
                            alt={imageCaption}
                            style={{
                                borderRadius: '10px',
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                width: '50%'
                            }}
                        />
                        <figcaption
                            style={{
                                textAlign: 'center',
                                marginTop: '5px',
                                marginBottom: '15px',
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
