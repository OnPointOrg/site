import React from 'react';
import {
    Box,
    Flex,
    Image,
    Heading,
    SimpleGrid,
    Link as ChakraLink,
    Button
} from '@chakra-ui/core';

import firebase from 'firebase';

import firestoreDatabase from '../../firebase';

import { FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { Redirect } from 'react-router';
import ProfileArticle from './ProfileArticle';
import { Link } from 'react-router-dom';

const articles = [];
export class Profile extends React.Component {
    state = {
        user: null,
        uid: null,
        articlesByUser: null,
        email: null,
        pfp: null,
        redirect: null,
        noArticleState: null
    };

    componentDidMount = () => {
        let uuid = this.props.match.params.uuid;
        console.log(this.props.match.params.uuid);

        firebase.auth().onAuthStateChanged(async user => {
            if (user) {
                if (uuid) {
                    console.log(user.uid + ' ' + uuid);
                    if (uuid === user.uid) {
                        console.log('Inside');
                        this.setState({
                            redirect: <Redirect to="/profile" />
                        });
                    } else {
                        firestoreDatabase
                            .collection('users')
                            .doc(uuid)
                            .get()
                            .then(userProfile => {
                                console.log(userProfile.data());
                                this.setState({
                                    user: userProfile.data().fullName,
                                    uid: uuid,
                                    email: userProfile.data().email,
                                    pfp: userProfile.data().pfp
                                });

                                console.log(userProfile.data().articles);

                                console.log(userProfile.data().articles.length);
                                if (userProfile.data().articles.length !== 0) {
                                    userProfile.data().articles.map(article => {
                                        console.log(article.id);
                                        firestoreDatabase
                                            .collection('articles')
                                            .doc(article.id)
                                            .get()
                                            .then(querySnapshot => {
                                                console.log(
                                                    querySnapshot.data()
                                                );
                                                articles.push(querySnapshot);
                                            })
                                            .then(() => {
                                                console.log(articles);
                                                this.setState({
                                                    articlesByUser: articles
                                                });
                                            });
                                    });
                                } else {
                                    console.log('inside');
                                    this.setState({
                                        noArticleState: (
                                            <Box textAlign="center">
                                                <Heading mt="25px">
                                                    {this.state.user} Doesn't
                                                    Have Any Articles Uploaded!
                                                </Heading>
                                            </Box>
                                        )
                                    });
                                }
                            });
                    }
                } else {
                    console.log(user);
                    this.setState({
                        user: user.displayName,
                        uid: user.uid,
                        email: user.email,
                        pfp: user.photoURL
                    });

                    firestoreDatabase
                        .collection('articles')
                        .where('useruid', '==', this.state.uid)
                        .get()
                        .then(querySnapshot => {
                            console.log(this.state.user);
                            console.log(querySnapshot.docs.length);
                            console.log(this.state.articlesByUser);
                            if (querySnapshot.docs.length !== 0) {
                                querySnapshot.forEach(doc => {
                                    console.log('DOC' + doc.data);
                                    articles.push(doc);
                                });
                                this.setState({
                                    articlesByUser: articles
                                });
                            } else {
                                this.setState({
                                    noArticleState: (
                                        <Box textAlign="center">
                                            <Heading my="25px">
                                                You Have No Articles Uploaded!
                                            </Heading>
                                            <Link to="/newstory">
                                                <Button
                                                    variant="outline"
                                                    color="white"
                                                    rightIcon={FaArrowRight}
                                                >
                                                    Write One Now!
                                                </Button>
                                            </Link>
                                        </Box>
                                    )
                                });
                            }
                        });
                }
            } else {
                this.setState({
                    redirect: <Redirect to="/" />
                });
            }
        });
    };

    render() {
        return (
            <Box height="88vh" overflow="none">
                <Flex overflowY="hidden" height="100%">
                    <Box
                        backgroundColor="#000"
                        width="50%"
                        borderLeft="white"
                        borderWidth="5px"
                        borderTop="#000"
                        borderBottom="#000"
                    >
                        <Image
                            my="25px"
                            justifyContent="center"
                            mx="auto"
                            width="75%"
                            height="auto"
                            rounded="lg"
                            src={this.state.pfp}
                        />
                        <Heading textAlign="center" my="25px">
                            {this.state.user}
                        </Heading>
                        <ChakraLink
                            href={`mailto:${this.state.email}`}
                            title="Email"
                            isExternal
                            textAlign="center"
                            display="block"
                            textDecoration="none"
                        >
                            <Button color="white">
                                Email{' '}
                                <FaEnvelope style={{ marginLeft: '15px' }} />
                            </Button>
                        </ChakraLink>
                    </Box>
                    <Box width="100%" overflow="scroll" overflowX="hidden">
                        <Box
                            width="100%"
                            position="sticky"
                            background="black"
                            zIndex="9"
                            py="25px"
                            top="0"
                            transition="background-color 0.1 ease-in-out"
                        >
                            <Heading textAlign="center">Articles</Heading>
                        </Box>

                        {this.state.noArticleState ? (
                            this.state.noArticleState
                        ) : (
                            <SimpleGrid
                                spacing={6}
                                columns={[1, 1, 1, 2, 3]}
                                my="15px"
                                padding="25px"
                                mt="10px"
                            >
                                {articles.map(article => {
                                    console.log(article.data());
                                    console.log(
                                        'DOCUMENT ID ====================='
                                    );
                                    console.log(article.id);

                                    return (
                                        <ProfileArticle
                                            docId={article.id}
                                            title={article.data().title}
                                            summary={article.data().summary}
                                            date={article.data().date}
                                            category={article.data().category}
                                            thumbnailImage={
                                                article.data().thumbnailImage
                                            }
                                            views={article.data().views}
                                        />
                                    );
                                })}
                            </SimpleGrid>
                        )}
                    </Box>
                </Flex>
                {this.state.redirect}
            </Box>
        );
    }
}

export default Profile;
