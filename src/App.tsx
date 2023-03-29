import { Container, Box } from "@chakra-ui/layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";
import React, { useState } from "react";
import KeywordModal from "./components/KeywordModal";

// main app
function App(): JSX.Element {
  // State variables to store extracted keywords, modal open status, and loading status
  const [keywords, setKeywords] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // Function to extract keywords from input text using the OpenAI GPT-3 API
  async function extractKeywords(text: string): Promise<void> {
    // Set loading state to true and open the modal
    setLoading(true);
    setIsOpen(true);

    // Set up POST request to send input text to OpenAI API and receive extracted keywords in response
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

    // Send the request and parse the response
    const response = await fetch(import.meta.env.VITE_URL, options);
    const json = await response.json();
    const data = json.choices[0].text.trim();

    // Set the extracted keywords state variable, set loading state to false
    setKeywords(data);
    setLoading(false);
  }

  // Function to close the modal
  function closeModal(): void {
    setIsOpen(false);
  }

  return (
    <Box bg="blue.600" color="white" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
      <KeywordModal
        keywords={keywords}
        loading={loading}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </Box>
  );
}

export default App;
