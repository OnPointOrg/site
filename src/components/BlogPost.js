import React from "react";

import {
  Badge,
  Box,
  Image,
  Collapse,
  Button,
  Link,
  Tooltip,
} from "@chakra-ui/core";

import firebase from "firebase";
import firestoreDatabase from "../firebase/config";


export const BlogPost = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <Image src="https://bit.ly/2k1H1t6" />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="3" variantColor="teal">
            Trending
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            <Link>{}</Link> &bull;&bull;&bull;{" "}
            <Tooltip label="August 10th, 2020" placement="bottom" hasArrow>
              08 / 10 / 2020
            </Tooltip>
          </Box>
        </Box>

        <Box
          marginTop="5"
          marginBottom="5"
          marginLeft="2px"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          An Interesting Title
        </Box>

        <Box>
          <Box as="span" color="white.600" fontSize="sm">
            <Collapse startingHeight={20} isOpen={show}>
              {  }
            </Collapse>
            <Button
              size="sm"
              onClick={handleToggle}
              mt="1rem"
              variant="outline"
            >
              Show {show ? "Less" : "More"}
            </Button>
          </Box>
          <Button size="sm" ml="10px" mt="1rem" variant="ghost">
            <Link>Read More</Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogPost;
