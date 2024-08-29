import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Box, Flex, Button } from '@chakra-ui/react';
import Home from './components/Nota';
import Contact from './components/Cards';

function App() {
  return (
    <Router>
      <Box p={4}>
        <Flex mb={4} gap={2}>
          <Button as={Link} to="/" colorScheme="teal">
            Home
          </Button>
          <Button as={Link} to="/contact" colorScheme="teal">
            Contact
          </Button>
        </Flex>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </Router>
  );
}
<React/>
export default App;
