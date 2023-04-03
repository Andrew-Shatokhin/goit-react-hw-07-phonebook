import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contactSlice';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const filterChange = e => {
      dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={filterChange}></Input>
    </Label>
  );
}

export default Filter;

