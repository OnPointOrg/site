import React from "react";
import { Box, Image, Tag } from "@chakra-ui/core";

export const About = (props) => {
  return (
    <div>
      <Box w="100%">
        <Box maxW="sm" borderWidth="1px" rounded="lg">
          <Image
            src={props.img}
            alt="Aditya Verma"
            overflow="hidden"
            rounded="md"
          />
          <Box px="6" fontWeight="bold" as="h4" lineHeight="tight">
            {props.name}
          </Box>

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {props.roles.map((role) => {
                return (
                  <Tag size={"sm"} key={"sm"} variantColor="gray" mr={"5px"}>
                    {role}
                  </Tag>
                );
              })}
            </Box>
            <Box
              pt="3"
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              {props.bio}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default About;
