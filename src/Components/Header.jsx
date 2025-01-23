import React, { useState } from "react";
import "./Header.css";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa"; // React Icons
import logoImage from "../assets/logo.png"; // Adjust the path to your logo image

const Header = () => {
  const [showFeatureBar, setShowFeatureBar] = useState(false); // State to toggle feature bar

  const handleShopClick = () => {
    setShowFeatureBar(!showFeatureBar); // Toggle feature bar visibility
  };

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        {/* Left Side: Logo */}
        <div className="logo">
          <img src={logoImage} alt="Furniro Logo" className="logo-image" />
        </div>

        {/* Middle: Navigation Links */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#shop" onClick={handleShopClick}>
            Shop
          </a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Right Side: Icons */}
        <div className="header-icons">
          <FaUser className="icon" />
          <FaSearch className="icon" />
          <FaHeart className="icon" />
          <FaShoppingCart className="icon" />
        </div>
      </header>

      {/* Feature Bar Section */}
      {showFeatureBar && (
        <div className="feature-bar">
          <ul>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Discounts</li>
            <li>Categories</li>
            <li>Trending</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
