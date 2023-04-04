import { createSlice } from '@reduxjs/toolkit';


const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState: contactsInitialState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },

    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    fetchingError(state, action) {
       state.isLoading = false;
       state.error = action.payload;
    },
  },
});
export const { fetchingInProgress, fetchingSuccess, fetchingError } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;

// const contactSlice = createSlice({
//   name: 'contact',
//   initialState: {
//     contacts: [],
//     filter: '',
//   },
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.contacts.push(action.payload);
//       },
//     },
//     deleteContact(state, action) {
//       state.contacts = state.contacts.filter(
//         name => name.id !== action.payload
//       );
//     },
//     filterContact(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });



// export const { addContact, deleteContact, filterContact } = contactSlice.actions;
// export const contactsReducer = persistReducer(persistConfig, contactSlice.reducer);

