import React from 'react';
import { useSelector } from 'react-redux';
import { getFilter } from "redux/contacts/contactSelectors";
import s from './ContactList.module.css';
import ContactItem from './ContactItem/ContactItem';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi';

// import PropTypes from 'prop-types';


export default function ContactList() {
    const { data, error, isLoading } = useFetchContactsQuery();
    const filter = useSelector(getFilter);

    const getVisibleContacts =
        data && data.filter(contact =>
            contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        );

    // const getFilteredContacts = () => {
    //     const normalizedFilter = filter.toLowerCase();

    //     return contacts.filter((contact) =>
    //         contact.name.toLowerCase().includes(normalizedFilter)
    //     );
    // };
    // const filteredContacts = getFilteredContacts();

    // const dispatch = useDispatch();
    return (
        <div>
            {error ? (
                <h2>
                    {error.data}
                </h2>
            ) : isLoading ? (
                <h2>Loading...</h2>
            ) : getVisibleContacts?.length ? (
                <ul className={s.list}>
                    {getVisibleContacts.map(({ id, name, number }) => (
                        <ContactItem key={id} id={id} name={name} number={number} />
                    ))
                    }
                </ul>
            ) : (
                <h2>No contacts</h2>
            )
            }
        </div >


    );
}

// ContactList.propTypes = {
//     id: PropTypes.string,
//     name: PropTypes.string,
//     number: PropTypes.string,
//     onDeleteContact: PropTypes.func,
// };

