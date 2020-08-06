import React, { Component } from 'react';
import DefaultNav from '../components/DefaultNav';
import { ThemeProvider, theme } from '@chakra-ui/core';

export class AboutUs extends Component {
    render() {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <DefaultNav />
                    <h1>About Us Page</h1>
                </ThemeProvider>
            </div>
        )
    }
}

export default AboutUs
