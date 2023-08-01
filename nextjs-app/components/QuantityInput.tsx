import React, { useState } from 'react';

interface QuantityInputProps {
  onQuantityChange: (quantity: number) => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <input
      type="number"
      min="1"
      value={quantity}
      onChange={handleQuantityChange}
    />
  );
};

export default QuantityInput;