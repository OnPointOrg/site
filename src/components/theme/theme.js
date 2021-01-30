import { theme } from '@chakra-ui/core';

const customTheme = {
   ...theme,

   fonts: {
      ...theme.fonts,
      body: 'Ubuntu',
      heading: 'Merriweather Sans',
      mono: 'Space Mono'
   }
};

export default customTheme;
