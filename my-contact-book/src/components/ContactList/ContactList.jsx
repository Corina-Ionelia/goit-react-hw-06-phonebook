import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from './ContactItem'; // Asigură-te că acest import este corect
import { removeContact } from '../../redux/contactsSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onRemove={() => dispatch(removeContact(id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
