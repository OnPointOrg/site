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
                                <Text>Sign In</Text>
                                <Heading>Continue Your Journey</Heading>
                                <Heading>@ Onpoint</Heading>
                            </Box>
                            <Box my={8} textAlign="left">
                                <form onSubmit={this.handleSubmit}>
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
