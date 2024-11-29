import React from "react";
import { Flex, Text, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
        <Text fontSize="2xl" fontWeight="bold">
          {title}
        </Text>
      </Flex>
      <Text>{description}</Text>
    </motion.div>
  );
};

export default FeatureSection;
