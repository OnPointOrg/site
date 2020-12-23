import * as React from "react";
import { Box, Flex, Heading, Icon, Text, useColorMode } from "@chakra-ui/core";
import { motion } from "framer-motion";

const Feature = ({ title, icon, children, ...props }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Box bg={useColorMode("white", "teal.500")} rounded="12px" boxShadow="lg" borderWidth="5px" p="40px" {...props} minH="300px">
        <Flex
          rounded="full"
          w="12"
          h="12"
          bg="teal.500"
          align="center"
          justify="center"
        >
          <Icon fontSize="24px" color="white" as={icon} />
        </Flex>
        <Heading as="h3" size="md" fontWeight="semibold" mt="1em" mb="0.5em">
          {title}
        </Heading>
        <Text fontSize="lg" opacity={0.7}>
          {children}
        </Text>
      </Box>
    </motion.div>
  );
};

export default Feature;
