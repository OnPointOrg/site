import React from 'react';
import { Box, Image, Text } from '@chakra-ui/core';

export const ImageCaption = ({ url, caption }) => {
   return (
      <Box>
         <Image src={url} alt={caption} />
         <Text textAlign="center">{caption}</Text>
      </Box>
   );
};

export default ImageCaption;
