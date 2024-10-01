import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

const App = () => {
    return ( <
        div >
        <
        h1 > Contact Book < /h1> <
        ContactForm / >
        <
        Filter / >
        <
        ContactList / >
        <
        /div>
    );
};

export default App;