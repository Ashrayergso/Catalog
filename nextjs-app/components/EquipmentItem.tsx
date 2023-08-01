import React from 'react';
import { Equipment } from '../types/Equipment';
import QuantityInput from './QuantityInput';
import SearchOnlineButton from './SearchOnlineButton';
import AlternativeSearchButton from './AlternativeSearchButton';

interface EquipmentItemProps {
  equipmentItem: Equipment;
  onQuantityChange: (quantity: number) => void;
}

const EquipmentItem: React.FC<EquipmentItemProps> = ({ equipmentItem, onQuantityChange }) => {
  return (
    <div id="equipment-item">
      <img src={equipmentItem.image} alt={equipmentItem.name} />
      <h2>{equipmentItem.name}</h2>
      <p>{equipmentItem.details}</p>
      <p>Cost: {equipmentItem.cost}</p>
      <p>Description: {equipmentItem.description}</p>
      <p>Manufacturer Number: {equipmentItem.manufacturerNumber}</p>
      <p>Model: {equipmentItem.model}</p>
      <p>Type: {equipmentItem.type}</p>
      <a href={equipmentItem.link}>Link to Product</a>
      <QuantityInput onChange={onQuantityChange} />
      <SearchOnlineButton equipmentName={equipmentItem.name} />
      <AlternativeSearchButton equipmentName={equipmentItem.name} />
    </div>
  );
};

export default EquipmentItem;