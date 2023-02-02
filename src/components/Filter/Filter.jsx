import { Form, Label, Input } from '../ContactForm/ContactForm.styled';
import { setFilterContacts } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(setFilterContacts(e.target.value));
  };
  return (
    <Form>
      <Label>
        Find contact by name
        <Input type="text" onChange={changeFilter} />
      </Label>
    </Form>
  );
};

export default Filter;
