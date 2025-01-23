import React from "react";
import "./FilterBar.css";

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <div className="filter-left">
        <button className="filter-btn">
          <span className="filter-icon">⚙️</span> Filter
        </button>
        <button className="grid-view">⬜⬜</button>
        <button className="list-view">☰</button>
        <div className="divider" />
        <span className="results">Showing 1–16 of 32 results</span>
      </div>
      <div className="filter-right">
        <span className="show-label">Show</span>
        <input type="text" className="show-input" value="16" readOnly />
        <span className="sort-label">Short by</span>
        <select className="sort-select">
          <option value="default">Default</option>
          <option value="popularity">Popularity</option>
          <option value="rating">Rating</option>
          <option value="price">Price</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
