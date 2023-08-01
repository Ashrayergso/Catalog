import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

type Equipment = {
  name: string;
  details: string;
  cost: number;
  description: string;
  manufacturerNumber: string;
  model: string;
  type: string;
  image: string;
  link: string;
  quantity: number;
};

export const exportToExcel = (equipmentList: Equipment[]) => {
  const ws = XLSX.utils.json_to_sheet(equipmentList);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "EquipmentList");
  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
  FileSaver.saveAs(data, "EquipmentList.xlsx");
};