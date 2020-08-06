import React, { Component } from 'react'
import { ThemeProvider, theme } from '@chakra-ui/core';
import DefaultNav from '../components/DefaultNav';
import VerifiedNav from '../components/VerifiedNav';

export class ContactUs extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <VerifiedNav />
                <h1>Contact Us Page</h1>
            </ThemeProvider>
        )
    }
}

export default ContactUs
