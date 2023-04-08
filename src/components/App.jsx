import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
import { Title, TitleSection } from './App.styled';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { selectIsLoading, selectError } from '../redux/selectors';


export default function App() {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <Layout>
        {isLoading && !error && <b>Request in progress..</b>}
        {error && <b style={{ fontSize: 24, textAlign:'center' }}>{error}</b>}


        <Title>Phonebook</Title>
        <Form />
        <TitleSection>Contacts</TitleSection>
        <Filter />
        <ContactsList />


        <GlobalStyle />
      </Layout>
    );

}
