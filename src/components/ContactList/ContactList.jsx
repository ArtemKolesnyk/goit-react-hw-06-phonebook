import { useSelector } from 'react-redux';
import Contact from '../Contact';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filtredName = useSelector(state => state.filters.filter).toLowerCase();

  const getFiltredContact = () => {
    if (!filtredName || filtredName === '') {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtredName.toLowerCase())
    );
  };
  const filtredContacts = getFiltredContact();
  return (
    <List>
      {filtredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </List>
  );
};

export default ContactList;
