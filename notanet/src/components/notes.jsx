'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const subjects = [
  {
    name: 'BEE (Basic Electrical Engineering)',
    topics: ['Circuit Theory', 'Electromagnetic Fields', 'Electrical Machines', 'Power Systems'],
  },
  {
    name: 'Physics',
    topics: ['Mechanics', 'Thermodynamics', 'Optics', 'Modern Physics'],
  },
  {
    name: 'Mechanics',
    topics: ['Statics', 'Dynamics', 'Fluid Mechanics', 'Strength of Materials'],
  },
  {
    name: 'Mathematics',
    topics: ['Calculus', 'Linear Algebra', 'Differential Equations', 'Probability and Statistics'],
  },
  {
    name: 'Manufacturing Processes',
    topics: ['Casting', 'Machining', 'Welding', 'Forming'],
  },
  {
    name: 'EVS (Environmental Studies)',
    topics: ['Ecosystems', 'Biodiversity', 'Environmental Pollution', 'Sustainable Development'],
  },
];

const SubjectCard = ({ subject }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <Button
          className="w-full justify-between text-left font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {subject.name}
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="mt-2 space-y-2">
                {subject.topics.map((topic, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-muted p-2 rounded-md"
                  >
                    {topic}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

const Notes = () => {
  return (
    <div className="container mx-auto p-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        First Year Engineering Notes
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {subjects.map((subject, index) => (
          <SubjectCard key={index} subject={subject} />
        ))}
      </motion.div>
    </div>
  );
};

export default Notes;
