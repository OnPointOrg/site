import React, { Component } from 'react';
import {
  Box,
  Stack,
  Icon,
  Text,
  Heading,
  Button,
  Collapse
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';

export class HomeArticles extends Component {
  state = {
    show: false
  };

  convertFromUnix = (date) => {
    const dateObject = new Date(date);

    date = dateObject.toLocaleString();
    return date;
  };

  handleToggle = () => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <Box borderWidth="5px" borderRadius="10px" shadow="xl" bg="teal">
        <Box p={8} rounded="md">
          <Stack spacing={4}>
            <Stack spacing={4} isInline alignItems="center">
              <Box>
                <Text fontSize="xs">
                  {this.convertFromUnix(this.props.time)}
                </Text>
              </Box>
              <Icon name="minus" size="12px" />
              <Box>
                <Text fontSize="xs">{this.props.username}</Text>
              </Box>
            </Stack>
            <Link to="/">
              <Heading as="h3" size="md" mb="20px">
                {this.props.title}
              </Heading>
            </Link>
            <Collapse
              fontSize="sm"
              startingHeight={20}
              isOpen={this.state.show}
            >
              {this.props.summary}
            </Collapse>
            <Box mt="10px">
              <Button
                size="sm"
                onClick={this.handleToggle}
                mr="10px"
                variant="outline"
              >
                Show {this.state.show ? 'Less' : 'More'}
              </Button>
              <Link to={() => `/articles/${this.props.docId}`}>
                <Button rightIcon="arrow-forward" variant="ghost" fontSize="sm">
                  Read more
                </Button>
              </Link>
            </Box>
          </Stack>
        </Box>
      </Box>
    );
  }
}

export default HomeArticles;
