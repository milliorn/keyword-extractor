import { ChangeEvent, useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";
import React from "react";

// component for text input and submit button
function TextInput({
  extractKeywords,
}: {
  extractKeywords: (text: string) => void;
}): JSX.Element {
  // state to hold text entered in textarea
  const [text, setText] = useState<string>("");

  // hook to display toast messages
  const toast = useToast();

  function submitText(): void {
    // if text field is empty, show error message
    if (text === "") {
      toast({
        title: "Text field is empty",
        description: "Please enter text",
        status: "error",
        duration: 5000,
        isClosable: false,
      });
    } else {
      // call the function passed down from parent to extract keywords from the text
      extractKeywords(text);
    }
  }

  return (
    <>
      {/* textarea for entering text */}
      <Textarea
        bg="blue.400"
        padding={4}
        marginTop={6}
        height={200}
        color="white"
        value={text}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setText(e.target.value)
        }
      />

      {/* button to trigger keyword extraction */}
      <Button
        bg="blue.500"
        color="white"
        marginTop={4}
        width="100%"
        _hover={{ bg: "blue.700" }}
        onClick={submitText}
      >
        Extract Keywords
      </Button>
    </>
  );
}

export default TextInput;
