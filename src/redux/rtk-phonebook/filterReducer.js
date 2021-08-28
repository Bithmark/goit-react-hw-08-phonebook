import { createReducer, createAction } from '@reduxjs/toolkit';

export const handleFilter = createAction('phonebook/filterContacts');

export const filterReducer = createReducer('', {
  [handleFilter]: (_, { payload }) => payload,
});
