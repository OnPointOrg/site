import React, { Component } from 'react'
import { ThemeProvider, theme } from '@chakra-ui/core';
import DefaultNav from '../components/DefaultNav';
// import VerifiedNav from '../components/VerifiedNav'; // Will Import Later When I Do The Nav Stuff

export class ContactUs extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <DefaultNav />
                <h1>Contact Us Page</h1>
            </ThemeProvider>
        )
    }
}

export default ContactUs
