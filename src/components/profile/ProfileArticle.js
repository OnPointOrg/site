import React from 'react';

import {
    Badge,
    Box,
    Image,
    Collapse,
    Button,
    Stack,
    Tooltip,
    Heading,
    IconButton
} from '@chakra-ui/core';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export class ProfileArticle extends React.Component {
    state = {
        show: false
    };

    handleToggle = () => {
        this.setState({
            show: !this.state.show
        });
    };

    convertFromUnix = date => {
        const dateObject = new Date(date);
        date = dateObject.toLocaleDateString('en-US');
        return date;
    };

    componentDidMount = () => {
        const user = firebase.auth().currentUser;

        if (user != null) {
            user.providerData.forEach(profile => {
                console.log('Sign-in provider: ' + profile.providerId);
                console.log('  Provider-specific UID: ' + profile.uid);
                console.log('  Name: ' + profile.displayName);
                console.log('  Email: ' + profile.email);
                console.log('  Photo URL: ' + profile.photoURL);
            });
        }
    };

    render() {
        return (
            <Box borderWidth="1px" shadow="md" rounded="lg" overflow="hidden">
                <Link
                    to={() => `/articles/${this.props.docId}`}
                    onClick={() => {
                        setTimeout(() => {
                            window.location.reload();
                        }, 5);
                    }}
                >
                    <Box height="200px" overflow="hidden">
                        <Image src={this.props.thumbnailImage} width="100%" />
                    </Box>
                </Link>
                <Box>
                    <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            <Stack isInline>
                                <Badge rounded="md" py="1" px="2" color="white">
                                    {this.props.category}
                                </Badge>
                            </Stack>
                        </Box>
                        <Box
                            marginTop="5"
                            marginBottom="2.5"
                            marginLeft="2px"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            color="white"
                            textDecoration="none"
                        >
                            <Link
                                to={() => `/articles/${this.props.docId}`}
                                onClick={() => {
                                    setTimeout(() => {
                                        window.location.reload();
                                    }, 5);
                                }}
                            >
                                <Tooltip
                                    label={this.props.title}
                                    placement="top-start"
                                >
                                    <Heading fontSize="20px" isTruncated>
                                        {this.props.title}
                                    </Heading>
                                </Tooltip>
                            </Link>
                        </Box>
                        <Box
                            marginTop="3"
                            marginBottom="3"
                            marginLeft="2px"
                            fontWeight="semibold"
                            color="white"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            lineHeight="tight"
                            isTruncated
                        >
                            {this.convertFromUnix(this.props.date)}{' '}
                            &bull;&bull;&bull;{' '}
                            {this.props.views === 1
                                ? this.props.views + ' View'
                                : this.props.views + ' Views'}
                        </Box>
                        <Box marginTop="3">
                            <Box as="span" fontSize="sm" color="white">
                                <Collapse
                                    startingHeight={20}
                                    isOpen={this.state.show}
                                >
                                    {this.props.summary}
                                </Collapse>
                                <Button
                                    size="sm"
                                    onClick={this.handleToggle}
                                    mt="1rem"
                                    variant="outline"
                                    color="white"
                                >
                                    Show {this.state.show ? 'Less' : 'More'}
                                </Button>
                            </Box>
                            <Link
                                to={() => `/articles/${this.props.docId}`}
                                onClick={() => {
                                    setTimeout(() => {
                                        window.location.reload();
                                    }, 5);
                                }}
                            >
                                <IconButton
                                    size="sm"
                                    ml="10px"
                                    mt="1rem"
                                    variant="solid"
                                    color="white"
                                    icon={FaArrowRight}
                                />
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    }
}

export default ProfileArticle;
