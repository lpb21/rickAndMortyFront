import React, { useState } from "react";
import styles from "./FilterPanel.module.css";

const FilterPanel = ({ onApply }) => {
  const [filters, setFilters] = useState({
    species: "All",
    status: "All",
    gender: "All",
  });

  const updateFilter = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleSubmit = () => {
    // Llama la función que hace la query con los filtros aplicados
    onApply(filters);
  };

  const renderOptions = (category, options) =>
    options.map((opt) => (
      <button
        key={opt}
        className={filters[category] === opt ? styles.active : ""}
        onClick={() => updateFilter(category, opt)}
      >
        {opt}
      </button>
    ));

  return (
    <div className={styles.filterPanel}>
      <div className={styles.section}>
        <label>Species</label>
        <div className={styles.options}>
          {renderOptions("species", ["Human", "Alien"])}
        </div>
      </div>

      <div className={styles.section}>
        <label>Status</label>
        <div className={styles.options}>
          {renderOptions("status", ["Alive", "Dead", "unknown"])}
        </div>
      </div>

      <div className={styles.section}>
        <label>Gender</label>
        <div className={styles.options}>
          {renderOptions("gender", ["Male", "Female", "unknown"])}
        </div>
      </div>

      <button className={styles.filterButton} onClick={handleSubmit}>
        Filter
      </button>
    </div>
  );
};

export default FilterPanel;
