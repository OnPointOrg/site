import React from "react";
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/core";

import config from '../firebase/config';
import * as firebase from 'firebase';

const VARIANT_COLOR = "teal";

const SignUp = () => {

  state = {
    fullName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    signUpSuccess: "",
    loggedIn: <Redirect  to="/components/innerPages/SignupPage" />,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.writeUserData(this.state);
  };

  const writeUserData = () => {
    //const userRef = database.ref("users");
    database
      .ref("users")
      .orderByChild("email")
      .equalTo(this.state.email)
      .once("value", (snap) => {
        if (snap.exists()) {
          console.log(snap.val());
          console.log("Email Already Exists");
          this.setState({
            emailError: "This Email Already Exists! Choose Another Or Login",
          });

          if (this.state.password.length < 8) {
            this.setState({
              passwordError:
                "Your Password Is Too Short! Minimum Password Length Is 8",
            });
            console.log("Password Error Has Ocurred");
          } else {
            this.setState({
              passwordError: "",
            });
          }
        } else if (this.state.email.length === 0) {
          this.setState({ emailError: "Please Enter An Email!" });
          if (this.state.password.length < 8) {
            this.setState({
              passwordError:
                "Your Password Is Too Short! Minimum Password Length Is 8",
            });
          } else {
            this.setState({
              passwordError: "",
            });
          }
        } else {
          this.setState({
            emailError: "",
          });
          console.log(" ############# Inside else ##############");
          if (this.state.password.length < 8) {
            this.setState({
              passwordError:
                "Your Password Is Too Short! Minimum Password Length Is 8",
            });
            console.log("Password Error Has Ocurred");
          } else {
            this.setState({
              passwordError: "",
            });
            database
              .ref("users/" + Math.floor(Math.random() * 1001))
              .set({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.fullName.split(' ')[0],
                lastName: this.state.fullName.split(' ')[1],
                fullName: this.state.fullName,
                loggedIn: true,
              });
            this.setState({
              signUpSuccess: "Account Created Successfully!",
              loggedIn: <Redirect  to="/" />,
            });
          }
        }
      });
  }

  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <ThemeSelector />
        <Box p={4}>
          <SignUpHeader />
          <SignUpForm />
        </Box>
      </Box>
    </Flex>
  );
};

const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box textAlign="right" py={4}>
      <IconButton
        icon={colorMode === "light" ? "moon" : "sun"}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  );
};

const SignUpHeader = () => {
  return (
    <Box textAlign="center">
      <Text>Sign Up</Text>
      <Heading>Start Your Journey</Heading>
      <Heading>@ Onpoint</Heading>
    </Box>
  );
};

const SignUpForm = () => {
  return (
    <Box my={8} textAlign="left">
      <form>
        <FormControl isRequired>
          {/* <FormLabel>Full Name</FormLabel>
                    <Input type="password" placeholder="John Doe" /> */}
          <FormLabel>Full Name</FormLabel>
          <InputGroup>
            <InputLeftElement children={<Icon name="view" />} />
            <Input type="text" placeholder="John Doe" />
          </InputGroup>
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <InputLeftElement children={<Icon name="email" />} />
            <Input type="email" placeholder="john@doe.org" />
          </InputGroup>
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <InputLeftElement children={<Icon name="lock" />} />
            <Input type="password" placeholder="notpassword123" />
          </InputGroup>
        </FormControl>

        <Stack isInline justifyContent="space-between" mt={4}>
          <Box>
            <Checkbox>Remember Me</Checkbox>
          </Box>
        </Stack>

        <Button variantColor={VARIANT_COLOR} width="full" mt={4}>
          Sign Up
        </Button>
        <Box mt={1}>
        Already Have An Account? <Link color={`${VARIANT_COLOR}.500`}>Sign In Here.</Link>
        </Box>
      </form>
    </Box>
  );
};

export default SignUp;
