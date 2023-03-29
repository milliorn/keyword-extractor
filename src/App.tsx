import { Container, Box } from "@chakra-ui/layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";
import React, { useState } from "react";

// main app
function App(): JSX.Element {
  const [keywords, setKeywords] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  async function extractKeywords(text: string): Promise<void> {
    // console.log(text);
    setLoading(true);
    setIsOpen(true);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt:
          "Extract keywords from this text. Make the first letter of every word uppercase and separate with commas:\n\n" +
          text +
          "",
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      }),
    };

    const response = await fetch(import.meta.env.VITE_URL, options);
    const json = await response.json();
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
