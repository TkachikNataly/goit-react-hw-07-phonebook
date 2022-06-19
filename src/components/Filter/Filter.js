import React from 'react';
import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default function Filter() {
    const dispatch = useDispatch();
    const value = useSelector(getFilter);

    let inputFilterId = nanoid();
    const onChangeFilter = (e) => dispatch(changeFilter(e.target.value));

    return (
        <div>
            <label className={s.title} htmlFor={inputFilterId}>
                find contact by name{' '}
                <input
                    className={s.input}
                    type="text"
                    value={value}
                    onChange={onChangeFilter}
                />{' '}
            </label>
        </div>
    );

}
Filter.propTypes = {
    value: PropTypes.string,
    onChengeFilter: PropTypes.func,
};
