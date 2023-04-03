import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
import { Title, TitleSection } from './App.styled';


export default function App() {
    return (
      <Layout>
        <Title>Phonebook</Title>
        <Form />
        <TitleSection>Contacts</TitleSection>
        <Filter/>
        <ContactsList/>

        <GlobalStyle />
      </Layout>
    );

}
