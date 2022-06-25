import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';


export default function ContactItem({ id, name, number }) {
    const [deleteContact, { siLoading: isDeleting }] =
        useDeleteContactMutation();
    return (
        <li key={id} className={s.list__item}>
            <p>{name}</p>
            <p>{number}</p>
            <div className={s.button}>
                <button
                    type="button"
                    onClick={() => deleteContact(id)}>
                    {isDeleting ? 'Deleting...' : 'Delete'}
                </button>
            </div>

        </li>

    );
}

ContactItem.propType = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};