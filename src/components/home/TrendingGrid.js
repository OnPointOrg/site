import { Flex, Stack } from '@chakra-ui/core';
import React from 'react';

import ExploreCard from './ExploreCard';

const TrendingGrid = (props) => {
    return (
        <Stack direction="column">
            <Flex justify="space-between" marginBottom="1rem" width="100%">
                <ExploreCard
                    image={
                        'https://firebasestorage.googleapis.com/v0/b/onpointnewsorg.appspot.com/o/banana.jpeg?alt=media&token=73aaa1ea-ac56-4d01-9a3b-84e975da61af'
                    }
                    tags={['Technology']}
                    size="lg"
                    title={
                        'Wireless Lifestyle Consequences & Mobile Devices, Risk, and Attacks'
                    }
                />
                <ExploreCard
                    image={
                        'https://firebasestorage.googleapis.com/v0/b/onpointnewsorg.appspot.com/o/fire.jpeg?alt=media&token=704b3f81-92d0-4d0a-968c-ed2ec3df0db8'
                    }
                    tags={['Politics']}
                    size="sm"
                    title={"Donald Trump's Lack Of Response To BLM"}
                />
            </Flex>

            <Flex justify="space-between" marginBottom="1rem">
                <ExploreCard
                    image={
                        'https://firebasestorage.googleapis.com/v0/b/onpointnewsorg.appspot.com/o/subway.jpeg?alt=media&token=1caa416c-5756-4659-95d3-e906f02d3a63'
                    }
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
