import React from 'react';
import EquipmentItem from './EquipmentItem';
import styles from '../styles/EquipmentList.module.css';

interface Equipment {
  name: string;
  details: string;
  cost: number;
  description: string;
  manufacturerNumber: string;
  model: string;
  type: string;
  image: string;
  link: string;
}

interface EquipmentListProps {
  equipmentList: Equipment[];
}

const EquipmentList: React.FC<EquipmentListProps> = ({ equipmentList }) => {
  return (
    <div className={styles.equipmentList}>
      {equipmentList.map((equipment, index) => (
        <EquipmentItem key={index} equipment={equipment} />
      ))}
    </div>
  );
};

export default EquipmentList;