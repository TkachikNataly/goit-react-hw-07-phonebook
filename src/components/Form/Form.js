import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact, getContacts } from 'redux/contactsSlice';
import s from './Form.module.css';
// import PropTypes from 'prop-types';

export default function Form() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(getContacts);

    const inputNameId = nanoid();
    const inputNumberId = nanoid();


    const handleChangeName = e => {
        setName(e.target.value);
    };

    const handleChangeNumber = e => {
        setNumber(e.target.value);


    };

    const handleSubmit = e => {
        e.preventDefault();
        contacts.some(contact => contact.name === name)
            ? alert(`${name} is already in contacts`)
            : dispatch(addContact({ name, number }));

        reset();

    };
    const reset = () => {
        setName('');
        setNumber('');
    };
    return (
        <div>
            <form className={s.form} onSubmit={handleSubmit}>
                <p className={s.title} htmlFor={inputNameId}>Name</p>
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
                <p className={s.title} htmlFor={inputNumberId}>Number</p>
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
                <button className={s.button} type="submit">Add Contact</button>
            </form>
        </div>
    );
}
// Form.propTypes = {
//     onFormSubmit: PropTypes.func.isRequired,
// };