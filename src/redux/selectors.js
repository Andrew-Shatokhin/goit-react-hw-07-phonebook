import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.filter;





export const getVisibleContacts = createSelector(

  [selectContacts, selectFilter],
  (contacts, filter) => {
    // console.log('selector')

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }

)





// export const getVisibleContacts = state => {


//   const contacts = selectContacts(state);
//   const filter = selectFilter(state);

//   console.log('selector');

// return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );



// }
