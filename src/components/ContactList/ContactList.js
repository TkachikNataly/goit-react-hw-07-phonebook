import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts, getFilter } from "redux/contactsSlice";
import s from './ContactList.module.css';
import PropTypes from 'prop-types';


export default function ContactList() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const getFilteredContacts = () => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };
    const filteredContacts = getFilteredContacts();

    const dispatch = useDispatch();
    return (
        <ul className={s.list}>
            {filteredContacts.map(({ id, name, number }) => (
                <li key={id} className={s.list__item}>
                    <p>{name}</p>
                    <p>{number}</p>
                    <button className={s.button}
                        type="button"
                        onClick={() => dispatch(deleteContact(id))}>
                        Delete
                    </button>
                </li>
            ))
            }
        </ul>

    );
}

ContactList.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    onDeleteContact: PropTypes.func,
};

