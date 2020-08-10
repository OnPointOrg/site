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
      <Image rounded="md" src="https://bit.ly/2k1H1t6" />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" variantColor="teal">
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
            4 beds &bull; 3 baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          Hey
        </Box>

        <Box>
          <Box as="span" color="white.600" fontSize="sm">
            <Collapse startingHeight={20} isOpen={show}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Collapse>
            <Button size="sm" onClick={handleToggle} mt="1rem" variant="">
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
