import { useDispatch } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { filterContact } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const filterChange = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        placeholder="Enter name"
        onChange={filterChange}
      ></Input>
    </Label>
  );
}

export default Filter;









