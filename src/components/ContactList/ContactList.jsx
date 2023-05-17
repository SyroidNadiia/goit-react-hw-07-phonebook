import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import ContactListItem from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <>
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact}></ContactListItem>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
