import React, { Component, createRef } from 'react';
import {
    Box,
    Flex,
    Button,
    Link as ChakraLink,
    Text,
    Icon,
    Input,
    InputLeftElement,
    FormControl,
    FormLabel,
    Heading,
    InputGroup,
    SimpleGrid,
    Select,
    Tooltip
} from '@chakra-ui/core';

import EditorJs from 'react-editor-js';

import { EDITOR_JS_TOOLS } from '../components/editor/Constants';

import firestoreDatabase from '../firebase';
import firebase from 'firebase';

import UploadForm, { fileURL } from '../components/editor/UploadForm';

import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const instanceRef = createRef();

export class CreateStory extends Component {
    state = {
        title: '',
        category: '',
        summary: '',
        articleContent: '',
        useruid: '',
        username: '',
        // email: '',
        thumbnailImage: '',
        loadingState: false,
        disabledState: false,
        redirect: null
    };

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                this.setState({
                    redirect: <Redirect to="/signup" />
                });
            }
        });
    };

    // getTheUserInformation = () => {
    //     const firebaseUser = firebase.auth().currentUser;
    //     console.log(firebaseUser);
    //     if (firebaseUser != null) {
    //         const name = firebaseUser.displayName;
    //         const uid = firebaseUser.uid;
    //         console.log(uid);
    //         this.setState({
    //             useruid: uid,
    //             username: name
    //         });
    //     }
    // };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value,
            thumbnailImage: fileURL
        });
        console.log(this.state.username);
        console.log(this.state.useruid);
        console.log(this.state.thumbnailImage);
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            loadingState: true,
            disabledState: true
        });
        this.writeArticleData(this.state);
    };

    handleSave = () => {
        // this.getTheUserInformation();
        const savedData = instanceRef.current.save();
        console.log('Editor data> >>>>>>>>>>>>>>>>>>>>>>>>>>>>>: ');
        savedData
            .then(outputData => {
                console.log('Article data: ', outputData);
                this.setState({
                    articleContent: outputData
                });
            })
            .catch(error => {
                console.log('Saving failed: ', error);
            });
    };

    writeArticleData() {
        console.log(this.state);
        firestoreDatabase
            .collection('articles')
            .add({
                title: this.state.title,
                category: this.state.category,
                summary: this.state.summary,
                content: this.state.articleContent,
                useruid: this.state.useruid,
                username: this.state.username,
                // email: this.state.email,
                date: Date.now(),
                thumbnailImage: this.state.thumbnailImage,
                views: 0
            })
            .then(docRef => {
                console.log('Document written with ID: ', docRef.id);
                firestoreDatabase
                    .collection('users')
                    .doc(`${this.state.useruid}`)
                    .update({
                        articles: firebase.firestore.FieldValue.arrayUnion(
                            firebase.firestore().doc(`/articles/${docRef.id}`)
                        )
                    });
                const { history } = this.props;
                history.push(`/articles/${docRef.id}`);
                window.location.reload();
            })
            .catch(error => {
                console.error('Error adding document: ', error);
            });
    }

    handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
    };

    render() {
        return (
            <Box width="100%">
                {this.state.redirect}
                <Flex
                    height="50%"
                    width="100%"
                    align="center"
                    justifyContent="center"
                >
                    <Box>
                        <Box p={4}>
                            <Box textAlign="center">
                                <Text>New Article</Text>
                                <Heading>Share The Story</Heading>
                                <Text fontSize="xs">
                                    Before You Submit.{' '}
                                    <Tooltip label="Need To Add Document Of Requirements Here Later">
                                        <ChakraLink
                                            href="https://www.google.com"
                                            color="white"
                                            isExternal
                                        >
                                            Check The Requirements Here{' '}
                                            <Icon
                                                name="external-link"
                                                mx="2px"
                                            />
                                        </ChakraLink>
                                    </Tooltip>
                                </Text>
                            </Box>
                            <Box mt={1} textAlign="left">
                                <form onSubmit={this.handleSubmit}>
                                    <SimpleGrid columns={2} spacing={10}>
                                        <FormControl isRequired margin="25px">
                                            <FormLabel>Title</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement
                                                    children={
                                                        <Icon name="edit" />
                                                    }
                                                />
                                                <Input
                                                    width="100%"
                                                    id="title"
                                                    value={this.state.title}
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    color="white"
                                                    background="black"
                                                    placeholder="A Very Interesting Title"
                                                />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl isRequired margin="25px">
                                            <FormLabel>Category</FormLabel>
                                            <InputGroup>
                                                <Select
                                                    onChange={this.handleChange}
                                                    width="100%"
                                                    id="category"
                                                    type="text"
                                                    color="white"
                                                    background="black"
                                                    placeholder="Select Category"
                                                >
                                                    <option
                                                        value="art"
                                                        onClick={() => {
                                                            this.setState({
                                                                category: 'Art'
                                                            });
                                                        }}
                                                    >
                                                        Art
                                                    </option>
                                                    <option
                                                        value="business"
                                                        onClick={() => {
                                                            this.setState({
                                                                category:
                                                                    'Business'
                                                            });
                                                        }}
                                                    >
                                                        Business
                                                    </option>
                                                    <option
                                                        value="current events"
                                                        onClick={() => {
                                                            this.setState({
                                                                category:
                                                                    'Current Events'
                                                            });
                                                        }}
                                                    >
                                                        Current Events
                                                    </option>
                                                    <option
                                                        value="entertainment"
                                                        onClick={() => {
                                                            this.setState({
                                                                category:
                                                                    'Entertainment'
                                                            });
                                                        }}
                                                    >
                                                        Entertainment
                                                    </option>

                                                    <option
                                                        value="politics"
                                                        onClick={() => {
                                                            this.setState({
                                                                category:
                                                                    'Politics'
                                                            });
                                                        }}
                                                    >
                                                        Politics
                                                    </option>
                                                    <option
                                                        background="black"
                                                        color="white"
                                                        value="sports"
                                                        onClick={() => {
                                                            this.setState({
                                                                category:
                                                                    'Sports'
                                                            });
                                                        }}
                                                    >
                                                        Sports
                                                    </option>
                                                    <option
                                                        value="science"
                                                        onClick={() => {
                                                            this.setState({
                                                                category:
                                                                    'Science'
                                                            });
                                                        }}
                                                    >
                                                        Science
                                                    </option>

                                                    <option
                                                        background="black"
                                                        color="white"
                                                        value="technology"
                                                        onClick={() => {
                                                            this.setState({
                                                                category:
                                                                    'Technology'
                                                            });
                                                        }}
                                                    >
                                                        Technology
                                                    </option>
                                                </Select>
                                            </InputGroup>
                                        </FormControl>
                                    </SimpleGrid>
                                    {
                                        //might remove from here
                                    }
                                    <SimpleGrid columns={2} spacing={10}>
                                        <FormControl isRequired margin="25px">
                                            <FormLabel>Author Name</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement
                                                    children={
                                                        <Icon name="view" />
                                                    }
                                                />
                                                <Input
                                                    width="100%"
                                                    id="username"
                                                    value={this.state.username}
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    color="white"
                                                    background="black"
                                                    placeholder="John Doe"
                                                />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl isRequired margin="25px">
                                            <FormLabel>User UID</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement
                                                    children={
                                                        <Icon name="at-sign" />
                                                    }
                                                />
                                                <Input
                                                    width="100%"
                                                    id="useruid"
                                                    value={this.state.useruid}
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    color="white"
                                                    background="black"
                                                />
                                            </InputGroup>
                                        </FormControl>
                                    </SimpleGrid>
                                    {
                                        //to here
                                    }
                                    <UploadForm />
                                    <FormControl isRequired margin="25px">
                                        <FormLabel>Summary</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement
                                                children={<Icon name="edit" />}
                                            />
                                            <Input
                                                id="summary"
                                                color="white"
                                                background="black"
                                                value={this.state.summary}
                                                onChange={this.handleChange}
                                                width="100%"
                                                type="text"
                                                placeholder="This Summary Should Be A Short 1 Sentence On What Your Article Is About!"
                                            />
                                        </InputGroup>
                                    </FormControl>
                                    <Box
                                        borderWidth="1px"
                                        rounded="lg"
                                        width="800px"
                                        padding="20px"
                                        background="white"
                                        color="black"
                                    >
                                        <EditorJs
                                            instanceRef={instance =>
                                                (instanceRef.current = instance)
                                            }
                                            id="content"
                                            value={this.state.content}
                                            color="black"
                                            autofocus
                                            onChange={data =>
                                                this.setState({
                                                    articleContent: data
                                                })
                                            }
                                            tools={EDITOR_JS_TOOLS}
                                            i18n={{
                                                messages: {}
                                            }}
                                            onReady={() => console.log()}
                                            data={{}}
                                        />
                                    </Box>
                                    <SimpleGrid columns={3} spacing={10}>
                                        <Box width="100%" />
                                        <Box width="100%" />
                                        <Button
                                            leftIcon="check"
                                            isLoading={this.state.loadingState}
                                            isDisabled={
                                                this.state.disabledState
                                            }
                                            size="lg"
                                            type="submit"
                                            borderWidth="3px"
                                            borderColor="white"
                                            variant="outline"
                                            mt={4}
                                            onClick={this.handleSave}
                                        >
                                            Submit
                                        </Button>
                                    </SimpleGrid>
                                </form>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        );
    }
}

export default CreateStory;
