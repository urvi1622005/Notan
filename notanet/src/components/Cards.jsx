import React from 'react';
import './Cards.css';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

const Cards = () => {
  const cardContent = [
    { title: "Web Development", description: "Learn the art of creating stunning websites" },
    { title: "Data Science", description: "Dive into the world of data analysis and machine learning" },
    { title: "Mobile App Development", description: "Create powerful apps for iOS and Android" },
  ];

  return (
    <Parallax
      blur={3}
      bgImage="/path/to/your/background-image.jpg"
      strength={500}
    >
      <div className="cards-container">
        <header>
          <FaHome className="home-icon" />
          <span>Home</span>
        </header>

        <nav className="tab-navigation">
          <Link to="/contact" className="tab-item">Contact</Link>
        </nav>

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
      </div>
    </Parallax>
  );
};

export default Cards;
