import React from "react";

import {
  Flex,
  Badge,
  Text,
  Box,
  Image,
  Icon,
  Collapse,
  Button,
  Link
} from "@chakra-ui/core";

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
            Aditya Rawat &bull;&bull;&bull; August 8th, 2020
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
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Collapse>
            <Button size="sm" onClick={handleToggle} mt="1rem" variant="outline">
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
