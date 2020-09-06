import React, { Component } from "react";
import {
  ThemeProvider,
  Heading,
  Box,
  theme,
  Button,
  Text,
  Code,
  Grid,
  Link as ChakraLink,
  Divider,
} from "@chakra-ui/core";

import { FaQuoteLeft } from "react-icons/fa";

import firebase from "firebase";
import firestoreDatabase from "../firebase/config";
import getDocs, {
  articles,
  articleHtmlBody,
} from "../hooks/ReadArticlesFromFirebase";

import DefaultNav from "./DefaultNav";
import { Link } from "react-router-dom";

export class BlogContentPost extends Component {
  state = {
    article: null,
    articleBody: null,
  };

  componentDidMount = () => {
    this.createArticle();
  };

  convertFromUnix = (date) => {
    const dateObject = new Date(date);
    date = dateObject.toLocaleString();
    return date;
  };

  createArticle = async () => {
    let docId = this.props.match.params.docId;
    //console.log("DOC ID FROM ROUTER");
    //console.log(docId);
    // getDocs(docId)
    
    // getDocs(docId)
    await getDocs(docId).then(() => {
      return articleHtmlBody;
    });
    console.log(
      "$$$$$$$$$$$$$$$$$$$$$$$$$$ HTML Array $$$$$$$$$$$$$$$$$$$$$$$$$$$$"
    );
    // articleHtmlBody
    console.log(articleHtmlBody);
    console.log(articleHtmlBody[0]);
    // this.state.articleBody.map((element) => {
    //   console.log(element)
    // })
    // console.log(getDocs(docId));
    // console.log(articleTitle);
    // this.setState({
    //   article: getDocs(docId),
    // });
  };

  render() {
    //console.log("GENERATED HTML -----------------------------");
    // const articleBody = this.createArticle();
    //console.log(articleBody);
    return (
      <ThemeProvider theme={theme}>
        <DefaultNav />
        <Grid templateColumns="repeat(4, 1fr)" gap={1}>
          <Box />
          <Box width="200%" alignItems="center">
            <Heading
              as="h1"
              fontSize="50px"
              textAlign="center"
              mx="50px"
              my="25px"
            >
              Test Title
            </Heading>
            <Text textAlign="center" fontSize="25px">
              By{" "}
              <ChakraLink color="teal.500">
                <Link>J.K. Rowling</Link>
              </ChakraLink>
            </Text>
            <Text textAlign="center" fontSize="25px">
              &bull;&bull;&bull;
            </Text>
            <Text textAlign="center" fontSize="25px">
              {this.convertFromUnix(/** Pass Date In Here */ new Date())}
            </Text>
            <Text padding="10px" textAlign="center" marginTop="25px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante
              in nibh mauris cursus mattis.
            </Text>
          </Box>
          <Box />
          <Box />
        </Grid>
        <Divider mx="100px" my="50px" />
        <Text mx="125px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus
          vitae congue mauris rhoncus. Augue interdum velit euismod in. Risus
          feugiat in ante metus dictum at tempor commodo. Scelerisque eu
          ultrices vitae auctor eu augue ut lectus arcu. Tellus elementum
          sagittis vitae et leo duis ut diam quam. Pellentesque habitant morbi
          tristique senectus et netus et. Id aliquet lectus proin nibh nisl
          condimentum id venenatis. Vivamus arcu felis bibendum ut tristique.
          Vel eros donec ac odio tempor. Augue lacus viverra vitae congue eu
          consequat. In est ante in nibh mauris cursus mattis molestie a.
        </Text>
        <Text mx="125px" my="50px">
          Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet
          consectetur adipiscing elit pellentesque. Velit egestas dui id ornare.
          Scelerisque eleifend donec pretium vulputate sapien nec sagittis
          aliquam malesuada. Vel quam elementum pulvinar etiam. Id diam maecenas
          ultricies mi eget mauris pharetra. Enim sit amet venenatis urna
          cursus. Eget sit amet tellus cras adipiscing enim eu. Enim ut tellus
          elementum sagittis vitae. Eu sem integer vitae justo eget magna
          fermentum iaculis eu.
        </Text>
        <Text mx="125px" marginBottom="75px">
          Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Eu
          non diam phasellus vestibulum lorem sed risus ultricies. Neque vitae
          tempus quam pellentesque. Sem integer vitae justo eget. Ut etiam sit
          amet nisl purus. Proin libero nunc consequat interdum varius sit amet
          mattis. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus.
          Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Sit amet
          luctus venenatis lectus magna. Vitae tempus quam pellentesque nec nam
          aliquam sem et. Urna molestie at elementum eu facilisis sed odio
          morbi. Enim ut sem viverra aliquet eget sit amet. Leo integer
          malesuada nunc vel risus commodo viverra. Sed faucibus turpis in eu mi
          bibendum neque egestas congue. Semper feugiat nibh sed pulvinar proin
          gravida hendrerit. Orci dapibus ultrices in iaculis nunc sed augue.
          Eget est lorem ipsum dolor. In iaculis nunc sed augue. Commodo nulla
          facilisi nullam vehicula ipsum a arcu cursus. Faucibus pulvinar
          elementum integer enim neque volutpat ac. Ac feugiat sed lectus
          vestibulum mattis ullamcorper velit. Eu consequat ac felis donec et
          odio. Sociis natoque penatibus et magnis dis parturient montes.
        </Text>
        <Box
          width="900px"
          borderWidth="1px"
          rounded="lg"
          overflow="hidden"
          mx="125px"
          my="25px"
        >
          <Box marginTop="50px" marginLeft="50px">
            <Heading>
              <FaQuoteLeft />
            </Heading>
          </Box>
          <Box>
            <Box
              marginTop="30px"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
            >
              <Text fontSize="xl" mx="100px">
                Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit
                amet consectetur adipiscing elit pellentesque. Velit egestas dui
                id ornare. Scelerisque eleifend donec pretium vulputate sapien
                nec sagittis aliquam malesuada. Vel quam elementum pulvinar
                etiam. Id diam maecenas ultricies mi eget mauris pharetra.{" "}
              </Text>
              <Box
                d="flex"
                alignItems="center"
                color="gray.600"
                marginTop="50px"
                margin="50px"
              >
                <Text fontSize="lg">- Lorem Ipsum</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* <Button onClick={this.createArticle}>
          Click Me For Juicy Firebse Data! Members Only!
        </Button> */}
      </ThemeProvider>
    );
  }
}

export default BlogContentPost;
