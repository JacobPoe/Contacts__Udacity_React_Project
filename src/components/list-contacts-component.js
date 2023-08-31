import PropTypes from "prop-types";
import { useState } from "react";

const ListContacts = ({ contacts, onDeleteContact, onNavigate }) => {
    const [query, setQuery] = useState("");

    const updateQuery = (query) => {
        query ? setQuery(query.trim()) : setQuery('');
    }
    
    // TODO: .filter() is emptying the whole array. Find out why. 
    const showingContacts = query === "" ? contacts : contacts.filter((c) => {
        return c.name
         .toLowerCase()
         .includes(query.toLowerCase())
    })

    return (
        <div className="list-contacts">
            <div className="list-contacts-top">
                <input id="search-contacts"
                    className="search-contacts" 
                    type="text" 
                    placeholder="Search Contacts" 
                    value={query} 
                    onChange={(event) => updateQuery(event.target.value)}
                />
                <a href="#create" className="add-contact"
                    onClick={onNavigate}>
                    Add Contact
                </a>
            </div>

            {   
                showingContacts.length !== contacts.length && (
                    <div className="showing-contacts">
                        <span>
                            Now showing {showingContacts.length} of {contacts.length} 
                        </span>
                        <button onClick={() => updateQuery('')}>Show all.</button>
                    </div> 
                )
            }

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