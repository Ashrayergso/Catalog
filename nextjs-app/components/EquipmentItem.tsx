import React from 'react';
import styles from '../styles/EquipmentItem.module.css';

interface EquipmentItemProps {
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

const EquipmentItem: React.FC<EquipmentItemProps> = ({
  name,
  details,
  cost,
  description,
  manufacturerNumber,
  model,
  type,
  image,
  link,
}) => {
  return (
    <div className={styles.equipmentItem}>
      <img src={image} alt={name} className={styles.equipmentImage} />
      <h2 className={styles.equipmentName}>{name}</h2>
      <p className={styles.equipmentDetails}>{details}</p>
      <p className={styles.equipmentCost}>Cost: {cost}</p>
      <p className={styles.equipmentDescription}>{description}</p>
      <p className={styles.equipmentManufacturerNumber}>Manufacturer Number: {manufacturerNumber}</p>
      <p className={styles.equipmentModel}>Model: {model}</p>
      <p className={styles.equipmentType}>Type: {type}</p>
      <a href={link} className={styles.equipmentLink}>Product Link</a>
    </div>
  );
};

export default EquipmentItem;