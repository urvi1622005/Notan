import React, { useState } from "react";
import { Box, Circle, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const RoadmapPreview = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Beginner", "Intermediate", "Advanced", "Expert"];

  return (
    <Box mt={16}>
      <Text fontSize="3xl" fontWeight="bold" mb={8}>
        Your Learning Journey
      </Text>
      <Flex justify="space-between">
        {steps.map((step, index) => (
          <motion.div
            key={step}
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={
              activeStep >= index
                ? { scale: 1, opacity: 1 }
                : { scale: 0.8, opacity: 0.5 }
            }
            onViewportEnter={() => setActiveStep(index)}
          >
            <Box textAlign="center">
              <Circle size="60px" bg={activeStep >= index ? "teal.500" : "gray.300"}>
                <Text color="white" fontWeight="bold">
                  {index + 1}
                </Text>
              </Circle>
              <Text mt={2}>{step}</Text>
            </Box>
          </motion.div>
        ))}
      </Flex>
    </Box>
  );
};

export default RoadmapPreview;
