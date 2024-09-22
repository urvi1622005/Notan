import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import Nota from './components/Nota.jsx';
import Roadmaps from './components/Cards.jsx';
import Contact from'./components/Contact.jsx';

function App() {
  return (
    <Router>
      <Box p={4}>
        <Flex mb={4} gap={2}>
          {/* Navigation buttons can be added here if needed */}
        </Flex>
        <Routes>
          <Route path="/" element={<Nota />} />
          <Route path="/Roadmaps" element={<Roadmaps />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
