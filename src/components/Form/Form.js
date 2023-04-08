import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { FormCard, Label, Input, Button } from './Form.styled';
import { fetchContacts } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';

export default function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = { name: name, phone: phone };


    if (
      contacts.some(
        item => item.name.toLowerCase() === newUser.name.toLowerCase()
      )
    ) {
      reset();

      return toast.warn(
        `🤦‍♂️"${newUser.name}" is already in contacts`,
        { position: toast.POSITION.TOP_CENTER }
      );
    }

    dispatch(addContact(newUser));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <FormCard onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          value={name}
          onChange={handleChange}

          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          value={phone}
          onChange={handleChange}
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
      <ToastContainer autoClose={1500} theme="dark" />
    </FormCard>
  );
}








