import React from 'react';
import { Heading, Text, Box, SimpleGrid } from '@chakra-ui/core';

// Team Pictures
import adityaverma from '../images/team/adityaverma.png';
import sujithsanniboyina from '../images/team/sujith1.jpg';
import adityarawat from '../images/team/adityarawat1.jpg';
import adityagirish from '../images/team/adityagirish.png';
import adityahari from '../images/team/adityahari.jpg';
import adityaguntupalli from '../images/team/adityaguntupalli.png';
import yashkhot from '../images/team/yashkhot.jpg';

import Profile from '../components/about/AboutProfileCard';

export class AboutUs extends React.Component {
    render() {
        return (
            <Box width="100%">
                <Box mb={20} overflow="hidden" my="5rem" as="section">
                    <Box as="section">
                        <Box
                            maxW="760px"
                            mx="auto"
                            textAlign="center"
                            pb="15rem"
                            pt="11rem"
                        >
                            <Heading
                                fontSize="5rem"
                                letterSpacing="tight"
                                fontWeight="bold"
                                mb="16px"
                                lineHeight="1.2"
                                color="white"
                            >
                                About Us
                            </Heading>

                            <Heading
                                letterSpacing="tight"
                                fontWeight="bold"
                                lineHeight="1.2"
                            >
                                <Box as="span" color="teal.500">
                                    We're Changing The Way You See Media Forever
                                </Box>
                            </Heading>
                        </Box>
                        <Box bg="black" padding="50px" mt="25px">
                            <Heading
                                fontSize="3rem"
                                letterSpacing="tight"
                                fontWeight="bold"
                                lineHeight="1.2"
                                textAlign="center"
                                color="white"
                            >
                                Our Mission
                            </Heading>
                            <Text
                                fontSize="1.5rem"
                                mt="6"
                                width="75%"
                                textAlign="center"
                                display="block"
                                mx="auto"
                                color="white"
                            >
                                Our mission is to provide a platform for
                                teenagers to create quality media about various
                                topics in the modern world to educate and inform
                                the public.
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        mx="auto"
                        height="90%"
                        mt={'50px'}
                        justifyContent="center"
                    >
                        <Heading
                            fontSize="3rem"
                            letterSpacing="tight"
                            fontWeight="bold"
                            lineHeight="1.2"
                            textAlign="center"
                            mb="2rem"
                        >
                            Our Team
                        </Heading>
                        <SimpleGrid
                            columns={[1, 1, 2, 3]}
                            spacing="20px"
                            mx="25px"
                        >
                            <Profile
                                name="Aditya Verma"
                                roles={['CEO', 'Founder']}
                                bio="Aditya Verma is a sophomore at NHS and the founder of OnPoint. Some of his interests include soccer, biology, and chess! Lives in constant fear of an Aditya revolution."
                                img={adityaverma}
                                github="adiviusd"
                                instagram="_adityavermaaa"
                                email="adiviusd@gmail.com"
                                twitter={false}
                            />
                            <Profile
                                name="Aditya Rawat"
                                roles={['Co-Founder', 'CTO']}
                                bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                img={adityarawat}
                                github="aditya1rawat"
                                instagram="ad1tya_rawhaaat"
                                email="aditya1rawat@gmail.com"
                                twitter="aditya1rawat"
                            />
                            <Profile
                                name="Aditya Girish"
                                roles={['Co-Founder', 'Tech Lead']}
                                bio="Aditya Girish is a sophomore at Northwood High School. He's on the taller scale and runs a lot. Also plays League Of Legends. A lot."
                                img={adityagirish}
                                instagram="aditya.girish"
                                email="adityagirish@gmail.com"
                                github="CurryLion"
                            />
                            <Profile
                                name="Aditya Guntupalli"
                                roles={['Co-Founder', 'Chief Editor']}
                                bio="Aditya Guntupalli is a sophomore at Northwood High School. Turns his music way too high because he turns up to country somehow. Aspiring competitive eater. Wants to work at Hyperloop, even though he probably won't fit through the tunnel."
                                img={adityaguntupalli}
                                github="BilePolice"
                                instagram="aditya.guntupalli"
                                email="adityaguntupalli10@gmail.com"
                                twitter="AdityaGuntupal1"
                            />
                            <Profile
                                name="Aditya Hari"
                                roles={['Co-Founder', 'HR']}
                                bio="Aditya Hari is a sophomore at Northwood High School and runs Human Resources. Why this position exists, I have no clue. He is an athelete at Northwood High School and is Boys Athletic Commissioner."
                                img={adityahari}
                                instagram="_aditya_hari_"
                                email="adityah0205@gmail.com"
                            />
                            <Profile
                                name="Sujith Sanniboyina"
                                roles={['Co-Founder', 'Secretary']}
                                bio="Sujith Sanniboyina is a junior at Northwood High School and is the secretary @ OnPoint. He is interested and passionate about computer science and aerospace engineering"
                                img={sujithsanniboyina}
                                instagram="sujith.sanniboyina"
                                email="22sanniboysujith@gmail.com"
                                github="Sujith-Sanniboyina"
                            />
                            <Profile
                                name="Yash Khot"
                                roles={['Co-Founder', 'Entertainment']}
                                bio="Yash Khot is a sophmore at Northwood High School and is the entertainment lead. He takes interest in many different arts. We freestyled a whole album. Total Gigachad."
                                img={yashkhot}
                                instagram="yashhkhott"
                                email="yash.khot@gmail.com"
                            />
                        </SimpleGrid>
                    </Box>
                </Box>
            </Box>
        );
    }
}

export default AboutUs;
