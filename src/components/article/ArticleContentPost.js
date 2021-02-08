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

import Loading from '../home/Loading';

import firebase from 'firebase';

import getDocs, {
    articleHtmlBody,
    words,
    articleHtmlInformation
} from '../../hooks/ReadArticlesFromFirebase';

import DefaultNav from '../nav/DefaultNav';
import VerifiedNav from '../nav/VerifiedNav';
import ArticlePost from './ArticlePost';
import firestoreDatabase from '../../firebase';
import { Link } from 'react-router-dom';

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

const articles = [];

export class ArticleContentPost extends Component {
    state = {
        article: null,
        articleTitle: null,
        articleAuthor: null,
        articleAuthorEmail: null,
        articleDate: null,
        articleContent: [],
        articleAuthorUuid: null,
        articlesByAuthor: [],
        documentId: null,
        currentNav: <Loading />,
        articleViews: null
    };

    gridCol = () => {
        const numOfArticles = articles.length;
        // console.log(numOfArticles);
        if (numOfArticles < 3) {
            return numOfArticles;
        } else {
            return 3;
        }
    };

    componentDidMount = async () => {
        this.setState({
            articleContent: currentArticleHtmlBody
        });
        console.log(articleHtmlInformation);
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

        await getDocs(docId).then(() => {
            this.setState({ articleContent: [], documentId: docId });
            console.log(
                'Get Docs Article Content:' + this.state.articleContent
            );

            this.setState({
                articleTitle: articleHtmlInformation[0],
                articleAuthor: articleHtmlInformation[1],
                articleSummary: articleHtmlInformation[2],
                articleDate: articleHtmlInformation[4],
                articleImage: articleHtmlInformation[5],
                articleAuthorEmail: articleHtmlInformation[6],
                articleViews: articleHtmlInformation[7],
                articleAuthorUuid: articleHtmlInformation[8],
                articleContent: articleHtmlBody
            });
        });

        firestoreDatabase
            .collection('articles')
            .where('username', '==', this.state.articleAuthor)
            .limit(6)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // console.log(doc.id);
                    // console.log(doc.f_.path.segments[0]);
                    if (doc.id !== docId) {
                        articles.push(doc);
                    }
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
                        <Box width="85%" mx="auto">
                            <Heading
                                color="white"
                                fontSize="50px"
                                textAlign="center"
                            >
                                {this.state.articleTitle}
                            </Heading>
                        </Box>
                    </Box>

                    <Box>
                        <Stack isInline mt="35px" width="70%" mx="auto">
                            <Box textAlign="left" fontSize="15px" width="50%">
                                <Link
                                    to={`/profile/${this.state.articleAuthorUuid}`}
                                    onClick={() => {
                                        setTimeout(() => {
                                            window.location.reload();
                                        }, 5);
                                    }}
                                >
                                    <ChakraLink color="teal.500">
                                        <Avatar
                                            src={`https://unavatar.now.sh/${this.state.articleAuthorEmail}?fallback=https://firebasestorage.googleapis.com/v0/b/onpointnewsorg.appspot.com/o/logo.png?alt=media&token=b44edc97-5872-4e8f-ae7c-b8d00306645b`}
                                            size="sm"
                                            mx="10px"
                                        />
                                        <Text fontSize="20px" as="span">
                                            {this.state.articleAuthor}
                                        </Text>
                                    </ChakraLink>
                                </Link>
                            </Box>
                            <Box width="75%" textAlign="right">
                                <Text fontSize="20px" color="white">
                                    {this.state.articleDate} &bull;{' '}
                                    {`${calculateReadingTime(
                                        words
                                    )} min reading`}{' '}
                                    &bull;{' '}
                                    {this.state.articleViews === 1
                                        ? this.state.articleViews + ' View'
                                        : this.state.articleViews + ' Views'}
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
                    {this.state.articleContent.map((element) => {
                        return <div style={{ margin: '25px' }}>{element}</div>;
                    })}
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
                    <Grid
                        templateColumns={`repeat(${this.gridCol()}, 1fr)`}
                        gap={6}
                        mb="50px"
                    >
                        {this.state.articlesByAuthor.slice().map((article) => {
                            console.log(this.state.articleAuthor.length);
                            return (
                                <ArticlePost
                                    title={article.data().title}
                                    summary={article.data().summary}
                                    date={article.data().date}
                                    user={article.data().username}
                                    thumbnailImage={
                                        article.data().thumbnailImage
                                    }
                                    docId={article.id}
                                    category={article.data().category}
                                    views={article.data().views}
                                />
                            );
                        })}
                    </Grid>
                </Box>
            </Box>
        );
    }
}

export default ArticleContentPost;
