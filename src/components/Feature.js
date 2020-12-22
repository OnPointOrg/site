import * as React from "react";
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/core";
import { motion } from "framer-motion";

const Feature = ({ title, icon, children, ...props }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Box rounded="12px" shadow="base" p="40px" {...props} borderWidth="5px">
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
