import './css/App.css';
import { useState, useEffect } from 'react';

import ListContacts from './components/list-contacts-component';
import * as ContactsAPI from './../src/utils/ContactsAPI';

const App = () => {
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
      <ListContacts contacts={contacts} onDeleteContact={removeContact}/>
    </div>
  )
}

export default App
