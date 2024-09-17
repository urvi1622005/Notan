import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Box, Flex, } from '@chakra-ui/react';
import Home from './components/Nota.jsx';
import Roadmaps from './components/Cards.jsx';

function App() {
  return (
    <Router>
      <Box p={4}>
        <Flex mb={4} gap={2}>
          {/* <Button as={Link} to="/" colorScheme="teal">
            Home
          </Button>
          <Button as={Link} to="/contact" colorScheme="teal">
            Contact 
          </Button> */}
        </Flex>
        <Link>
        <Routes>
          {/* <Link> */}
          <Route path="/" element={<Home />} />
          <Route path="/Roadmaps" element={<Roadmaps />} />
          {/* </Link> */}
        </Routes>
        </Link>
      </Box>
    </Router>
  );
}
<React/>
export default App;
