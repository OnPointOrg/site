import React from 'react'
import DefaultNav from '../components/DefaultNav';
import VerifiedNav from '../components/VerifiedNav';
import { ThemeProvider, theme, Heading, Link as ChakraLink, Text, Flex, Image, Grid, Box, Button } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import img from "../images/logo.png";

const MainHome = () => {
    return (
        <ThemeProvider theme={theme}>
            <DefaultNav />
            {/* <Heading textAlign="center" fontSize="100px">👋 Hey</Heading> */}
            {/* <br /> */}
            <Heading textAlign="center" fontSize="65px">We Are OnPoint</Heading>
            <Text marginTop="5px" textAlign="center"><Button><ChakraLink color="teal.500"><Link to="/signup">Sign Up</Link></ChakraLink></Button> or <Button><ChakraLink color="teal.500"><Link to="/signin">Sign In</Link></ChakraLink></Button></Text>
            <Grid templateColumns="repeat(3, 1fr)" marginTop="20px">
                <Box w="100%" />
                <Box w="95%" overflow="hidden">
                    <Image size="100%" justifyContent="center" w="100%" src={img} rounded="small" />
                </Box>
                <Box w="100%" />
            </Grid>
        </ThemeProvider>
    )
}

export default MainHome;