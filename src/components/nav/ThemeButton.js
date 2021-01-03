import React from 'react';
import { IconButton, useColorMode, Tooltip } from '@chakra-ui/core';

const ThemeButton = () => {
  const { colorMode } = useColorMode();
  // const { toggleColorMode } = useColorMode();

  return (
    <Tooltip
      label="Light Mode Is Broken At The Moment"
      placement="bottom"
      zIndex="1000"
    >
      <IconButton
        size="lg"
        aria-label={`Switch to ${
          colorMode === 'light' ? 'dark' : 'light'
        } mode`}
        variant="outline"
        color="current"
        fontSize={['20px', '20px', '20px', '20px']}
        // onClick={toggleColorMode}
        icon={colorMode === 'light' ? 'moon' : 'sun'}
        _focus={{
          outline: 'none'
        }}
      />
    </Tooltip>
  );
};

export default ThemeButton;
