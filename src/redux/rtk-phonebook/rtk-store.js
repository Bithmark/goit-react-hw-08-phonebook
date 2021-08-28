import { configureStore } from '@reduxjs/toolkit';
import { phonebookApi } from './phonebook-api';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterReducer } from './filterReducer';

export const store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    phonebookApi.middleware,
  ],
});

setupListeners(store.dispatch);
