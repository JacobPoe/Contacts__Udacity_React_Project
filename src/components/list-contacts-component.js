import PropTypes from "prop-types";
import { useState } from "react";

const ListContacts = ({ contacts, onDeleteContact }) => {
    const [query, setQuery] = useState("");

    const updateQuery = (query) => {
        setQuery(query.trim());console.log(showingContacts)
    }
    
    // TODO: .filter() is emptying the whole array. Find out why. 
    const showingContacts = query === "" ? contacts : contacts.filter((c) => {
        console.log(`${c.name.toLowerCase()}, ${query.toLowerCase()}, ${c.name.toLowerCase().includes(query.toLowerCase())}`);
        
        return c.name
         .toLowerCase()
         .includes(query.toLowerCase())
    })

    return (
        <div className="list-contacts">
            <div className="list-contacts-top">
                <input 
                    className="search-contacts" 
                    type="text" 
                    placeholder="Search Contacts" 
                    value={query} 
                    onChange={(event) => updateQuery(event.target.value)}
                />
            </div>
            <ol className="contact-list">
                {showingContacts.map((contact) => (
                    <li key={contact.id} className="contact-list-item">
                        {}
                        <div className="contact-avatar" style={{
                            backgroundImage: `url(${contact.avatarURL})`,
                        }}
                        ></div>
                        <div className="contact-details">
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button className="contact-remove" onClick={() => onDeleteContact(contact)}>Remove</button>
                    </li>
                ))}
            </ol>
        </div>
    );
};

ListContacts.prototype = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts;