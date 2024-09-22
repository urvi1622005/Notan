import React, { useRef, useEffect } from 'react';
import { Box, Text, Button, Flex, Link as ChakraLink, Icon, Circle } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaEnvelope, FaRoute, FaBook, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import './Nota.css';

const FeatureSection = ({ title, description, icon }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <Flex align="center" mb={4}>
        <Icon as={icon} boxSize={8} mr={4} />
        <Text fontSize="2xl" fontWeight="bold">{title}</Text>
      </Flex>
      <Text>{description}</Text>
    </motion.div>
  );
};

const AnimatedStat = ({ end, suffix, text }) => {
  const countUpRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Text fontSize="4xl" fontWeight="bold">
        <CountUp end={end} suffix={suffix} ref={countUpRef} />
      </Text>
      <Text>{text}</Text>
    </motion.div>
  );
};

const RoadmapPreview = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

  return (
    <Box mt={16}>
      <Text fontSize="3xl" fontWeight="bold" mb={8}>Your Learning Journey</Text>
      <Flex justify="space-between">
        {steps.map((step, index) => (
          <motion.div
            key={step}
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={activeStep >= index ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.5 }}
            onViewportEnter={() => setActiveStep(index)}
          >
            <Box textAlign="center">
              <Circle size="60px" bg={activeStep >= index ? "teal.500" : "gray.300"}>
                <Text color="white" fontWeight="bold">{index + 1}</Text>
              </Circle>
              <Text mt={2}>{step}</Text>
            </Box>
          </motion.div>
        ))}
      </Flex>
    </Box>
  );
};

const CTASection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: '-100%' }}
      animate={inView ? { x: 0 } : { x: '-100%' }}
      transition={{ duration: 0.5 }}
    >
      <Box color="white" p={8} borderRadius="md" mt={16}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>Ready to Start Your Learning Journey?</Text>
        <Button as={RouterLink} to="/signup" size="lg" colorScheme="teal" variant="outline">
          Get Started Now
        </Button>
      </Box>
    </motion.div>
  );
};

const Nota = () => {
  return (
    <Box
      className="nota-container"
      color="white"
      width="100vw"
      minH="100vh"
      p={{ base: 4, md: 8, lg: 12, xl: 16 }}
      maxWidth="100vw"
      overflowX="hidden"
      bg="gray.800"
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
            {['Contact', 'Home', 'Notes', 'Roadmaps'].map((item) => (
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
            color="teal.300"
            textShadow="2px 2px 4px rgba(0,0,0,0.5)"
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
            color="white"
            textShadow="2px 2px 4px rgba(0,0,0,0.5)"
          >
            LEARNIN'
          </Text>
        </motion.div>
      </Flex>

      <Box mt={16}>
        <FeatureSection
          title="Personalized Learning Paths"
          description="Tailored roadmaps to guide your educational journey."
          icon={FaRoute}
        />
        <FeatureSection
          title="Comprehensive Notes"
          description="Detailed study materials for in-depth understanding."
          icon={FaBook}
        />
        <FeatureSection
          title="Progress Tracking"
          description="Monitor your growth and celebrate milestones."
          icon={FaChartLine}
        />
      </Box>

      <Box height="300px" display="flex" alignItems="center" justifyContent="center">
        <Text fontSize="3xl" fontStyle="italic" textAlign="center" px={4}>
          "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
        </Text>
      </Box>

      <Flex justify="space-around" mt={16}>
        <AnimatedStat end={10000} suffix="+" text="Students" />
        <AnimatedStat end={500} suffix="+" text="Courses" />
        <AnimatedStat end={95} suffix="%" text="Satisfaction Rate" />
      </Flex>

      <RoadmapPreview />

      <CTASection />

      <Box mt={16}>
        <Text fontSize="3xl" fontWeight="bold" mb={8}>Our Learning Environment</Text>
        <Text>A description of our learning environment goes here.</Text>
      </Box>
    </Box>
  );
};

export default Nota;
