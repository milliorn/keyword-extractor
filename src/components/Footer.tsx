import { Box, Image, Text, Flex } from "@chakra-ui/react";
import logo from "../assets/openai.png";

// footer
function Footer(): JSX.Element {
  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignItems="center">
        <Image src={logo} marginRight={1} />
        <Text>
          Powered by <a href="https://openai.com/">OpenAI</a> and{" "}
          <a href="https://chakra-ui.com/">Chakra-UI</a>
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
