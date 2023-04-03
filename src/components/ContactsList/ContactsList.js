import { useDispatch, useSelector } from 'react-redux';
import { deleteContact} from '../../redux/contactSlice';
import { List, Item, Button, Text } from './ContactsList.styled';


const getVisibleContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );


const ContactsList = () => {
  const items = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const contacts = getVisibleContacts(items, filter);

  const dispatch = useDispatch();
  const contactsDelete = id => dispatch(deleteContact(id));

  return (
    <div>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Text>
              {name}: {number}
            </Text>
            <Button type="submit" onClick={()=>contactsDelete(id)}>
              Delete
            </Button>
          </Item>
        ))}
      </List>
    </div>
  );
};
export default ContactsList;

