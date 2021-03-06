import React from 'react';
import {
    Box,
    Tag,
    Text,
    Stack,
    Avatar,
    IconButton,
    Link as ChakraLink
} from '@chakra-ui/core';
import { FaGithub, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

class AboutProfileCard extends React.Component {
    render() {
        return (
            <Box
                width="100%"
                borderWidth="5px"
                borderRadius="10px"
                borderColor="white"
                shadow="xl"
                padding="15px"
            >
                <Stack direction="row" spacing={6}>
                    <Avatar size="xl" src={this.props.img} />
                    <Stack spacing={3} maxW="320px">
                        <Text fontWeight="bold" fontSize="xl" color="white">
                            {this.props.name}
                        </Text>

                        <Stack isInline align="center" spacing={2}>
                            {this.props.github ? (
                                <ChakraLink
                                    href={`https://github.com/${this.props.github}`}
                                    title="GitHub"
                                    isExternal
                                >
                                    <IconButton
                                        color="white"
                                        variant="ghost"
                                        aria-label="Github"
                                        name="github"
                                        fontSize="20px"
                                        size="50px"
                                        padding="5px"
                                        icon={FaGithub}
                                    />
                                </ChakraLink>
                            ) : null}

                            {this.props.twitter ? (
                                <ChakraLink
                                    href={`https://twitter.com/${this.props.twitter}`}
                                    title="Twitter"
                                    isExternal
                                >
                                    <IconButton
                                        color="white"
                                        variant="ghost"
                                        aria-label="Twitter"
                                        name="twitter"
                                        fontSize="20px"
                                        size="50px"
                                        padding="5px"
                                        icon={FaTwitter}
                                    />
                                </ChakraLink>
                            ) : null}

                            {this.props.instagram ? (
                                <ChakraLink
                                    href={`https://www.instagram.com/${this.props.instagram}`}
                                    title="Instagram"
                                    isExternal
                                >
                                    <IconButton
                                        color="white"
                                        variant="ghost"
                                        aria-label="Instagram"
                                        name="instagram"
                                        fontSize="20px"
                                        size="50px"
                                        padding="5px"
                                        icon={FaInstagram}
                                    />
                                </ChakraLink>
                            ) : null}
                            {this.props.email ? (
                                <ChakraLink
                                    href={`mailto:${this.props.email}`}
                                    title="Email"
                                    isExternal
                                >
                                    <IconButton
                                        color="white"
                                        variant="ghost"
                                        aria-label="Email"
                                        name="email"
                                        fontSize="20px"
                                        size="50px"
                                        padding="5px"
                                        icon={FaEnvelope}
                                    />
                                </ChakraLink>
                            ) : null}
                        </Stack>
                        <Stack
                            isInline={[true, false]}
                            align="center"
                            spacing={2}
                        >
                            {this.props.roles.map(role => {
                                return (
                                    <Tag
                                        size="xs"
                                        key="sm"
                                        isTruncated
                                        padding="5px"
                                        fontSize="15px"
                                        color="white"
                                    >
                                        {role}
                                    </Tag>
                                );
                            })}
                        </Stack>
                    </Stack>
                </Stack>
                <Text margin="20px" fontSize="18px" color="white">
                    {this.props.bio}
                </Text>
            </Box>
        );
    }
}

export default AboutProfileCard;
