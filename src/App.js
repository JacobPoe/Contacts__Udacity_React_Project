import './css/App.css';
import { useState, useEffect } from 'react';

import ListContacts from './components/list-contacts-component';
import * as ContactsAPI from './../src/utils/ContactsAPI';
import CreateContact from './components/create-contact-component';
import { Route, Routes } from 'react-router-dom';

const App = () => {

  const addContact = async (contact) => {
      console.log('creating contact');
             
      const res = await ContactsAPI.create(contact);
      setContacts([...contacts, res])
  }
  const removeContact = (contact) => {
    ContactsAPI.remove(contact)
    setContacts(contacts.filter((con) => {
      return contact.id !== con.id;
    }))
  }

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res); 
    };

    getContacts();
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/create' element={<CreateContact onSubmit={addContact} />} />      
        <Route path='/list' 
          element={
          <ListContacts contacts={contacts} onDeleteContact={removeContact} />
        } />
      </Routes>
    </div>
  )
}

export default App
