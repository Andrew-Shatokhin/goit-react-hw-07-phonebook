import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  // filter: '',
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};



const contactSlice = createSlice({
  name: 'contact',
  initialState: contactsInitialState,

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,


  },
});

export const contactsReducer = contactSlice.reducer;

// ++++++++++++++++++++++++++++до extraReducers++++++++++
// const contactsInitialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const contactSlice = createSlice({
//   name: 'contact',
//   initialState: contactsInitialState,
//   reducers: {
//     fetchingInProgress(state) {
//       state.isLoading = true;
//     },

//     fetchingSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },

//     fetchingError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });
// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactSlice.actions;
// export const contactsReducer = contactSlice.reducer;
