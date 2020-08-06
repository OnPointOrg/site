import React from 'react'
import DefaultNav from '../components/DefaultNav';
import VerifiedNav from '../components/VerifiedNav';
import { ThemeProvider, theme } from '@chakra-ui/core';

const MainHome = () => {
    return (
        <ThemeProvider theme={ theme }>
            <VerifiedNav />
            <h1>This Is The Home Page</h1>
        </ThemeProvider>
    )
}

export default MainHome;