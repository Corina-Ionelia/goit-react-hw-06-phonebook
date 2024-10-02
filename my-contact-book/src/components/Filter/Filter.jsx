import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={styles.filterContainer}>
      <input
        type="text"
        className={styles.filterInput}
        value={value}
        onChange={onChange}
        placeholder="Filter contacts"
      />
    </div>
  );
};

export default Filter;
