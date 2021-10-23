import React, { useEffect, useState } from 'react';
import { Box, Text, Flex, Badge, SimpleGrid } from '@chakra-ui/core';

import { Link } from 'react-router-dom';

import firestoreDatabase from '../../firebase';

export const FeaturedArticle = () => {
    const [featured, setFeatured] = useState(null);
    const [featuredId, setFeatureId] = useState(0);
    useEffect(() => {
        firestoreDatabase
            .collection('articles')
            .where('featured', '==', true)
            .get()
            .then(querySnapshot => {
                console.log(querySnapshot.docs[0].id);
                setFeatureId(querySnapshot.docs[0].id);
                setFeatured(querySnapshot.docs[0].data());
            });
    }, []);

    if (featured && featuredId !== 0) {
        return (
            <Link
                to={`/articles/${featuredId}`}
                onClick={() => {
                    setTimeout(() => {
                        window.location.reload();
                    }, 5);
                }}
            >
                <Box
                    w="85%"
                    transition="transform 0.5s"
                    cursor="pointer"
                    align="center"
                    display="block"
                    mx="auto"
                    mt="15px"
                    // p="3"
                    borderColor="white"
                    borderWidth="5px"
                    borderRadius="25px"
                >
                    <SimpleGrid
                        columns={{ sm: 1, md: 1, lg: 2, base: 1 }}
                        spacing={10}
                    >
                        <Box
                            transition="transform 0.5s"
                            cursor="pointer"
                            _hover={{
                                transform: 'scale(1.02)',
                                transition: '0.5s ease-in-out'
                            }}
                            backgroundImage={`url(${featured.thumbnailImage})`}
                            h="30rem"
                            style={{
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center'
                            }}
                            justifyContent="center"
                            padding="3rem"
                            direction="column"
                            borderRadius="1.5rem"
                        />
                        <Box
                            h="30rem"
                            style={{
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center'
                            }}
                            justifyContent="center"
                            padding="3rem"
                            direction="column"
                            borderRadius="1.5rem"
                        >
                            <Text
                                color="rgba(255, 255, 255, 0.61);"
                                fontSize="0.75rem"
                            >
                                Featured Article Of The Week
                            </Text>
                            <Text fontSize="3rem" as="b" color="red.50">
                                {featured.title}
                            </Text>
                            <Text fontSize="1.5rem" color="red.50" my="10px">
                                {featured.summary}
                            </Text>
                            <Flex marginTop="auto">
                                <Badge
                                    rounded="md"
                                    py="1"
                                    px="2"
                                    my="1"
                                    backgroundColor="black"
                                >
                                    <Text color="white" fontSize="15px">
                                        {featured.category}
                                    </Text>
                                </Badge>
                            </Flex>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Link>
        );
    } else {
        return <div></div>;
    }
};
