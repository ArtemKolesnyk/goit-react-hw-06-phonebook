import { ContactBtn, Text, ListItem } from './Contact.styled';
import { delateContact } from 'redux/contactSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const removeContact = e => {
    dispatch(delateContact(e.target.id));
    toast.info('Contact is successfully removed!');
  };

  return (
    <ListItem>
      <Text>{name}</Text>
      <Text>{number}</Text>
      <ContactBtn type="button" id={id} onClick={removeContact}>
        Delete
      </ContactBtn>
    </ListItem>
  );
};

export default Contact;
