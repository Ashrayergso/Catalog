const searchOnline = (equipmentName: string) => {
  const query = encodeURIComponent(equipmentName);
  const url = `https://www.google.com/search?q=${query}`;
  window.open(url, '_blank');
};

export default searchOnline;