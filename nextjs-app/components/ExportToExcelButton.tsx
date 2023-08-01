import React from 'react';
import { exportToExcel } from '../utils/exportToExcel';
import styles from '../styles/ExportToExcelButton.module.css';

interface ExportToExcelButtonProps {
  selectedEquipment: Array<any>;
}

const ExportToExcelButton: React.FC<ExportToExcelButtonProps> = ({ selectedEquipment }) => {
  const handleExport = () => {
    exportToExcel(selectedEquipment);
  };

  return (
    <button className={styles.button} onClick={handleExport}>
      Export to Excel
    </button>
  );
};

export default ExportToExcelButton;