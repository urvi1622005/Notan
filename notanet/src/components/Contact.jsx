import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import './Contact.css';

const teachers = [
  { name: 'Dr. Alice Johnson', subject: 'Physics', cabin: 'A101', contact: '555-0101', image: 'https://example.com/alice.jpg' },
  { name: 'Prof. Bob Smith', subject: 'Physics', cabin: 'A102', contact: '555-0102', image: 'https://example.com/bob.jpg' },
  { name: 'Dr. Carol Davis', subject: 'Chemistry', cabin: 'B201', contact: '555-0201', image: 'https://example.com/carol.jpg' },
  { name: 'Prof. David Lee', subject: 'Biology', cabin: 'C301', contact: '555-0301', image: 'https://example.com/david.jpg' },
  { name: 'Dr. Emma Wilson', subject: 'Mathematics', cabin: 'D401', contact: '555-0401', image: 'https://example.com/emma.jpg' },
  { name: 'Prof. Frank Miller', subject: 'Computer Science', cabin: 'E501', contact: '555-0501', image: 'https://example.com/frank.jpg' },
  { name: 'Dr. Grace Taylor', subject: 'English', cabin: 'F601', contact: '555-0601', image: 'https://example.com/grace.jpg' },
  { name: 'Prof. Henry Brown', subject: 'History', cabin: 'G701', contact: '555-0701', image: 'https://example.com/henry.jpg' },
  { name: 'Dr. Irene Garcia', subject: 'Psychology', cabin: 'H801', contact: '555-0801', image: 'https://example.com/irene.jpg' },
  { name: 'Prof. Jack Robinson', subject: 'Economics', cabin: 'I901', contact: '555-0901', image: 'https://example.com/jack.jpg' },
  { name: 'Dr. Karen White', subject: 'Sociology', cabin: 'J1001', contact: '555-1001', image: 'https://example.com/karen.jpg' },
  { name: 'Prof. Leo Martinez', subject: 'Political Science', cabin: 'K1101', contact: '555-1101', image: 'https://example.com/leo.jpg' },
  { name: 'Dr. Mia Johnson', subject: 'Art History', cabin: 'L1201', contact: '555-1201', image: 'https://example.com/mia.jpg' },
  { name: 'Prof. Nathan Chen', subject: 'Philosophy', cabin: 'M1301', contact: '555-1301', image: 'https://example.com/nathan.jpg' },
  { name: 'Dr. Olivia Park', subject: 'Linguistics', cabin: 'N1401', contact: '555-1401', image: 'https://example.com/olivia.jpg' },
  { name: 'Prof. Peter Kim', subject: 'Environmental Science', cabin: 'O1501', contact: '555-1501', image: 'https://example.com/peter.jpg' },
  { name: 'Dr. Quinn Adams', subject: 'Anthropology', cabin: 'P1601', contact: '555-1601', image: 'https://example.com/quinn.jpg' },
  { name: 'Prof. Rachel Nguyen', subject: 'Music', cabin: 'Q1701', contact: '555-1701', image: 'https://example.com/rachel.jpg' },
  { name: 'Dr. Samuel Lee', subject: 'Physics', cabin: 'R1801', contact: '555-1801', image: 'https://example.com/samuel.jpg' },
  { name: 'Prof. Tina Patel', subject: 'Chemistry', cabin: 'S1901', contact: '555-1901', image: 'https://example.com/tina.jpg' },
];

const Contact = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Teacher Contacts</h1>
      <input
        type="text"
        placeholder="Search teachers by name or subject..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTeachers.map((teacher, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-white/[0.2] w-full h-auto rounded-xl p-4 border border-gray-600">
              <CardItem translateZ="50" className="text-xl font-bold text-white">
                {teacher.name}
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-neutral-300 text-sm max-w-sm mt-2">
                {teacher.subject}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={teacher.image}
                  className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={teacher.name}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-4">
                <CardItem translateZ={20} className="text-white">
                  Cabin: {teacher.cabin}
                </CardItem>
                <CardItem translateZ={20} className="text-white">
                  Contact: {teacher.contact}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Contact;
