// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store'; // Asigură-te că aceasta este calea corectă
import ContactList from './components/ContactList/ContactList'; // Asigură-te că aceasta este calea corectă

const App = () => {
    return ( <
        Provider store = { store } >
        <
        ContactList / >
        <
        /Provider>
    );
};

export default App;