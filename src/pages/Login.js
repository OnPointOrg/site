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

const LoginArea = () => {
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
                    <LoginHeader />
                    <LoginForm />
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

const LoginHeader = () => {
    return (
        <Box textAlign="center">
            <Text>Sign In</Text>
            <Heading>Continue Your Journey</Heading>
            <Heading>@ Onpoint</Heading>
        </Box>
    );
};

const LoginForm = () => {
    return (
        <Box my={8} textAlign="left">
            <form>
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
                    <Box>
                        <Link color={`${VARIANT_COLOR}.500`}>Forgot your password?</Link>
                    </Box>
                </Stack>

                <Button variantColor={VARIANT_COLOR} width="full" mt={4}>
                    Sign In
                </Button>
                <Box mt={1}>
                    Need An Account? <Link color={`${VARIANT_COLOR}.500`}>Register Here.</Link>
                </Box>
            </form>
        </Box>
    );
};

export default LoginArea;
