import React from 'react';
import { ThemeProvider, theme, ColorModeProvider, CSSReset } from '@chakra-ui/core';

const App = () => {
  return (
     <ThemeProvider theme={theme}>
       <ColorModeProvider>
        <CSSReset />
       </ColorModeProvider>
     </ThemeProvider>
  );
}

export default App;
