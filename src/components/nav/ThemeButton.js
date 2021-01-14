import React from 'react';
import { IconButton, useColorMode, Box } from '@chakra-ui/core';

const ThemeButton = () => {
   const { colorMode, toggleColorMode } = useColorMode();

   return (
      <Box>
         <IconButton
            size="lg"
            aria-label={`Switch to ${
               colorMode === 'light' ? 'dark' : 'light'
            } mode`}
            variant="outline"
            color="current"
            fontSize="20px"
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? 'moon' : 'sun'}
            _focus={{
               outline: 'none'
            }}
         />
      </Box>
   );
};

export default ThemeButton;
