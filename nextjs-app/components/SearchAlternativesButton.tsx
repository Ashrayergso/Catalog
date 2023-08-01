import React from 'react';
import { searchAlternatives } from '../utils/searchAlternatives';
import styles from '../styles/SearchAlternativesButton.module.css';

interface SearchAlternativesButtonProps {
  equipmentName: string;
}

const SearchAlternativesButton: React.FC<SearchAlternativesButtonProps> = ({ equipmentName }) => {
  const handleSearchAlternatives = () => {
    searchAlternatives(equipmentName);
  };

  return (
    <button className={styles.button} onClick={handleSearchAlternatives}>
      Search Alternatives
    </button>
  );
};

export default SearchAlternativesButton;