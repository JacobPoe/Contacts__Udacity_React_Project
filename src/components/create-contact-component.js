import { useState } from "react";
import { Link } from "react-router-dom";

export const CreateContact = ({onSubmit}) => {
    const [firstName, setFirstName] = useState('');
    const updateFirstName = (val) => {
        setFirstName(val);
    }
    const [lastName, setLastName] = useState('');
    const updateLastName = (val) => {
        setLastName(val);
    }
    const [handle, setHandle] = useState('');
    const updateHandle = (val) => {
        setHandle(val);
    }
    // const [pfpUrl, setPfpUrl] = useState('');
    // const updatePfpUrl = (val) => {
    //     setPfpUrl(val);
    // }

    const submitContact = () => {
        const user = {
            name: firstName + ' ' + lastName,
            handle: handle
        }

        user.name !== '' && user.handle !== '' 
            ? onSubmit(user) && clearForm()
            : alert('Fields cannot be empty')

    } 

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setHandle('');
        // setPfpUrl('');
    }

    return (
        <div>
            <p>Create Contact</p>
            <form id="createContact">
                <label htmlFor="fn">First Name</label>
                <input name="fn" id="fn" value={firstName} 
                    onChange={(event) => updateFirstName(event.target.value)}/>
                <br />

                <label htmlFor="ln">Last Name</label>
                <input name="ln" id="ln" value={lastName} 
                    onChange={(event) => updateLastName(event.target.value)}/>
                <br />

                <label htmlFor="handle">Handle</label>
                <input name="handle" id="handle" value={handle} 
                    onChange={(event) => updateHandle(event.target.value)}/>
                <br />

                {/* <label htmlFor="pfpUrl">Url to profile picture</label>
                <input name="pfpUrl" id="pfpUrl" value={pfpUrl} 
                    onChange={(event) => updateHandle(event.target.value)}/>
                <br /> */}
            </form>

            <button type="button" className="btn-submit" 
                onClick={submitContact}
                disabled={
                    firstName === ''
                    || lastName === ''
                    || handle === ''
                }>
                Submit
            </button>

            <button type="button" className="btn-cancel" onClick={clearForm}>
                Cancel
            </button>

            <Link to={{pathname: "/"}}
                className="list-contact">
                List Contacts
            </Link>
        </div>
    )
}

export default CreateContact;