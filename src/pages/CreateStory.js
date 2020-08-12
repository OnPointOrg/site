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
} from "@chakra-ui/core";
import DefaultNav from "../components/DefaultNav";
import { Editor } from "@tinymce/tinymce-react";

const VARIANT_COLOR = "teal";

export class CreateStory extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <DefaultNav />
                <Flex height="100%" width="100%" align="center" justifyContent="center">
                    <Box>
                        <Box p={4}>
                            <Box textAlign="center">
                                <Text>New Article</Text>
                                <Heading>Share The Story</Heading>
                            </Box>
                            <Box my={8} textAlign="left">
                                <form onSubmit={this.handleSubmit}>
                                    <SimpleGrid columns={3} spacing={10}>
                                        <Box width="100%" />
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
                                        <Box width="100%" />
                                    </SimpleGrid>

                                    <Editor
                                        apiKey="zybn8i03lzs6uwwunfnmni1kwzgvhne31xy1rwof0u56mdx6"
                                        initialValue="<p>This is the initial content of the editor</p>"
                                        init={{
                                            height: 600,
                                            width: 1000,
                                            menubar: true,
                                            plugins: [
                                                "emoticons",
                                                "advlist autolink lists link image charmap print preview anchor",
                                                "searchreplace visualblocks code fullscreen",
                                                "insertdatetime media table paste code help wordcount",
                                            ],
                                            toolbar:
                                                "undo redo | formatselect | bold italic backcolor emoticons | \
                                                 alignleft aligncenter alignright alignjustify | \
                                                 bullist numlist outdent indent | removeformat | help",
                                        }}
                                        onEditorChange={this.handleEditorChange}
                                    />
                                    
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
