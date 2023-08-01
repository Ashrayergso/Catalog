```typescript
// nextjs-app/utils/searchAlternatives.ts

const searchAlternatives = (equipmentName: string) => {
  const query = encodeURIComponent(equipmentName);
  const url = `https://www.google.com/search?q=${query}+alternatives`;

  // Open a new window with the search results
  window.open(url, '_blank');
};

export default searchAlternatives;
```