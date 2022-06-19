import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';
// import { addContact, getContacts } from 'redux/contactsSlice';
import s from './Form.module.css';
// import PropTypes from 'prop-types';

import { useAddContactMutation } from 'redux/contacts/contactsApi';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Form() {
    const { data } = useFetchContactsQuery();
    // const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [addContact, { isLoading }] = useAddContactMutation();
    // const contacts = useSelector(getContacts);

    // const inputNameId = nanoid();
    // const inputNumberId = nanoid();


    const handleChangeName = e => {
        setName(e.target.value);
    };

    const handleChangeNumber = e => {
        setNumber(e.target.value);


    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (
            data.find(
                contact =>
                    contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
            )
        ) {
            toast.warning(`${name} is alredy in contacts`);
            return;
        }
        await addContact({ name, number });
        toast.success(`Contact is create!`);

        setName('');
        setNumber('');
    };

    return (
        <div>
            <form className={s.form} onSubmit={handleSubmit}>
                <p className={s.title}>Name</p>
                <input
                    className={s.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleChangeName}
                />
                <p className={s.title}>Number</p>
                <input
                    className={s.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChangeNumber}
                />
                <button className={s.button} type="submit" disabled={isLoading}>Add Contact</button>
                <ToastContainer
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </form>
        </div>


    );
}
// Form.propTypes = {
//     onFormSubmit: PropTypes.func.isRequired,
// };