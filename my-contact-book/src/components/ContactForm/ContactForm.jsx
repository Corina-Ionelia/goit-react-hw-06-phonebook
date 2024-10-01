import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number })); // Adaugă contactul
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Nume" 
        required 
      />
      <input 
        type="tel" 
        value={number} 
        onChange={(e) => setNumber(e.target.value)} 
        placeholder="Număr" 
        required 
      />
      <button type="submit">Adaugă contact</button>
    </form>
  );
};

export default ContactForm;
