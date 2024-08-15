import React from 'react';
import './Cards.css';
import { FaHome} from 'react-icons/fa';


const Cards = () => {
return (
<div className="cards-container">
<header>
<FaHome className="home-icon" />
<span>Home</span>
</header>


  <main>
    <div className="card"></div>
    <div className="card">
    
    </div>
    <div className="card"></div>
  </main>
   </div>

);
};


export default Cards;