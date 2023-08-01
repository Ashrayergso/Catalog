import React from 'react';
import { exportToExcel } from '../utils/exportToExcel';

interface ExportToExcelButtonProps {
  selectedEquipment: any[];
}

const ExportToExcelButton: React.FC<ExportToExcelButtonProps> = ({ selectedEquipment }) => {
  const handleExport = () => {
    exportToExcel(selectedEquipment);
  };

  return (
    <button id="export-button" onClick={handleExport}>
      Export to Excel
    </button>
  );
};

export default ExportToExcelButton;