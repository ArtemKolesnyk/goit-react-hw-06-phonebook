import AppStyled from './App.styled';
import ConatctForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <AppStyled />
      <section>
        <h1>--PHONEBOOK--</h1>
        <ConatctForm />
        <h2>--CONTACTS--</h2>
        <Filter />
        <ContactList />
      </section>
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </>
  );
};

export default App;
