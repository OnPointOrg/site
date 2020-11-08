import React from "react";
import { Flex, Box, Stack, Text } from "@chakra-ui/core";

const Stats = () => {
  return (
    <Flex
      direction="column"
      align="center"
      pl={{ base: 0, md: "8" }}
      borderLeft="2px solid"
      borderLeftColor="yellow.200"
    >
      <Box
        fontSize={{ base: "4rem", md: "6.75rem" }}
        lineHeight="1em"
        mb="20px"
      >
        Title
      </Box>
      <Stack isInline align="center">
        <StatIcon size="24px" />
        <Text>Lorem ipsum dolor sit amet</Text>
      </Stack>
    </Flex>
  );
};

export default Stats;
