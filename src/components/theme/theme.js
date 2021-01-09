import { theme } from '@chakra-ui/core';

const customTheme = {
   ...theme,
   fonts: {
      ...theme.fonts,
      body: 'Ubuntu',
      heading: 'Ubuntu',
      mono: 'Ubuntu'
   }
};

export default customTheme;
