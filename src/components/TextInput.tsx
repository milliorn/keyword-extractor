import { ChangeEvent, useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";
import React from "react";

// text input
function TextInput({
  extractKeywords,
}: {
  extractKeywords: (text: string) => void;
}): JSX.Element {
  const [text, setText] = useState<string>("");

  const toast = useToast();

  function submitText(): void {
    if (text === "") {
      toast({
        title: "Text field is empty",
        description: "Please enter text",
        status: "error",
        duration: 5000,
        isClosable: false,
      });
    } else {
      {
        extractKeywords(text);
      }
      text;
    }
  }

  return (
    <>
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
