import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './contactsSlice'; // asigură-te că ai importat corect reducer-ul

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['someNonSerializableSlice'], // Adaugă slice-uri non-serializabile aici
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };