import { Flex, Stack } from '@chakra-ui/core';
import React from 'react';

import ExploreCard from './ExploreCard';

const TrendingGrid = (props) => {
   return (
      <Stack direction="column">
         <Flex justify="space-between" marginBottom="1rem" width="100%">
            <ExploreCard
               image={
                  'https://firebasestorage.googleapis.com/v0/b/onpointnewsorg.appspot.com/o/BlogThumbnail%2Fcyber-security.jpg?alt=media&token=42c8409e-14d5-4b8d-9f6b-c470515ecf9d'
               }
               tags={['Technology']}
               size="lg"
               title={
                  'Wireless Lifestyle Consequences & Mobile Devices, Risk, and Attacks'
               }
               desc={'Description Big'}
            />
            <ExploreCard
               image={
                  'https://firebasestorage.googleapis.com/v0/b/onpointnewsorg.appspot.com/o/BlogThumbnail%2Fdiv-turakhia%20.jpeg?alt=media&token=71169241-9ed1-4d98-8bfc-6e0b0c117ec6'
               }
               tags={['Politics']}
               size="sm"
               title={"Donald Trump's Lack Of Response To BLM"}
               desc={'Small Description'}
            />
         </Flex>

         <Flex justify="space-between" marginBottom="1rem">
            <ExploreCard
               image={
                  'https://firebasestorage.googleapis.com/v0/b/onpointnewsorg.appspot.com/o/BlogThumbnail%2Fme.png?alt=media&token=8b370ef8-c89c-47b4-8d37-1111b6da94d8'
               }
               tags={['Technology', 'Politics']}
               size="sm"
               title={'Internal & External Threats'}
               desc={'Small Description'}
            />
            <ExploreCard
               image={
                  'https://firebasestorage.googleapis.com/v0/b/onpointnewsorg.appspot.com/o/placeholder.jpg?alt=media&token=d818ce78-464a-4993-9f53-ee459d135d29'
               }
               tags={['Sports', 'Politics']}
               size="lg"
               title={'New New Placeholder Image Test'}
               desc={'Description Big'}
            />
         </Flex>
      </Stack>
   );
};

export default TrendingGrid;
