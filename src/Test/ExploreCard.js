import React from 'react';
import { Badge, Flex, PseudoBox, Text } from '@chakra-ui/core';

const ExploreCard = (props) => {
   return (
      <PseudoBox
         w={props.size === 'sm' ? '43%' : '55%'}
         transition="0.5s ease-in-out"
         cursor="pointer"
         _hover={{
            boxShadow: '0px 0px 20px rgba(115, 108, 124, 0.58)',
            transform: 'scale(1.02)',
            transition: '0.5s ease-in-out'
         }}
         h="100%"
         borderRadius="0.5rem"
      >
         <Flex
            h="100%"
            borderRadius="0.5rem"
            style={{
               backgroundImage: `url(${props.image})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center center'
            }}
            padding="1rem 1rem"
            direction="column"
         >
            <Flex direction="row">
               {props.tags.map((t, i) => (
                  <Badge
                     key={i}
                     variant="solid"
                     borderRadius="999px"
                     style={{
                        textTransform: 'lowercase',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                     }}
                     marginRight="10px"
                     h="1.5rem"
                     paddingX="0.7rem"
                     bg={i % 2 === 0 ? 'green.100' : 'purple.100'}
                     color={i % 2 === 0 ? 'green.500' : 'purple.500'}
                  >
                     {'#sadklfjasldkf'}
                  </Badge>
               ))}
            </Flex>
            <Text
               marginTop="auto"
               color="white"
               fontWeight="600"
               fontSize="2.8rem"
               style={{ lineHeight: '1.1' }}
            >
               {props.title}
            </Text>
            {props.desc && (
               <Text color="white" fontSize="1.5rem">
                  {props.desc}
               </Text>
            )}
         </Flex>
      </PseudoBox>
   );
};

export default ExploreCard;
