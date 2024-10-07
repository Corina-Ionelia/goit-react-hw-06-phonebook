import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from './ContactItem';
import styles from './ContactList.module.css';

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();

    const handleRemove = id => {
        dispatch({ type: 'contacts/remove', payload: id });
    };

    return (
        <ul className={styles.contactList}>
            {contacts.map(({ id, name, number }) => (
                <ContactItem key={id} id={id} name={name} number={number} onRemove={() => handleRemove(id)} />
            ))}
        </ul>
    );
};

export default ContactList;
