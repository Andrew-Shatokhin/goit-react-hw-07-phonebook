import axios from 'axios';
import { fetchingInProgress, fetchingSuccess, fetchingError } from './contactSlice';

axios.defaults.baseURL = 'https://642c84a3bf8cbecdb4f282f8.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get("/contacts");
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};
