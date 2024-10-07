import React from 'react';
import styles from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onRemove }) => {
    return ( <
        li className = { styles.contactItem } >
        <
        span > { name }: { number } < /span> <
        button onClick = { onRemove } > Remove < /button> <
        /li>
    );
};

export default ContactItem;