```typescript
import axios from 'axios';

const searchOnline = async (equipmentName: string) => {
  const response = await axios.get(`https://www.google.com/search?q=${equipmentName}`);
  if (response.status === 200) {
    return {
      success: true,
      message: 'SEARCH_SUCCESS',
      data: response.data
    };
  } else {
    return {
      success: false,
      message: 'SEARCH_FAILED',
      data: null
    };
  }
};

export default searchOnline;
```