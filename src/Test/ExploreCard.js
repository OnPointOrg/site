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
         h="auto"
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
               <Badge rounded="md" py="1" px="2" backgroundColor="black">
                  Technology
               </Badge>
            </Flex>
            <Text my="auto" color="white" fontWeight="600" fontSize="2rem">
               {props.title}
            </Text>
            {props.desc && (
               <Text color="white" fontSize="1rem">
                  {props.desc}
               </Text>
            )}
         </Flex>
      </PseudoBox>
   );
};

export default ExploreCard;