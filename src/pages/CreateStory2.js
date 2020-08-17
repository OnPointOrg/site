// import React, { useState } from 'react';
// import { Component } from "react";
// import {
//     ThemeProvider,
//     theme,
//     Box,
//     Flex,
//     Button,
//     Checkbox,
//     Link as ChakraLink,
//     Text,
//     Stack,
//     Icon,
//     Input,
//     InputLeftElement,
//     FormControl,
//     FormLabel,
//     Heading,
//     Link,
//     InputGroup,
//     SimpleGrid,
//     Select
// } from "@chakra-ui/core";

// import DefaultNav from "../components/DefaultNav";

// import EditorJs from "react-editor-js";

// import firestoreDatabase from '../firebase/config';

// import { EDITOR_JS_TOOLS } from "../components/Constants";

// const VARIANT_COLOR = "teal";
// const timestamp = new Date().getTime();
// const milliseconds = timestamp * 1000;
// const dateObj = new Date(milliseconds);
// const normalDate = dateObj.toLocaleString()

// const CreateStory = () => {

//     const [title, setTitle] = useState("");
//     const [category, setCategory] = useState("")
//     const [summary, setSummary] = useState("")
//     const [articleContent, setArticleContent] = useState("")

//     const instanceRef = React.useRef(null);

//     async function handleSave() {
//         const savedData = await instanceRef.current.save();

//         console.log("savedData", savedData);
//     }

//     const handleChange = (e) => {
//         setTitle(e.target.value)
//         setCategory(e.target.value)
//         setSummary(e.target.value)
//         setArticleContent(e.target.value)
//       }
    
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         writeArticleData();
//       };
    
//       const saveArticleContent = () => {
//         EditorJs.save().then((outputData) => {
//           setArticleContent(outputData)
//           console.log('Article data: ', outputData)
//         }).catch((error) => {
//           console.log('Saving failed: ', error)
//         })
//       }
    
    
//       const writeArticleData = () => {
//         //const userRef = database.ref("users");
//         // Add a second document with a generated ID.
//         firestoreDatabase.collection("articles").add({
//             setTitle: title,
//             setCategory: category,
//             setSummary: summary,
//             setArticleContent: articleContent
//         })
//           .then(function (docRef) {
//             console.log("Document written with ID: ", docRef.id);
//           })
//           .catch(function (error) {
//             console.error("Error adding document: ", error);
//           });
//       }
    

//     return (
//         <ThemeProvider theme={ theme }>
//             <DefaultNav />
//             <Flex height="50%" width="100%" align="center" justifyContent="center">
//                 <Box>
//                     <Box p={4}>
//                         <Box textAlign="center">
//                             <Text>New Article</Text>
//                             <Heading>Share The Story</Heading>
//                         </Box>
//                         <Box mt={1} textAlign="left">
//                             <form onSubmit={ handleSubmit }>
//                                 <SimpleGrid columns={2} spacing={10}>
//                                     <FormControl isRequired margin="25px">
//                                         <FormLabel>Title</FormLabel>
//                                         <InputGroup>
//                                             <InputLeftElement children={<Icon name="edit" />} />
//                                             <Input
//                                                 // onChange={this.handleChange}
//                                                 width="100%"
//                                                 id="title"
//                                                 value={ title }
//                                                 onChange={ handleChange }
//                                                 type="text"
//                                                 placeholder="A Very Interesting Title"
//                                             // value={this.state.email}
//                                             />
//                                         </InputGroup>
//                                     </FormControl>
//                                     <FormControl isRequired margin="25px">
//                                         <FormLabel>Category</FormLabel>
//                                         <InputGroup>
//                                             <Select
//                                                 // onChange={this.handleChange}
//                                                 width="100%"
//                                                 id="category"
//                                                 type="text"
//                                                 placeholder="Select Category"
//                                             // value={this.state.email}
//                                             >
//                                                 <option background="black" color="white" value="politics">Politics</option>
//                                                 <option background="black" color="white" value="technology">Technology</option>
//                                                 <option background="black" color="white" value="sports">Sports</option>
//                                             </Select>
//                                         </InputGroup>
//                                     </FormControl>
//                                 </SimpleGrid>
//                                 <FormControl isRequired margin="25px">
//                                     <FormLabel>Summary</FormLabel>
//                                     <InputGroup>
//                                         <InputLeftElement children={<Icon name="edit" />} />
//                                         <Input
//                                             id="summary"
//                                             value={ summary }
//                                             onChange={handleChange}
//                                             width="100%"
//                                             type="text"
//                                             placeholder="A Summary Of What You Are Talking About. Make It Catchy If You Want Your Articles To Be Read!"
//                                         // value={this.state.email}
//                                         />
//                                     </InputGroup>
//                                 </FormControl>
//                                 <Box borderWidth="1px" rounded="lg" width="800px" padding="20px" background="white" color="black">
//                                     <EditorJs
//                                         instanceRef={instance => (instanceRef.current = instance)}
//                                         tools={EDITOR_JS_TOOLS}
//                                         i18n={{
//                                             messages: {}
//                                         }}
//                                     />
//                                 </Box>
//                                 <SimpleGrid columns={3} spacing={10}>
//                                     <Box width="100%" />
//                                     <Box width="100%" />
//                                     <Button
//                                         leftIcon="check"
//                                         size="lg"
//                                         type="submit"
//                                         variantColor={VARIANT_COLOR}
//                                         variant="solid"
//                                         width="full"
//                                         mt={4}
//                                         onClick={saveArticleContent}
//                                     >
//                                         Submit
//                                         </Button>
//                                 </SimpleGrid>
//                             </form>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Flex>
//         </ThemeProvider>
//     );
// };

// export default CreateStory;