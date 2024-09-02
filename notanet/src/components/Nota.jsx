import React from 'react';
import { Box, Text, Button, Flex, Link as ChakraLink, Icon } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaHome, FaStickyNote, FaMapSigns, FaEnvelope } from 'react-icons/fa';
import './Nota.css';

const Nota = () => {
  return (
    <Box
      className="nota-container"
      bg="linear-gradient(to top right, black 50%, lightgray 100%)"
      color="white"
      width="100vw"
      minH="100vh"
      p={{ base: 4, md: 8, lg: 12, xl: 16 }}
      maxWidth="100vw" 
      overflowX="hidden"
    >
      <Flex as="nav" justify="space-between" align="center" flexDirection={{ base: 'column', md: 'row' }}>
        <ChakraLink as={RouterLink} to="/" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mb={{ base: 4, md: 0 }}>
          <Icon as={FaEnvelope} mr={2} />
          NOTANET.COM
        </ChakraLink>
        <Flex as="ul" align="center" gap={{ base: 2, md: 6 }} listStyleType="none">
          <li><ChakraLink as={RouterLink} to="/contact" fontSize={{ base: 'md', md: 'lg' }}>Contact</ChakraLink></li>
          <li><ChakraLink as={RouterLink} to="/" fontSize={{ base: 'md', md: 'lg' }}>Home</ChakraLink></li>
          <li><ChakraLink as={RouterLink} to="/notes" fontSize={{ base: 'md', md: 'lg' }}>Notes</ChakraLink></li>
          <li><ChakraLink as={RouterLink} to="/roadmaps" fontSize={{ base: 'md', md: 'lg' }}>Roadmaps</ChakraLink></li>
        </Flex>
      </Flex>

      <Flex direction="column" justify="space-between" maxWidth="1200px" width="100%" mx="auto" align="center" flex="1" textAlign="center" mt={{ base: 12, md: 24 }}>
        <Text fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} fontWeight="bold" textAlign="center">
          Study made easier!
        </Text>
        <Text fontSize={{ base: 'lg', md: 'xl' }} mt={{ base: 4, md: 8 }}>
          A website with detailed roadmap and notes for structural growth of students!
        </Text>
        <Button as={RouterLink} to="/" mt={{ base: 6, md: 10 }} size={{ base: 'md', md: 'lg' }} colorScheme="teal" variant="outline">
          GO BACK HOME
        </Button>
      </Flex>

      <Flex justify="center" flexWrap="wrap" width="100%" mt={{ base: 8, md: 16 }}>
        <Text fontSize={{ base: '4xl', md: '6xl', lg: '8xl' }} fontWeight="bold" color="gray.700">
          start
        </Text>
        <Text fontSize={{ base: '4xl', md: '6xl', lg: '8xl' }} fontWeight="bold" ml={{ base: 2, md: -6, lg: -10 }}>
          LEARNIN'
        </Text>
      </Flex>
    </Box>
  );
};

export default Nota;
