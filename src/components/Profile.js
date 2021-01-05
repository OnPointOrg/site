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

class Profile extends React.Component {
    render() {
        return (
            <Box
                width="100%"
                borderWidth="5px"
                borderRadius="10px"
                shadow="xl"
                bg="teal"
                padding="15px"
            >
                <Stack direction="row" spacing={6}>
                    <Avatar size="xl" src={this.props.img} />
                    <Stack spacing={3} maxW="320px">
                        <Text fontWeight="bold" fontSize="xl">
                            {this.props.name}
                        </Text>

                        <Stack isInline align="center" spacing={2}>
                            {this.props.roles.map((role) => {
                                return (
                                    <Tag
                                        size={'sm'}
                                        key={'sm'}
                                        variantColor="gray"
                                        mr={'5px'}
                                    >
                                        {role}
                                    </Tag>
                                );
                            })}
                        </Stack>
                        <Stack isInline align="center" spacing={2}>
                            <ChakraLink
                                href="https://github.com/OnPointOrg"
                                title="GitHub"
                                isExternal
                            >
                                <IconButton
                                    color="gray.500"
                                    variant="ghost"
                                    aria-label="Github"
                                    name="github"
                                    fontSize="20px"
                                    size="50px"
                                    padding="5px"
                                    icon={FaGithub}
                                />
                            </ChakraLink>
                            <ChakraLink
                                href={`https://twitter.com/${this.props.twitter}`}
                                title="Twitter"
                                isExternal
                            >
                                <IconButton
                                    color="gray.500"
                                    variant="ghost"
                                    aria-label="Twitter"
                                    name="twitter"
                                    fontSize="20px"
                                    size="50px"
                                    padding="5px"
                                    icon={FaTwitter}
                                />
                            </ChakraLink>
                            <ChakraLink
                                href={`https://www.instagram.com/${this.props.instagram}`}
                                title="Instagram"
                                isExternal
                            >
                                <IconButton
                                    color="gray.500"
                                    variant="ghost"
                                    aria-label="Instagram"
                                    name="instagram"
                                    fontSize="20px"
                                    size="50px"
                                    padding="5px"
                                    icon={FaInstagram}
                                />
                            </ChakraLink>

                            <ChakraLink
                                href={`mailto:${this.props.email}`}
                                title="Email"
                                isExternal
                            >
                                <IconButton
                                    color="gray.500"
                                    variant="ghost"
                                    aria-label="Email"
                                    name="email"
                                    fontSize="20px"
                                    size="50px"
                                    padding="5px"
                                    icon={FaEnvelope}
                                />
                            </ChakraLink>
                        </Stack>
                    </Stack>
                </Stack>
                <Text margin="20px">{this.props.bio}</Text>
            </Box>
        );
    }
}

export default Profile;
