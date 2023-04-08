import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
import { Title, TitleSection } from './App.styled';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { getIsLoading, getError } from '../redux/selectors';


export default function App() {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <Layout>
        {isLoading && !error && <b>Request in progress..</b>}
        {/* {error && <b>{error}</b>} */}
        {/* <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p> */}

        <Title>Phonebook</Title>
        <Form />
        <TitleSection>Contacts</TitleSection>
        <Filter />
        <ContactsList />

        <GlobalStyle />
      </Layout>
    );

}
