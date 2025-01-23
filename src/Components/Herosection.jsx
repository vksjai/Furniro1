import React, { useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [isHomeVisible, setIsHomeVisible] = useState(false);

  const handleHomeClick = () => {
    setIsHomeVisible(true); // Show the home section
  };

  return (
    <section className="hero-section" onClick={!isHomeVisible ? handleHomeClick : null}>
      {isHomeVisible ? (
        <div className="home-content">
          {/* <h1>Welcome to Home</h1> */}
        </div>
      ) : (
        <div className="hero-content">
          {/* <h1>Shop</h1> */}
          <p className="breadcrumbs">
            {/* <a href="#home" onClick={handleHomeClick}>
              Home
            </a>{" "} */}
            {/* &gt; <span>Shop</span> */}
          </p>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
