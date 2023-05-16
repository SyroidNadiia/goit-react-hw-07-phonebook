import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import sharedStyles from './sharedStyles.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={sharedStyles.section}>
      <h1 className={sharedStyles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={sharedStyles.title}>Contacts</h2>
      <Filter></Filter>
      <ContactList />
    </div>
  );
};
