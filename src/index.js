import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';

import customTheme from './components/theme/theme.js';
import Loading from './components/home/Loading';

const showLoader = () => {
   return <Loading />;
};

const hideLoader = () => {
   return <Loading style={{ display: 'none' }} />;
};

ReactDOM.render(
   <React.StrictMode>
      <ThemeProvider theme={customTheme}>
         <ColorModeProvider>
            <CSSReset />
            <App showLoader={showLoader} hideLoader={hideLoader} />
         </ColorModeProvider>
      </ThemeProvider>
   </React.StrictMode>,
   document.getElementById('root')
);
