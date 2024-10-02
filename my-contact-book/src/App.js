import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store'; // Asigură-te că acest import este corect
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import './App.css'; // Importă stilurile globale dacă e necesar

const App = () => {
    return ( <
        Provider store = { store } >
        <
        div className = "app" >
        <
        h1 > Contact Book < /h1> <
        ContactForm / >
        <
        ContactList / >
        <
        /div> <
        /Provider>
    );
};

export default App;