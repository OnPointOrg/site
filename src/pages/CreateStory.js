import React, { Component } from 'react';
import { ThemeProvider, theme } from '@chakra-ui/core';


export class CreateStory extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <DefaultNav />
            </ThemeProvider>
        )
    }
}

export default CreateStory
