import React from 'react';
import { searchOnline } from '../utils/searchOnline';
import styles from '../styles/SearchOnlineButton.module.css';

interface SearchOnlineButtonProps {
  equipmentName: string;
}

const SearchOnlineButton: React.FC<SearchOnlineButtonProps> = ({ equipmentName }) => {
  const handleSearchOnline = () => {
    searchOnline(equipmentName);
  };

  return (
    <button className={styles.button} onClick={handleSearchOnline}>
      Search Online
    </button>
  );
};

export default SearchOnlineButton;