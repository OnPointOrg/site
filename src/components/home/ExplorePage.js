import React from 'react';
import { Box, Flex, Stack, Text, Icon, Heading, Button } from '@chakra-ui/core';

import { Link } from 'react-router-dom';
import { FaChartLine, FaMoon } from 'react-icons/fa';
import { WiSunrise } from 'react-icons/wi';

import TrendingGrid from './TrendingGrid';

import firebase from 'firebase';
import { FeaturedArticle } from './FeaturedArticle';

let todIcon = <WiSunrise size="4rem" color="white" />;

const tod = () => {
    const today = new Date();
    const hr = today.getHours();

    if (hr < 12) {
        return 'Morning';
    } else if (hr < 18) {
        todIcon = <Icon name="sun" size="3rem" color="white" />;
        return 'Afternoon';
    } else {
        todIcon = <FaMoon size="2rem" color="white" />;
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
            <Box overflow="hidden" bg="#81e6d91c">
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
                    <Text as="span" mt="20px">
                        {todIcon}
                    </Text>
                </Flex>
                <FeaturedArticle />
                <Stack w="95%" px="auto" mt="2.5rem" mx="auto">
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
                </Stack>

                <Box
                    as="section"
                    backgroundColor="#81e6d91c"
                    width={'60%'}
                    my="100px"
                    mx="auto"
                    borderRadius="15px"
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
                                                    color="gray.500"
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
                                                                variantColor="teal"
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
