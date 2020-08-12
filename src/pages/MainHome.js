import React from 'react'
import DefaultNav from '../components/DefaultNav';
import VerifiedNav from '../components/VerifiedNav';
import { ThemeProvider, theme, Heading, Link as ChakraLink, Text, Flex, Image, Grid, Box, Button, SimpleGrid } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import img from "../images/logo.png";
import CheckIfUserSignedIn from '../hooks/CheckIfUserSignedIn';

const MainHome = () => {
    return (
        <ThemeProvider theme={theme}>
            { CheckIfUserSignedIn() }
            <Heading textAlign="center" marginTop="50px" fontSize="65px">We Are OnPoint</Heading>
            <br />
            <Text marginTop="10px" textAlign="center" fontSize="35px">We Want To Change The Way You See The Media Forever</Text>
            <br />
            <br />
            <SimpleGrid columns={3} spacing={5}>
                <Link to="/about"><Button size="lg" margin="10px" width="50%" marginLeft="250px">Learn More</Button></Link>
                <Link to="/signup"><Button size="lg" margin="10px" width="50%" marginLeft="135px">Get Started</Button></Link>
                <Link to="/blog"><Button size="lg" margin="10px" width="50%">Start Reading</Button></Link>
            </SimpleGrid>
        </ThemeProvider>
    )
}

export default MainHome;