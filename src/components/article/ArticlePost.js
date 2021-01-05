import React from 'react';

import { Badge, Box, Image, Collapse, Button, Stack } from '@chakra-ui/core';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

export class ArticlePost extends React.Component {
  state = {
    show: false
  };

  handleToggle = () => {
    this.setState({
      show: !this.state.show
    });
  };

  convertFromUnix = (date) => {
    const dateObject = new Date(date);
    date = dateObject.toLocaleDateString('en-US');
    return date;
  };

  componentDidMount = () => {
    const user = firebase.auth().currentUser;

    if (user != null) {
      user.providerData.forEach((profile) => {
        console.log('Sign-in provider: ' + profile.providerId);
        console.log('  Provider-specific UID: ' + profile.uid);
        console.log('  Name: ' + profile.displayName);
        console.log('  Email: ' + profile.email);
        console.log('  Photo URL: ' + profile.photoURL);
      });
    }
  };

  render() {
    return (
      <Box borderWidth="1px" shadow="md" rounded="lg" overflow="hidden">
        <Box height="200px" overflow="hidden">
          <Image src={this.props.thumbnailImage} width="100%" />
        </Box>
        <Box>
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Stack isInline>
                <Badge rounded="md" py="1" px="2" variantColor="teal">
                  Trending
                </Badge>
                <Badge rounded="md" py="1" px="2" variantColor="teal">
                  Featured
                </Badge>
              </Stack>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {console.log(this.props.user)}
              </Box>
            </Box>

            <Box
              marginTop="5"
              marginBottom="2.5"
              marginLeft="2px"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {this.props.title}
            </Box>
            <Box
              marginTop="3"
              marginBottom="3"
              marginLeft="2px"
              fontWeight="semibold"
              color="gray.500"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              lineHeight="tight"
              isTruncated
            >
              {this.props.user} &bull;&bull;&bull;{' '}
              {this.convertFromUnix(this.props.date)}
            </Box>
            <Box marginTop="3">
              <Box as="span" color="white.600" fontSize="sm">
                <Collapse startingHeight={20} isOpen={this.state.show}>
                  {this.props.summary}
                </Collapse>
                <Button
                  size="sm"
                  onClick={this.handleToggle}
                  mt="1rem"
                  variant="outline"
                >
                  Show {this.state.show ? 'Less' : 'More'}
                </Button>
              </Box>
              <Link
                to={() => `/article/${this.props.docId}`}
                onClick={() => {
                  setTimeout(() => {
                    window.location.reload();
                  }, 5);
                }}
              >
                <Button size="sm" ml="10px" mt="1rem" variant="ghost">
                  {console.log(
                    'PROPS DOC ID ===================' + this.props.docId
                  )}
                  Read More
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default ArticlePost;
