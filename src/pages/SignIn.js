import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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

import DefaultNav from '../components/nav/DefaultNav';
import VerifiedNav from '../components/nav/VerifiedNav';

import * as firebase from 'firebase';
import Footer from '../components/Footer';

const VARIANT_COLOR = 'teal';

class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
        emailError: '',
        passwordError: '',
        isChecked: false,
        signButton: (
            <Button
                type="submit"
                variantColor={VARIANT_COLOR}
                width="full"
                mt={5}
            >
                Sign In
            </Button>
        ),
        redirect: null,
        currentNav: <DefaultNav />
    };

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    currentNav: <VerifiedNav />
                });
            } else {
                this.setState({
                    currentNav: <DefaultNav />
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

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = (e) => {
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

    onChangeCheckbox = (event) => {
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
                    .catch((error) => {
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
                                        variantColor={VARIANT_COLOR}
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
                                        variantColor={VARIANT_COLOR}
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
                                        variantColor={VARIANT_COLOR}
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
                {this.state.currentNav}
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
                                <Text>Sign In</Text>
                                <Heading>Continue Your Journey</Heading>
                                <Heading>@ Onpoint</Heading>
                            </Box>
                            <Box my={8} textAlign="left">
                                <form onSubmit={this.handleSubmit}>
                                    <FormControl isRequired mt={4}>
                                        <FormLabel>Email</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement
                                                children={<Icon name="email" />}
                                            />
                                            <Input
                                                autoComplete="on"
                                                onChange={this.handleChange}
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="john@doe.org"
                                                value={this.state.email}
                                            />
                                        </InputGroup>
                                        <Text fontSize="xs">
                                            {this.state.emailError}
                                        </Text>
                                    </FormControl>
                                    <FormControl isRequired mt={4}>
                                        <FormLabel>Password</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement
                                                children={<Icon name="lock" />}
                                            />
                                            <Input
                                                onChange={this.handleChange}
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
                                        >
                                            Remember Me
                                        </Checkbox>
                                    </Box>

                                    <Box mt={1}>
                                        Need An Account?{' '}
                                        <ChakraLink
                                            color={`${VARIANT_COLOR}.500`}
                                        >
                                            <Link to="/signup">
                                                Sign Up Here
                                            </Link>
                                        </ChakraLink>
                                    </Box>
                                    <Box mt={1}>
                                        <ChakraLink color="teal.500">
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
                <Footer />
            </Box>
        );
    }
}

export default withRouter(SignIn);
