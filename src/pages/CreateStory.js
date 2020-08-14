import React, { Component } from "react";
import {
  ThemeProvider,
  theme,
  Box,
  Flex,
  Button,
  Checkbox,
  Link as ChakraLink,
  Text,
  Stack,
  Icon,
  Input,
  InputLeftElement,
  FormControl,
  FormLabel,
  Heading,
  Link,
  InputGroup,
  SimpleGrid,
  Select
} from "@chakra-ui/core";
import DefaultNav from "../components/DefaultNav";
import Editor from '@stfy/react-editor.js'
import Header from '@editorjs/header'; 
import List from '@editorjs/list'; 
import ImageTool from '@editorjs/image';
// import Tags from "@yaireo/tagify/dist/react.tagify" // React-wrapper file
import "@yaireo/tagify/dist/tagify.css" // Tagify CSS


const VARIANT_COLOR = "teal";

export class CreateStory extends Component {

  handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  }

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
              </Box>
              <Box mt={1} textAlign="left">
                <form onSubmit={this.handleSubmit}>
                  <SimpleGrid columns={2} spacing={10}>
                    <FormControl isRequired margin="25px" textAlign="center">
                      <FormLabel>Title</FormLabel>
                      <InputGroup>
                        <InputLeftElement children={<Icon name="edit" />} />
                        <Input
                          // onChange={this.handleChange}
                          width="100%"
                          id="title"
                          type="text"
                          placeholder="A Very Interesting Title"
                        // value={this.state.email}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired margin="25px" textAlign="center">
                      <FormLabel>Category</FormLabel>
                      <InputGroup>
                        <InputLeftElement children={<Icon name="edit" />} />
                        <Select
                          // onChange={this.handleChange}
                          width="100%"
                          id="category"
                          type="text"
                          placeholder=""
                        // value={this.state.email}
                        />
                      </InputGroup>
                    </FormControl>
                  </SimpleGrid>
                  <FormControl isRequired margin="25px" textAlign="center">
                    <FormLabel>Title</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<Icon name="edit" />} />
                      <Input
                        // onChange={this.handleChange}
                        width="100%"
                        id="title"
                        type="text"
                        placeholder="A Very Interesting Title"
                      // value={this.state.email}
                      />
                    </InputGroup>
                  </FormControl>
                  <Box borderWidth="1px" rounded="lg" width="100%" padding="20px">
                    <Editor
                      tools={{
                        header: Header,
                        list: List,
                        image: ImageTool
                      }}
                      onReady={() => console.log('Start!')}
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
