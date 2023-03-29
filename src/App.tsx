import { Container, Box } from "@chakra-ui/layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";
import React from "react";

// main app
function App(): JSX.Element {
  function extractKeywords(text: string): void {
    console.log(text);
  }

  return (
    <Box bg="blue.600" color="white" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
    </Box>
  );
}

export default App;
