import React from "react";
import { Box, Avatar } from "@chakra-ui/core";

import adityarawat from "../../images/team/adityarawat1.jpg";

const Toast = () => {
  return (
    <Box
      as="a"
      target="_blank"
      rel="noopener"
      display="flex"
      rounded="lg"
      p="5"
      mb="4"
      bg="gray.700"
      shadow="base"
    >
      <Avatar mr="16px" mt="25px" size="sm" src={adityarawat} />
      <Box fontSize="sm">
        <p>
          Aditya Rawat
          <br />
          {" "}
          <Box as="span" opacity={0.7}>
            {"@aditya1rawat"} <br /> {"11 / 24 / 20"}
          </Box>
        </p>
        <Box as="p" mt="2">
          Retard
        </Box>
      </Box>
    </Box>
  );
};

export default Toast;
