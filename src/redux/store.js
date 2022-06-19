import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contacts/contactsApi';
import filterReduser from './contacts/contactsReduser';

const store = configureStore({
    reducer: {
        filter: filterReduser,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        contactsApi.middleware,
    ],
    devTools: process.env.NODE_ENV === 'development',
});

export default store;
// import { persistedContactsReducer } from './contactsSlice';
// import {
//     persistStore,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';

// export const store = configureStore({
//     reducer: { contacts: persistedContactsReducer },
//     middleware(getDefaultMiddleware) {
//         return getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         });
//     },
// });

// export const persistor = persistStore(store);