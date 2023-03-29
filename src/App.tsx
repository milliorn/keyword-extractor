import { Container, Box } from "@chakra-ui/layout";

// main app
function App(): JSX.Element {
  return (
    <Box bg="blue.600" color="white" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent>
        <h1>App</h1>
      </Container>
    </Box>
  );
}

export default App;
