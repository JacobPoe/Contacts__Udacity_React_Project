import './css/App.css';
import { useState, useEffect } from 'react';

import ListContacts from './components/list-contacts-component';
import * as ContactsAPI from './../src/utils/ContactsAPI';
import CreateContact from './components/create-contact-component';

const App = () => {
  const removeContact = (contact) => {
    ContactsAPI.remove(contact)
    setContacts(contacts.filter((con) => {
      return contact.id !== con.id;
    }))
  }

  const [contacts, setContacts] = useState([]);
  const [screen, setScreen] = useState('list');

  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res); 
    };

    getContacts();
  }, []);

  return (
    <div>
      {/* <ListContacts contacts={contacts} onDeleteContact={removeContact}/> */}
      {/* <CreateContact /> */}

      {screen === 'list' && (
        <ListContacts 
          contacts={contacts} 
          onDeleteContact={removeContact}
          onNavigate={() => {
            setScreen('create')
          }}/>
      )}
      {screen === 'create' && (<CreateContact />)}
    </div>
  )
}

export default App
