import React, { useState } from "react";
import "./Grid.css"; // Import the CSS file for styling
import img1 from "../assets/img1.png"; // Corrected import
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png"; // Corrected import
import { FaHeart, FaBalanceScale } from "react-icons/fa"; // Import icons for Like and Compare

const Grid = () => {
  const [likedItems, setLikedItems] = useState([]); // State to manage liked items

  const products = [
    {
      id: 1,
      name: "Syltherine",
      name2: "luxury big sofa",
      image: img1,
      price: "Rp 2.500.000",
    },
    {
      id: 2,
      name: "Leviosa",
      name2: "stylish cafe chair",
      image: img2,
      price: "Rp 2.500.000",
    },
    {
      id: 3,
      name: "Leviosa",
      name2: "minimalist flower pot",
      image: img3,
      price: "Rp 2.500.000",
    },
    { id: 4, name: "Leviosa", image: img4, price: "Rp 2.500.000" },
    {
      id: 5,
      name: "Syltherine",
      name2: "luxury big sofa",
      image: img1,
      price: "Rp 2.500.000",
    },
    {
      id: 6,
      name: "Leviosa",
      name2: "stylish cafe chair",
      image: img2,
      price: "Rp 2.500.000",
    },
    {
      id: 7,
      name: "Leviosa",
      name2: "minimalist flower pot",
      image: img3,
      price: "Rp 2.500.000",
    },
    { id: 8, name: "Leviosa", image: img4, price: "Rp 2.500.000" },
    {
      id: 9,
      name: "Syltherine",
      name2: "luxury big sofa",
      image: img1,
      price: "Rp 2.500.000",
    },
    {
      id: 10,
      name: "Leviosa",
      name2: "stylish cafe chair",
      image: img2,
      price: "Rp 2.500.000",
    },
    {
      id: 11,
      name: "Leviosa",
      name2: "minimalist flower pot",
      image: img3,
      price: "Rp 2.500.000",
    },
    { id: 12, name: "Leviosa", image: img4, price: "Rp 2.500.000" },
    
    {
      id: 13,
      name: "Syltherine",
      name2: "luxury big sofa",
      image: img1,
      price: "Rp 2.500.000",
    },
    {
      id: 14,
      name: "Leviosa",
      name2: "stylish cafe chair",
      image: img2,
      price: "Rp 2.500.000",
    },
    {
      id: 15,
      name: "Leviosa",
      name2: "minimalist flower pot",
      image: img3,
      price: "Rp 2.500.000",
    },
    { id: 16, name: "Leviosa", image: img4, price: "Rp 2.500.000" },
  ];

  const toggleLike = (id) => {
    setLikedItems((prevLikedItems) =>
      prevLikedItems.includes(id)
        ? prevLikedItems.filter((itemId) => itemId !== id)
        : [...prevLikedItems, id]
    );
  };

  return (
    <div>
      <div className="grid-container">
        {products.map((product) => (
          <div className="grid-item" key={product.id}>
            <button className="like-btn" onClick={() => toggleLike(product.id)}>
              <FaHeart
                size={20}
                color={likedItems.includes(product.id) ? "red" : "#333"}
              />
            </button>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            {product.name2 && <p>{product.name2}</p>}
            <p>{product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
            <div className="compare-btn">
              <button>
                <FaBalanceScale size={16} /> compare
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
