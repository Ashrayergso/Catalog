import React from 'react';

interface AlternativeSearchButtonProps {
  equipmentItem: string;
}

const AlternativeSearchButton: React.FC<AlternativeSearchButtonProps> = ({ equipmentItem }) => {
  const handleAlternativeSearch = () => {
    window.open(`https://www.google.com/search?q=${equipmentItem}+alternative`, '_blank');
  };

  return (
    <button id="alternative-search-button" onClick={handleAlternativeSearch}>
      Search Alternatives Online
    </button>
  );
};

export default AlternativeSearchButton;