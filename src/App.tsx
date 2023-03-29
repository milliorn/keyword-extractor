import { Container, Box } from "@chakra-ui/layout";
import Header from "./components/Header";
import Footer from "./components/Footer";

// main app
function App(): JSX.Element {
  return (
    <Box bg="blue.600" color="white" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent>
        <Header />
        <Footer />
      </Container>
    </Box>
  );
}

export default App;
