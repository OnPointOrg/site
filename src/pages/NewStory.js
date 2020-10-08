import React, { Component, createRef } from "react";
import {
  ThemeProvider,
  theme,
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
  Tooltip,
} from "@chakra-ui/core";

import DefaultNav from "../components/DefaultNav";

import EditorJs from "react-editor-js";
// import ImageTool from '@editorjs/image';

import { EDITOR_JS_TOOLS } from "../components/editor/Constants";

import firestoreDatabase from "../firebase/config";
import firebase from "firebase";

import UploadForm, { fileURL } from "../components/UploadForm";

import VerifiedNav from "../components/VerifiedNav";


const VARIANT_COLOR = "teal";
const instanceRef = createRef();

export class CreateStory extends Component {
  state = {
    title: "",
    category: "",
    summary: "",
    articleContent: "",
    useruid: "",
    username: "",
    thumbnailImage: "",
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          currentNav: <VerifiedNav />,
        });
      } else {
        this.setState({
          currentNav: <DefaultNav />,
        });
      }
    });
  };

  getTheUserInformation = () => {
    const firebaseUser = firebase.auth().currentUser;
    console.log(firebaseUser);
    if (firebaseUser != null) {
      const name = firebaseUser.displayName;
      const uid = firebaseUser.uid;
      console.log(uid);
      this.setState({
        useruid: uid,
        username: name,
      });
    } else {
      alert("Please Sign In!");
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      thumbnailImage: fileURL,
    });
    console.log(this.state.thumbnailImage);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.writeArticleData(this.state);
  };

  handleSave = () => {
    this.getTheUserInformation();
    const savedData = instanceRef.current.save();
    console.log("Editor data> >>>>>>>>>>>>>>>>>>>>>>>>>>>>>: ");
    console.log(typeof savedData);
    console.log(savedData); // <<< --- Should Be A Promise
    savedData
      .then((outputData) => {
        console.log("Article data: ", outputData);
        this.setState({
          articleContent: outputData,
        });
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  };

  writeArticleData() {
    firestoreDatabase
      .collection("articles")
      .add({
        title: this.state.title,
        category: this.state.category,
        summary: this.state.summary,
        content: this.state.articleContent,
        useruid: this.state.useruid,
        username: this.state.username,
        thumbnailImage: this.state.thumbnailImage,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <DefaultNav />
        <Flex height="50%" width="100%" align="center" justifyContent="center">
          <Box>
            <Box p={4}>
              <Box textAlign="center">
                <Text>New Article</Text>
                <Heading>Share The Story</Heading>
                <Text fontSize="xs">
                  Before You Submit.{" "}
                  <Tooltip label="Need To Add Document Of Requirements Here Later">
                    <ChakraLink
                      href="https://www.google.com"
                      color="teal.500"
                      isExternal
                    >
                      Check The Requirements Here{" "}
                      <Icon name="external-link" mx="2px" />
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
                        <InputLeftElement children={<Icon name="edit" />} />
                        <Input
                          width="100%"
                          id="title"
                          value={this.state.title}
                          onChange={this.handleChange}
                          type="text"
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
                          placeholder="Select Category"
                        >
                          <option
                            background="black"
                            color="white"
                            value="politics"
                            onClick={() => {
                              this.setState({ category: "Politics" });
                            }}
                          >
                            Politics
                          </option>
                          <option
                            background="black"
                            color="white"
                            value="technology"
                            onClick={() => {
                              this.setState({ category: "Technology" });
                            }}
                          >
                            Technology
                          </option>
                          <option
                            background="black"
                            color="white"
                            value="sports"
                            onClick={() => {
                              this.setState({ category: "Sports" });
                            }}
                          >
                            Sports
                          </option>
                        </Select>
                      </InputGroup>
                    </FormControl>
                  </SimpleGrid>
                  <UploadForm />
                  <FormControl isRequired margin="25px">
                    <FormLabel>Summary</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<Icon name="edit" />} />
                      <Input
                        id="summary"
                        value={this.state.summary}
                        onChange={this.handleChange}
                        width="100%"
                        type="text"
                        placeholder="A Summary Of What You Are Talking About. Make It Catchy If You Want Your Articles To Be Read!"
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
                      instanceRef={(instance) =>
                        (instanceRef.current = instance)
                      }
                      id="content"
                      value={this.state.content}
                      color="black"
                      autofocus
                      onChange={(data) =>
                        this.setState({
                          articleContent: data,
                        })
                      }
                      tools={EDITOR_JS_TOOLS}
                      i18n={{
                        messages: {},
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
                      size="lg"
                      type="submit"
                      variantColor={VARIANT_COLOR}
                      variant="solid"
                      width="full"
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
      </ThemeProvider>
    );
  }
}

export default CreateStory;
