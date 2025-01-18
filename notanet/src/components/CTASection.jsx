
import { Box, Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link as RouterLink } from "react-router-dom";

const CTASection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: "-100%" }}
      animate={inView ? { x: 0 } : { x: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <Box color="white" p={8} borderRadius="md" mt={16}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Ready to Start Your Learning Journey?
        </Text>
        <Button
          as={RouterLink}
          to="/signup"
          size="lg"
          colorScheme="teal"
          variant="outline"
        >
          Get Started Now
        </Button>
      </Box>
    </motion.div>
  );
};

export default CTASection;
