import { Box, Text, Button, Flex, Link, Icon } from '@chakra-ui/react';
import { FaHome, FaStickyNote, FaMapSigns, FaEnvelope } from 'react-icons/fa';
import './Nota.css';

const Nota = () => {
  return (
    <Box
      bg="linear-gradient(to top right, black,lightgray)"
      color="white"
      minH="100vh"
      p={{ base: 4, md: 8 }}
    >
      <Flex justify="space-between" align="center" flexDirection={{ base: 'column', md: 'row' }}>
        <Text as="a" href="/" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mb={{ base: 4, md: 0 }}>
          <Icon as={FaEnvelope} mr={2} />
          NOTANET.COM
        </Text>
        <Flex align="center" gap={{ base: 2, md: 6 }}>
          <Link href="#" fontSize={{ base: 'md', md: 'lg' }}>Contacts</Link>
          <Link href="#" fontSize={{ base: 'md', md: 'lg' }}>Home</Link>
          <Link href="#" fontSize={{ base: 'md', md: 'lg' }}>Notes</Link>
          <Link href="#" fontSize={{ base: 'md', md: 'lg' }}>Roadmaps</Link>
        </Flex>
      </Flex>

      <Box textAlign="center" mt={{ base: 12, md: 24 }}>
        <Text fontSize={{ base: '2xl', md: '5xl' }} fontWeight="bold">
          Study made easier!
        </Text>
        <Text fontSize={{ base: 'lg', md: 'xl' }} mt={{ base: 4, md: 8 }}>
          A website with detailed roadmap and notes for structural growth of students!
        </Text>
        <Button mt={{ base: 6, md: 10 }} size={{ base: 'md', md: 'lg' }} colorScheme="teal" variant="outline">
          GO BACK HOME
        </Button>
      </Box>

      <Flex justify="center" mt={{ base: 8, md: 16 }}>
        <Text fontSize={{ base: '4xl', md: '8xl' }} fontWeight="bold" color="gray.700">
          start
        </Text>
        <Text fontSize={{ base: '4xl', md: '8xl' }} fontWeight="bold" ml={{ base: -6, md: -10 }}>
          LEARNIN'
        </Text>
      </Flex>
    </Box>
  );
};

export default Nota;
