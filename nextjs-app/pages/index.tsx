import React from 'react';
import EquipmentList from '../components/EquipmentList';
import SearchOnlineButton from '../components/SearchOnlineButton';
import SearchAlternativesButton from '../components/SearchAlternativesButton';
import ExportToExcelButton from '../components/ExportToExcelButton';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Equipment Catalog</h1>
      <SearchOnlineButton />
      <SearchAlternativesButton />
      <EquipmentList />
      <ExportToExcelButton />
    </div>
  );
};

export default Home;