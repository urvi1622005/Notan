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
            <CardBody className="teacher-card">
              <CardItem translateZ="50" className="teacher-image-container">
                <img
                  src={teacher.image}
                  className="teacher-image"
                  alt={teacher.name}
                />
              </CardItem>
              <div className="teacher-info-box">
                <CardItem translateZ="50" className="teacher-name">
                  {teacher.name}
                </CardItem>
                <CardItem as="p" translateZ="60" className="teacher-subject">
                  {teacher.subject}
                </CardItem>
                <div className="teacher-details">
                  <CardItem translateZ={20} className="teacher-cabin">
                    Cabin: {teacher.cabin}
                  </CardItem>
                  <CardItem translateZ={20} className="teacher-contact">
                    Contact: {teacher.contact}
                  </CardItem>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Contact;