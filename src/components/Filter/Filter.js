import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contactSelectors';
import { changeFilter } from 'redux/contacts/contactActions';

export default function Filter() {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    return (
        <label className={s.title}>
            Find contact by name
            <input
                className={s.input}
                type="text"
                name="filter"
                value={filter}
                onChange={e => dispatch(changeFilter(e.target.value))}
            />
        </label>
    );
}
