import { useState } from "react";

export const CreateContact = () => {
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
    const [pfpUrl, setPfpUrl] = useState('');
    const updatePfpUrl = (val) => {
        setPfpUrl(val);
    }

    return (
        <div>
            <p>Create Contact</p>
            <form>
                <label htmlFor="fn">First Name</label>
                <input value={firstName} onChange={updateFirstName}/>
            </form>
        </div>
    )
}

export default CreateContact;