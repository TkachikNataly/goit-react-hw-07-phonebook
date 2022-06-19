import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from "./contactActions";

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
    filter,
});