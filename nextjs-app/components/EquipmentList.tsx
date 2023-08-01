import React, { useState } from 'react';
import EquipmentItem from './EquipmentItem';
import { Equipment } from '../types/Equipment';

interface EquipmentListProps {
  equipmentData: Equipment[];
}

const EquipmentList: React.FC<EquipmentListProps> = ({ equipmentData }) => {
  const [selectedEquipments, setSelectedEquipments] = useState<Equipment[]>([]);

  const handleSelectEquipment = (equipment: Equipment) => {
    setSelectedEquipments([...selectedEquipments, equipment]);
  };

  return (
    <div id="equipment-list">
      {equipmentData.map((equipment) => (
        <EquipmentItem
          key={equipment.id}
          equipment={equipment}
          onSelectEquipment={handleSelectEquipment}
        />
      ))}
    </div>
  );
};

export default EquipmentList;