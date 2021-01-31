import React from 'react';
import { Box, Text, PseudoBox, Flex, Badge } from '@chakra-ui/core';

export const FeaturedArticle = () => {
   return (
      <Box w="85%" align="center" display="block" mx="auto" mt="15px">
         <PseudoBox
            transition="transform 0.5s"
            cursor="pointer"
            _hover={{
               transform: 'scale(1.02)',
               transition: '0.5s ease-in-out'
            }}
            backgroundImage={`url(https://firebasestorage.googleapis.com/v0/b/onpointnewsorg.appspot.com/o/ArticleThumbnail%2Ftrump.jpeg?alt=media&token=f5cb4d87-2a0c-4b43-8f0d-dce2e7c6a93a)`}
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
            <Text color="rgba(255, 255, 255, 0.61);" fontSize="0.75rem">
               Featured Article Of The Week
            </Text>
            <Text fontSize="3rem" as="b" color="red.50">
               Article Title
            </Text>
            <Text fontSize="1.5rem" color="red.50">
               Article Description
            </Text>
            <Flex marginTop="auto">
               <Badge rounded="md" py="1" px="2" mx="1" backgroundColor="black">
                  <Text color="white">Technology</Text>
               </Badge>
               <Badge rounded="md" py="1" px="2" mx="1" backgroundColor="black">
                  <Text color="white">Politics</Text>
               </Badge>
               <Badge rounded="md" py="1" px="2" mx="1" backgroundColor="black">
                  <Text color="white">Sports</Text>
               </Badge>
            </Flex>
         </PseudoBox>
      </Box>
   );
};
