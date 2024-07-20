// src/components/Input.jsx
import React from 'react';

const Input = ({ placeholder, name, type, handleChange }) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      type={type}
      onChange={handleChange}
      className="my-2 p-2 w-full rounded-md border-2 border-gray-300"
    />
  );
};

export default Input;
