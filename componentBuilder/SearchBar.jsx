import React, { useState } from "react";
import styles from "./InputDesign.module.css";
import FilterPanel from "./FilterPanel";

const SearchBar = ({ onApplyFilters, onSearchTermChange }) => {

  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFilters = () => {
     setShowFilters(!showFilters);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
     setSearchTerm(e.target.value);
     onSearchTermChange(term);
     };

  return (
    <div className={styles.transactionSearch}>
      <div className={styles.navbarsSearchfield}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d58fe36bb3e4938f6e89dd9b9c0bca560446365b?placeholderIfAbsent=true" 
        className={styles.img} 
        alt="Search icon" />
        {/* <img src="search-icon.png" className={styles.img} alt="Search" /> */}
        <input
          type="text"
          placeholder="Search or filter results"
          className={styles.placeholder}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div id="rightContent" className={styles.rightContent}>
          <button className={styles.notification} onClick={toggleFilters}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9d2ab84f432479353a7cd92b397ccc9c86e5ff6?placeholderIfAbsent=true" 
            className={styles.img2} 
            alt="Filter" />
          </button>
        </div>
      </div>
      {showFilters && (
        <div className={styles.modalBackdrop} onClick={toggleFilters}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <FilterPanel
              onApply={(filters) => {
                onApplyFilters(filters);
                setShowFilters(false);
              }}
            />
          </div>
          </div>
      )}
    </div>
  );
};

export default SearchBar;
