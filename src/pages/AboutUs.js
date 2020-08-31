import React, { Component } from "react";
import DefaultNav from "../components/DefaultNav";
import {
  ThemeProvider,
  theme,
  Heading,
  Text,
  Image,
  Box,
  SimpleGrid,
} from "@chakra-ui/core";
import teamimg from "../images/team.jpg";

export class AboutUs extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <DefaultNav />
        <Heading as="h1" textAlign="center" fontSize="75px">
          Why?
        </Heading>
        <Box margin="50px">
          <Text textAlign="center" fontSize="25px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            porttitor est et nisi lobortis convallis. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            In hac habitasse platea dictumst. Vestibulum auctor varius
            sollicitudin. Etiam eget libero sed arcu cursus consequat. Nunc ac
            ante a sem dignissim convallis vitae consequat tortor. Nunc non
            semper urna. Donec lectus sem, tempor at hendrerit commodo, accumsan
            non ex. Integer nec dapibus ligula. Pellentesque ornare libero odio,
            sed fringilla lectus luctus ut. Pellentesque non neque lacinia,
            finibus arcu nec, tempor ipsum. Duis semper porttitor enim, quis
            blandit ligula lobortis sit amet. Nam vel dictum elit. Mauris
            commodo diam vel vehicula tempus. Aliquam venenatis efficitur sem, a
            euismod justo. Donec leo tellus, semper quis felis sit amet, aliquam
            posuere nunc. Nullam gravida pharetra libero, volutpat hendrerit
            arcu finibus sit amet. Pellentesque ornare volutpat est, nec ornare
            felis sodales at. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Nam ultrices vitae
            libero sed feugiat. Nam tempus faucibus dui, ultricies interdum
            augue vestibulum sagittis. Morbi a fermentum neque. Donec egestas,
            turpis ac cursus varius, nisi diam elementum ex, quis efficitur
            sapien nibh nec turpis. Nam non turpis lobortis, tincidunt est at,
            semper nisi.
          </Text>
        </Box>
        <Heading as="h1" textAlign="center" fontSize="75px">
          Who?
        </Heading>
        <Box margin="50px">
          <Text textAlign="center" fontSize="25px">
            We Are A Team Of High School Friends (Except For One Of Them) That
            BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH
            BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH
          </Text>
        </Box>
        <SimpleGrid columns={3} spacing={5}>
          <Box>
            <Image></Image>
            <Heading>Aditya Verma</Heading>
            <Text>Founder / CEO</Text>
          </Box>
        </SimpleGrid>
      </ThemeProvider>
    );
  }
}

export default AboutUs;
