import React from 'react';
import { Box, Flex, Stack, Text, Heading, Button } from '@chakra-ui/core';

import { Link } from 'react-router-dom';

import firebase from 'firebase';
import { FeaturedArticle } from './FeaturedArticle';

const tod = () => {
    const today = new Date();
    const hr = today.getHours();

    if (hr < 12) {
        return 'Morning';
    } else if (hr < 18) {
        return 'Afternoon';
    } else {
        return 'Evening';
    }
};

export class ExplorePage extends React.Component {
    state = {
        user: '',
        featured: null
    };
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(firebaseUser => {
            console.log(firebaseUser.displayName);
            console.log(firebaseUser.photoURL);
            if (firebaseUser !== null) {
                this.setState({
                    user: firebaseUser.displayName.split(' ')[0]
                });
            }
        });
    };
    render() {
        return (
            <Box overflow="hidden" bg="#000">
                <Flex padding="2rem 2rem" justify="center" mx="auto">
                    <Text
                        fontSize="3rem"
                        as="b"
                        mr="25px"
                        color="white"
                        textAlign="center"
                    >
                        Good {tod()}, {this.state.user}!
                    </Text>
                </Flex>
                <FeaturedArticle />
                {/* <Stack w="85%" px="auto" mt="2.5rem" mx="auto">
                    <Flex direction="column" w="100%">
                        <Flex align="center">
                            <Text
                                fontSize="2.5rem"
                                as="b"
                                mx="15px"
                                color="white"
                            >
                                Trending
                            </Text>
                            <FaChartLine size="2.5rem" color="white" />
                        </Flex>
                        <Text
                            fontSize="1.25rem"
                            ml="20px"
                            marginBottom="10px"
                            color="white"
                        >
                            What's going viral!
                        </Text>
                        <TrendingGrid />
                    </Flex>
                </Stack> */}

                <Box
                    as="section"
                    backgroundColor="#000"
                    width={'60%'}
                    my="100px"
                    mx="auto"
                    borderRadius="15px"
                    borderWidth="3px"
                    borderColor="white"
                >
                    <Stack isInline spacing={8} mx="auto">
                        <Flex
                            p={25}
                            w="full"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Box pos="relative" overflow="hidden">
                                <Box mx="auto">
                                    <Box
                                        pos="relative"
                                        pb="8"
                                        w="full"
                                        border="solid 1px transparent"
                                    >
                                        <Box mt="10" mx="auto" px="4">
                                            <Box
                                                textAlign="center"
                                                w="full"
                                                mx="auto"
                                            >
                                                <Heading
                                                    fontSize="5xl"
                                                    letterSpacing="tight"
                                                    lineHeight="short"
                                                    fontWeight="extrabold"
                                                    color="white"
                                                >
                                                    Read The Rest Of Our
                                                    Catalog!
                                                </Heading>
                                                <Text
                                                    mt="3"
                                                    mx="auto"
                                                    mb={6}
                                                    fontSize="lg"
                                                    color="white"
                                                    lineHeight="base"
                                                    w="75%"
                                                >
                                                    Our endless library of
                                                    articles cover current
                                                    events to all of your
                                                    favorite topics! Get
                                                    reading!
                                                </Text>
                                                <Stack
                                                    direction="row"
                                                    mb="4"
                                                    spacing="4"
                                                    justifyContent="center"
                                                >
                                                    <Box rounded="full">
                                                        <Link to="/articles">
                                                            <Button
                                                                w="full"
                                                                display="flex"
                                                                alignItems="center"
                                                                justifyContent="center"
                                                                px="8"
                                                                py="3"
                                                                fontSize="md"
                                                                rounded="md"
                                                                bg="black"
                                                                color="white"
                                                                as="a"
                                                                my="auto"
                                                                mx="auto"
                                                                rightIcon="arrow-forward"
                                                                fontWeight="bold"
                                                                shadow="md"
                                                                h="56px"
                                                            >
                                                                Get Started
                                                            </Button>
                                                        </Link>
                                                    </Box>
                                                </Stack>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Flex>
                    </Stack>
                </Box>
            </Box>
        );
    }
}

export default ExplorePage;
