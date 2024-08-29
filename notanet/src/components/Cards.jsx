import React from 'react';
import './Cards.css';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div className="cards-container">
      <header>
        <FaHome className="home-icon" />
        <span>Home</span>
      </header>

      {/* Replace Tab with a Link */}
      <nav className="tab-navigation">
        <Link to="/contact" className="tab-item">
        
        </Link>
        {/* You can add more tabs here */}
      </nav>

      <main>
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
      </main>
    </div>
  );
};

export default Cards;
