import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaRoute, FaBook, FaChartLine } from 'react-icons/fa'; // Import the necessary icons
import FeatureSection from "../components/FeatureSection";
import AnimatedStat from "../components/AnimatedStat";
import RoadmapPreview from "../components/RoadmapPreview";
import CTASection from "../components/CTASection";
import "./Nota.css";

const Nota = () => {
  return (
    <Box className="nota-container" width="100vw" minH="100vh" bg="gray.800" color="white">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Flex justify="center" direction="column" align="center" mt={16}>
          <Text fontSize="4xl" fontWeight="bold">
            Study made easier!
          </Text>
          <Text fontSize="lg" mt={4}>
            A website with detailed roadmaps and notes for structured growth of students!
          </Text>
        </Flex>
      </motion.div>

      <Box mt={16}>
        <FeatureSection
          title="Personalized Learning Paths"
          description="Tailored roadmaps to guide your educational journey."
          icon={FaRoute} // Using the imported FaRoute icon
        />
        <FeatureSection
          title="Comprehensive Notes"
          description="Detailed study materials for in-depth understanding."
          icon={FaBook} // Using the imported FaBook icon
        />
        <FeatureSection
          title="Progress Tracking"
          description="Monitor your growth and celebrate milestones."
          icon={FaChartLine} // Using the imported FaChartLine icon
        />
      </Box>

      <Flex justify="space-around" mt={16}>
        <AnimatedStat end={10000} suffix="+" text="Students" />
        <AnimatedStat end={500} suffix="+" text="Courses" />
        <AnimatedStat end={95} suffix="%" text="Satisfaction Rate" />
      </Flex>

      <RoadmapPreview />
      <CTASection />
    </Box>
  );
};

export default Nota;
