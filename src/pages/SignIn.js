import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
    Box,
    Flex,
    Heading,
    Text,
    FormControl,
    FormLabel,
    Input,
    Button,
    InputGroup,
    InputLeftElement,
    Icon,
    Link as ChakraLink,
    Checkbox
} from '@chakra-ui/core';

import * as firebase from 'firebase';

const VARIANT_COLOR = 'white';

class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
        emailError: '',
        passwordError: '',
        isChecked: false,
        signButton: (
            <Button type="submit" color={VARIANT_COLOR} width="full" mt={5}>
                Sign In
            </Button>
        ),
        redirect: null
    };

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    redirect: <Redirect to="/" />
                });
            }
        });

        if (localStorage.checkbox && localStorage.email !== '') {
            this.setState({
                email: localStorage.email,
                password: localStorage.password
            });
        }
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            signButton: (
                <Button
                    isLoading
                    loadingText="Signing In..."
                    width="full"
                    mt={4}
                />
            )
        });
        this.signInSubmit();
        console.log(this.state);
    };

    onChangeCheckbox = event => {
        // console.log(this.state.isChecked);
        this.setState({
            isChecked: event.target.checked
        });
        console.log(this.state.isChecked);
    };

    signInSubmit = () => {
        const email = this.state.email;
        const password = this.state.password;

        firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password)
                    .catch(error => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        if (errorCode === 'auth/wrong-password') {
                            this.setState({
                                passwordError: (
                                    <Text fontSize="xs">
                                        You Have Entered An Invalid Password.
                                        Try Again Or Reset Your Password
                                    </Text>
                                ),
                                emailError: '',
                                signButton: (
                                    <Button
                                        type="submit"
                                        color={VARIANT_COLOR}
                                        width="full"
                                        mt={5}
                                    >
                                        Sign In
                                    </Button>
                                )
                            });
                        } else if (errorCode === 'auth/user-not-found') {
                            this.setState({
                                emailError: (
                                    <Text fontSize="xs">
                                        This Email Does Not Exist
                                    </Text>
                                ),
                                passwordError: '',
                                signButton: (
                                    <Button
                                        type="submit"
                                        color={VARIANT_COLOR}
                                        width="full"
                                        mt={5}
                                    >
                                        Sign In
                                    </Button>
                                )
                            });
                        } else if (errorCode === 'auth/too-many-requests') {
                            this.setState({
                                emailError: (
                                    <Text fontSize="xs">
                                        Your Account Has Been Temporarily
                                        Disabled. Contact Us If This Is A
                                        Mistake
                                    </Text>
                                ),
                                passwordError: '',
                                signButton: (
                                    <Button
                                        type="submit"
                                        color={VARIANT_COLOR}
                                        width="full"
                                        mt={5}
                                    >
                                        Sign In
                                    </Button>
                                )
                            });
                        }
                        console.log('Error Message: ' + errorMessage);
                        console.log('Error Code: ' + errorCode);
                    })
                    .then(() => {
                        if (this.state.isChecked) {
                            sessionStorage.setItem('email', this.state.email);
                            sessionStorage.setItem(
                                'password',
                                this.state.password
                            );
                            sessionStorage.setItem(
                                'checkbox',
                                this.state.isChecked
                            );
                            localStorage.email = sessionStorage.getItem(
                                'email'
                            );
                            localStorage.password = sessionStorage.getItem(
                                'password'
                            );
                            localStorage.checkbox = sessionStorage.getItem(
                                'checkbox'
                            );
                        } else {
                            localStorage.clear();
                            sessionStorage.clear();
                        }
                        const { history } = this.props;
                        const user = firebase.auth().currentUser;
                        if (user) {
                            this.setState({
                                redirect: history.push('/')
                            });
                        }
                    });
            });
    };

    render() {
        return (
            <Box>
                <Flex
                    my="7rem"
                    minHeight="50vh"
                    width="full"
                    align="center"
                    justifyContent="center"
                >
                    <Box>
                        <Box p={4}>
                            <Box textAlign="center">
                                <Text color="white">Sign In</Text>
                                <Heading>Continue Your Journey</Heading>
                                <Heading>@ Onpoint</Heading>
                            </Box>
                            <Box my={8} textAlign="left">
                                <form onSubmit={this.handleSubmit}>
                                    <FormControl isRequired mt={4}>
                                        <FormLabel color="white">
                                            Email
                                        </FormLabel>
                                        <InputGroup>
                                            <InputLeftElement
                                                children={<Icon name="email" />}
                                            />
                                            <Input
                                                autoComplete="on"
                                                color="white"
                                                background="black"
                                                onChange={this.handleChange}
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="john@doe.org"
                                                value={this.state.email}
                                            />
                                        </InputGroup>
                                        <Text fontSize="xs" color="red">
                                            {this.state.emailError}
                                        </Text>
                                    </FormControl>
                                    <FormControl isRequired mt={4}>
                                        <FormLabel color="white">
                                            Password
                                        </FormLabel>
                                        <InputGroup>
                                            <InputLeftElement
                                                children={<Icon name="lock" />}
                                            />
                                            <Input
                                                onChange={this.handleChange}
                                                color="white"
                                                background="black"
                                                id="password"
                                                name="email"
                                                type="password"
                                                placeholder="notpassword123"
                                                value={this.state.password}
                                            />
                                        </InputGroup>
                                        <Text fontSize="xs">
                                            {this.state.passwordError}
                                        </Text>
                                    </FormControl>
                                    {this.state.signButton}

                                    <Box mt={1}>
                                        <Checkbox
                                            checked={this.state.isChecked}
                                            name="lsRememberMe"
                                            onChange={this.onChangeCheckbox}
                                            color="white"
                                        >
                                            Remember Me
                                        </Checkbox>
                                    </Box>

                                    <Box mt={1} color="white">
                                        Need An Account?{' '}
                                        <ChakraLink color={`${VARIANT_COLOR}`}>
                                            <Link to="/signup">
                                                Sign Up Here
                                            </Link>
                                        </ChakraLink>
                                    </Box>
                                    <Box mt={1}>
                                        <ChakraLink>
                                            <Link to="/forgotpassword">
                                                Forgot Your Password?
                                            </Link>
                                        </ChakraLink>
                                    </Box>
                                </form>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        );
    }
}

export default SignIn;
