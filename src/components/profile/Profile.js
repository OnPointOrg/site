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
import VerifiedNav from '../nav/VerifiedNav';
import DefaultNav from '../nav/DefaultNav';

import firebase from 'firebase';

import firestoreDatabase from '../../firebase';

import { FaEnvelope } from 'react-icons/fa';
import Loading from '../home/Loading';
import { Redirect } from 'react-router';
import ProfileArticle from './ProfileArticle';

const articles = [];
export class Profile extends React.Component {
    state = {
        currentNav: <Loading />,
        user: null,
        articlesByUser: null,
        email: null,
        pfp: null,
        redirect: null
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
                        this.setState({
                            currentNav: <VerifiedNav />,
                            user: 'new user'
                        });
                    }
                } else {
                    console.log(user);
                    this.setState({
                        currentNav: <VerifiedNav />,
                        user: user.displayName,
                        email: user.email,
                        pfp: user.photoURL
                    });

                    firestoreDatabase
                        .collection('articles')
                        .where('username', '==', this.state.user)
                        .get()
                        .then(querySnapshot => {
                            console.log(this.state.user);
                            console.log(querySnapshot);
                            console.log(this.state.articlesByUser);
                            querySnapshot.forEach(doc => {
                                console.log('DOC' + doc);
                                articles.push(doc);
                            });
                            this.setState({
                                articlesByUser: articles
                            });
                        });
                }
            } else {
                this.setState({
                    currentNav: <DefaultNav />,
                    redirect: <Redirect to="/" />
                });
            }
        });

        if (uuid) {
            firebase.auth().onAuthStateChanged(async user => {
                if (user) {
                    // Add firebase admin stuff here for profile stuff
                }
            });
        } else {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                } else {
                    this.setState({
                        currentNav: <DefaultNav />
                    });
                }
            });
        }
    };

    render() {
        return (
            <Box height="88vh" overflow="none">
                {this.state.currentNav}
                <Flex overflowY="hidden" height="100%">
                    <Box backgroundColor="#25353F" width="50%">
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
                        <SimpleGrid
                            spacing={6}
                            columns={[1, 1, 1, 2, 3]}
                            my="15px"
                            padding="25px"
                            mt="10px"
                        >
                            {articles.length === 0 ? (
                                <Heading>Thingy</Heading>
                            ) : (
                                articles.map(article => {
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
                                })
                            )}
                        </SimpleGrid>
                    </Box>
                </Flex>
                {this.state.redirect}
            </Box>
        );
    }
}

export default Profile;
