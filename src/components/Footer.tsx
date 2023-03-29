import { Box, Image, Text, Flex } from "@chakra-ui/react";
import logo from "../assets/openai.png";
import React from "react";

// Define the Footer component as a function that returns a JSX element
function Footer(): JSX.Element {
  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignItems="center">
        <Image src={logo} marginRight={1} />
        <Text>Powered By Open AI</Text>
      </Flex>
    </Box>
  );
}

export default Footer;
