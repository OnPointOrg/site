import React, { Component } from "react";
import { Grid, Heading, Box, Divider } from "@chakra-ui/core";
import BlogPost from "./BlogPost";

import firestoreDatabase from "../../firebase/config";

export class BlogGrid extends Component {
  state = {
    documents: null,
  };

  componentDidMount = () => {
    firestoreDatabase
      .collection("articles")
      .get()
      .then((querySnapshot) => {
        const documents = [];
        querySnapshot.forEach((doc) => {
          console.log("ARTICLE ID: ==========================");
          console.log(doc.id);
          documents.push(doc);
        });
        this.setState({
          documents: documents,
        });
      });
  };

  render() {
    return (
      <div>
        <Box margin="15px">
          <Heading
            as="h1"
            fontSize="50px"
            textAlign="center"
            marginBottom="25px"
            marginTop="25px"
          >
            All Articles
          </Heading>
          <Divider />
          <Grid templateColumns="repeat(4, 1fr)" gap={6} margin="15px">
            {this.state.documents != null &&
              this.state.documents.map((document) => {
                console.log("DOCUMENT ID =====================");
                console.log(document.id);
                return (
                  <BlogPost
                    docId={document.id}
                    title={document.data().title}
                    summary={document.data().summary}
                    date={document.data().content.time}
                    user={document.data().username}
                    thumbnailImage={document.data().thumbnailImage}
                  />
                );
              })}
          </Grid>
        </Box>
      </div>
    );
  }
}

export default BlogGrid;
