import React from 'react';
import EquipmentList from '../components/EquipmentList';
import ExportToExcelButton from '../components/ExportToExcelButton';
import SearchOnlineButton from '../components/SearchOnlineButton';
import AlternativeSearchButton from '../components/AlternativeSearchButton';
import QuantityInput from '../components/QuantityInput';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Equipment Catalog</h1>
      <EquipmentList />
      <ExportToExcelButton />
      <SearchOnlineButton />
      <AlternativeSearchButton />
      <QuantityInput />
    </div>
  );
};

export default Home;