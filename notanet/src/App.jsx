import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Flex, ChakraProvider, Button, Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Nota from './components/Nota.jsx';
import Roadmaps from './components/Cards.jsx';
import Notes from './components/notes.jsx';
import Contact from './components/Contact.jsx';
import Modal from 'react-modal';
import Dash from './components/dash.jsx';
import Animate from './components/AnimatedStat.jsx';
import CTASection from './components/CTASection.jsx';
import FeatureSection from './components/FeatureSection.jsx';

Modal.setAppElement('#root'); // For accessibility when using modal

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box p={4}>
          {/* Navigation bar */}
          <Flex justify="space-around" width="100%" mb={6}>
            <ChakraLink as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
              Home
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/roadmaps" fontSize="xl" fontWeight="bold">
              Roadmaps
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/notes" fontSize="xl" fontWeight="bold">
              Notes
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/contact" fontSize="xl" fontWeight="bold">
              Contact
            </ChakraLink>
          </Flex>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Nota />} />
            <Route path="/roadmaps" element={<Roadmaps />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>

          {/* Always visible components */}
          {/* Adjusting visibility for large screen and mobile using Tailwind's responsive classes */}
          <div className="w-full flex flex-col items-center">
            <div className="w-full md:w-3/4 lg:w-1/2">
              <Nota /> {/* This component appears first */}
            </div>

            <div className="w-full md:w-3/4 lg:w-1/2 mt-12">
              <Dash /> {/* This component appears after Nota */}
            </div>

            {/* Other components */}
            <div className="w-full md:w-3/4 lg:w-1/2 mt-12">
              <CTASection />
            </div>

            <div className="w-full md:w-3/4 lg:w-1/2 mt-12">
              <Animate />
            </div>

            <div className="w-full md:w-3/4 lg:w-1/2 mt-12">
              <FeatureSection />
            </div>
          </div>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
