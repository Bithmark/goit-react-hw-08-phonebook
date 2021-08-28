import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { filter } from '../phonebook/phonebook-actions';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from './phonebook-operations';

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContacts.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [filter]: (_, { payload }) => payload,
});

export const rootReducer = combineReducers({
  contacts,
  filter: filterReducer,
});
