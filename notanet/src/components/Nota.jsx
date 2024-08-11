import React from 'react';
import { Box, Text, Button, Flex, Link, Icon } from '@chakra-ui/react';
import { FaHome, FaStickyNote, FaMapSigns, FaEnvelope } from 'react-icons/fa';
import '../components/Nota.css';

const Nota = () => {
  return (
    <Box bg="gray.900" color="white" minH="100vh" p={5}>
      <Flex justify="space-between" align="center">
        <Box as="a" href="/" fontSize="2xl" fontWeight="bold">
          <Icon as={FaEnvelope} mr={2} />
          NOTANET.COM
        </Box>
        <Flex align="center" gap={4}>
          <Link href="#" fontSize="lg">Contacts</Link>
          <Link href="#" fontSize="lg">Home</Link>
          <Link href="#" fontSize="lg">Notes</Link>
          <Link href="#" fontSize="lg">Roadmaps</Link>
        </Flex>
      </Flex>

      <Box textAlign="center" mt={20}>
        <Text fontSize="5xl" fontWeight="bold">Study made easier!</Text>
        <Text fontSize="xl" mt={5}>
          A Website with detailed roadmap and notes for structural growth of students!
        </Text>
        <Button mt={10} size="lg" colorScheme="teal" variant="outline">
          GO BACK HOME
        </Button>
      </Box>

      <Flex justify="center" mt={10}>
        <Text fontSize="8xl" fontWeight="bold" color="gray.700">Start</Text>
        <Text fontSize="8xl" fontWeight="bold" ml={-10}>LEARNIN'</Text>
      </Flex>
    </Box>
  );
};

export default Nota;
