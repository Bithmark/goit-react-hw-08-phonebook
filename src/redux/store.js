import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./phonebook/phonebook-reducers";
//import { phonebookApi } from '../redux/rtk-phonebook/phonebook-api';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../redux/auth/auth-slices";
//import { filterReducer } from '../redux/rtk-phonebook/filterReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const authPersistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    //[phonebookApi.reducerPath]: phonebookApi.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
    phonebook: rootReducer,
    //filter: filterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

export default { store, persistor };
