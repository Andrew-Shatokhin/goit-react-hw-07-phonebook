import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { List, Item, Button, Text } from './ContactsList.styled';
import {getVisibleContacts} from '../../redux/selectors';


const ContactsList = () => {

  const visibleContacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();
  const contactDelete = id => dispatch(deleteContact(id));

  return (
    <div>
      <List>
        {visibleContacts.map(({ id, name, phone }) => (
          <Item key={id}>
            <Text>
              {name}: {phone}
            </Text>
            <Button type="submit" onClick={() => contactDelete(id)}>
              Delete
            </Button>
          </Item>
        ))}
      </List>
    </div>
  );
};
export default ContactsList;



