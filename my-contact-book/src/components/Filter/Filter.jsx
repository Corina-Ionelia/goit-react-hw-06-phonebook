import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value)); // Setează filtrul
  };

  return (
    <input 
      type="text" 
      onChange={handleChange} 
      placeholder="Caută contact" 
    />
  );
};

export default Filter;
