// src/components/ContactList/ContactList.jsx
import React from 'react';
import ContactItem from './ContactItem'; // Asigură-te că această cale este corectă
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemove }) => {
    return (
        <ul className={styles.contactList}>
            {contacts.map(({ id, name, number }) => (
                <ContactItem key={id} id={id} name={name} number={number} onRemove={() => onRemove(id)} />
            ))}
        </ul>
    );
};

export default ContactList;
