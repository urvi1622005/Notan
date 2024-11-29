import React, { useRef } from "react";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

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

export default AnimatedStat;
