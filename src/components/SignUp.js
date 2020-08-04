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

const VARIANT_COLOR = "teal";

const SignUp = () => {
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
