import React, { useState } from 'react';
import './Cards.css';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';


// Import the PDF viewer and image modal
import { Document, Page } from 'react-pdf';
import Modal from 'react-modal'; // For displaying images and PDF
import websiteImage from '../assets/website.jpg';
import dsaPDF from '../assets/dsa.pdf';
import androidPDF from '../assets/android.pdf';


const Cards = () => {
  const [selectedContent, setSelectedContent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const cardContent = [
    { title: "Web Development", description: "Learn the art of creating stunning websites", type: 'image', src: websiteImage },
    { title: "Data Science", description: "Dive into the world of data analysis and machine learning", type: 'pdf', src: dsaPDF },
    { title: "Mobile App Development", description: "Create powerful apps for iOS and Android", type: 'pdf', src: androidPDF },
  ];
  
  

  const handleCardClick = (content) => {
    setSelectedContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedContent(null);
  };

  return (
    <Parallax
      blur={3}
      bgImage="/path/to/your/background-image.jpg"
      strength={500}
    >
      <div className="cards-container">
        <header>
          <FaHome className="home-icon" />
          <span>Your study path </span>
        </header>
        <h1 className="head">Roadmaps</h1>
        <h3>Your next 4 year path is here choose your stream and start following this path from today!!</h3>

        <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
          {cardContent.map((card, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCardClick(card)}
            >
              <motion.div
                className="card-content"
                whileHover={{ 
                  background: [
                    "linear-gradient(45deg, #ff0000, #ff7300)",
                    "linear-gradient(45deg, #ff7300, #fffb00)",
                    "linear-gradient(45deg, #fffb00, #48ff00)",
                    "linear-gradient(45deg, #48ff00, #00ffd5)",
                    "linear-gradient(45deg, #00ffd5, #002bff)",
                    "linear-gradient(45deg, #002bff, #7a00ff)",
                    "linear-gradient(45deg, #7a00ff, #ff00c8)",
                    "linear-gradient(45deg, #ff00c8, #ff0000)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </main>

        {/* Modal for displaying content */}
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Content Viewer"
          className="modal"
        >
          <button onClick={closeModal}>Close</button>
          
          {/* Display content based on type */}
          {selectedContent?.type === 'image' && (
            <img src={selectedContent.filePath} alt="Selected Visual" className="modal-image" />
          )}

          {selectedContent?.type === 'pdf' && (
            <Document file={selectedContent.filePath}>
              <Page pageNumber={1} />
            </Document>
          )}
        </Modal>
      </div>
    </Parallax>
  );
};

export default Cards;
