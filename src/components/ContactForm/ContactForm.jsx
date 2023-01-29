import { Form, Label, Button, Input } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from 'components/redux/contactSlice';

const ConatctForm = ({ onSubmit }) => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const dataForm = e.target;
    const name = dataForm.name.value;
    const number = dataForm.number.value;
    if (
      contacts.find(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      toast.warn(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact(name, number));
    toast.success(`Contact ${name} is successfully added!`);
    dataForm.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter your name..."
        />
      </Label>
      <Label>
        Number:
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter your number..."
        />
      </Label>
      <Button>Add contact</Button>
    </Form>
  );
};

// ConatctForm.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//     })
//   ),
//   onSubmit: PropTypes.func.isRequired,
// };

export default ConatctForm;
