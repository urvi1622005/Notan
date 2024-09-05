import React from 'react';
import { Box, Text, Button, Flex, Link as ChakraLink, Icon } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaHome, FaStickyNote, FaMapSigns, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import './Nota.css';

const Nota = () => {
  return (
    <Parallax
      blur={0}
      bgImage="/path/to/your/background-image.jpg"
      strength={500}
    >
      <Box
        className="nota-container"
        bg="linear-gradient(to top right, rgba(0,0,0,0.8) 50%, rgba(211,211,211,0.8) 100%)"
        color="white"
        width="100vw"
        minH="100vh"
        p={{ base: 4, md: 8, lg: 12, xl: 16 }}
        maxWidth="100vw" 
        overflowX="hidden"
      >
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Flex justify="space-between" align="center" flexDirection={{ base: 'column', md: 'row' }}>
            <ChakraLink as={RouterLink} to="/" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mb={{ base: 4, md: 0 }}>
              <Icon as={FaEnvelope} mr={2} />
              NOTANET.COM
            </ChakraLink>
            <Flex as="ul" align="center" gap={{ base: 2, md: 6 }} listStyleType="none">
              {['Contact', 'Home', 'Notes', 'Roadmaps'].map((item, index) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChakraLink as={RouterLink} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} fontSize={{ base: 'md', md: 'lg' }}>
                    {item}
                  </ChakraLink>
                </motion.li>
              ))}
            </Flex>
          </Flex>
        </motion.nav>

        <Flex direction="column" justify="space-between" maxWidth="1200px" width="100%" mx="auto" align="center" flex="1" textAlign="center" mt={{ base: 12, md: 24 }}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} fontWeight="bold" textAlign="center">
              Study made easier!
            </Text>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Text fontSize={{ base: 'lg', md: 'xl' }} mt={{ base: 4, md: 8 }}>
              A website with detailed roadmap and notes for structural growth of students!
            </Text>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button as={RouterLink} to="/" mt={{ base: 6, md: 10 }} size={{ base: 'md', md: 'lg' }} colorScheme="teal" variant="outline">
              GO BACK HOME
            </Button>
          </motion.div>
        </Flex>

        <Flex justify="center" flexWrap="wrap" width="100%" mt={{ base: 8, md: 16 }}>
  <motion.div
    initial={{ rotate: -10, opacity: 0 }}
    animate={{ rotate: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.8 }}
  >
    <Text 
      fontSize={{ base: '4xl', md: '6xl', lg: '8xl' }} 
      fontWeight="bold" 
      color="teal.300" // Changed from gray.700 to teal.300
      textShadow="2px 2px 4px rgba(0,0,0,0.5)" // Added text shadow for better visibility
    >
      start
    </Text>
  </motion.div>
  <motion.div
    initial={{ rotate: 10, opacity: 0 }}
    animate={{ rotate: -1, opacity: 1 }}
    transition={{ duration: 2, delay: 1 }}
  >
    <Text 
      fontSize={{ base: '4xl', md: '6xl', lg: '8xl' }} 
      fontWeight="bold" 
      ml={{ base: 2, md: -3, lg: 2 }}
      color="white" // Ensuring "LEARNIN'" remains white
      textShadow="2px 2px 4px rgba(0,0,0,0.5)" // Added text shadow for consistency
    >
       LEARNIN'
    </Text>
  </motion.div>
</Flex>

      </Box>
    </Parallax>
  );
};

export default Nota;
