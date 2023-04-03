import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'Contacts',
  storage,
  whitelist: ['contacts'],
};

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        name => name.id !== action.payload
      );
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});



export const { addContact, deleteContact, filterContact } = contactSlice.actions;
export const contactsReducer = persistReducer(persistConfig, contactSlice.reducer);

