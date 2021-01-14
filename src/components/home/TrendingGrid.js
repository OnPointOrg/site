import { Flex, Stack } from '@chakra-ui/core';
import React from 'react';

import ExploreCard from './ExploreCard';

const TrendingGrid = (props) => {
   return (
      <Stack direction="column">
         <Flex justify="space-between" marginBottom="1rem" width="100%">
            <ExploreCard
               image={
                  'https://images.unsplash.com/photo-1555448248-2571daf6344b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9'
               }
               tags={['BigTag1', 'BigTag2']}
               size="lg"
               title={'Big Title'}
               desc={'Description Big'}
            />
            <ExploreCard
               image={
                  'https://images.unsplash.com/photo-1535083252457-6080fe29be45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9'
               }
               tags={['SmallTag1', 'SmallTag2']}
               size="sm"
               title={'Small Title'}
               desc={'Small Description'}
            />
         </Flex>

         <Flex justify="space-between" marginBottom="1rem">
            <ExploreCard
               image={
                  'https://images.unsplash.com/photo-1535083252457-6080fe29be45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9'
               }
               tags={['SmallTag1', 'SmallTag2']}
               size="sm"
               title={'Small Title'}
               desc={'Small Description'}
            />
            <ExploreCard
               image={
                  'https://images.unsplash.com/photo-1555448248-2571daf6344b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9'
               }
               tags={['BigTag1', 'BigTag2']}
               size="lg"
               title={'Big Title'}
               desc={'Description Big'}
            />
         </Flex>
      </Stack>
   );
};

export default TrendingGrid;
