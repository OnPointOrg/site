import { Flex, Stack } from '@chakra-ui/core';
import React from 'react';

import ExploreCard from './ExploreCard';

const TrendingGrid = (props) => {
   return (
      <Stack direction="column">
         <Flex justify="space-between" marginBottom="1rem" width="100%">
            <ExploreCard
               image={'http://u.filein.io/5anStmrA3j.jpeg'}
               tags={['Technology']}
               size="lg"
               title={
                  'Wireless Lifestyle Consequences & Mobile Devices, Risk, and Attacks'
               }
            />
            <ExploreCard
               image={'http://u.filein.io/VMBau__oBU.jpeg'}
               tags={['Politics']}
               size="sm"
               title={"Donald Trump's Lack Of Response To BLM"}
            />
         </Flex>

         <Flex justify="space-between" marginBottom="1rem">
            <ExploreCard
               image={'http://u.filein.io/RrS5zNT_dA.jpeg'}
               tags={['Technology', 'Politics']}
               size="sm"
               title={'Internal & External Threats'}
            />
            <ExploreCard
               image={
                  'https://firebasestorage.googleapis.com/v0/b/onpointnewsorg.appspot.com/o/imageplaceholder.png?alt=media&token=ce8b4cfa-b3c5-4177-9431-deedad0383ce'
               }
               tags={['Sports', 'Politics']}
               size="lg"
               title={'New New Placeholder Image Test'}
            />
         </Flex>
      </Stack>
   );
};

export default TrendingGrid;
