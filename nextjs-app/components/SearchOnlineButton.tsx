import React from 'react';
import { searchOnline } from '../utils/searchOnline';

interface SearchOnlineButtonProps {
  equipmentItem: string;
}

const SearchOnlineButton: React.FC<SearchOnlineButtonProps> = ({ equipmentItem }) => {
  const handleSearchOnline = () => {
    searchOnline(equipmentItem);
  };

  return (
    <button id="search-button" onClick={handleSearchOnline}>
      Search Online
    </button>
  );
};

export default SearchOnlineButton;