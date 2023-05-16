import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import sharedStyles from 'components/sharedStyles.module.css';
import css from './ContactListItem.module.css';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handelDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li key={contact.id} className={css.item}>
      {contact.name}
      <button
        className={`${sharedStyles.button} ${css.buttonWithMargin}`}
        onClick={handelDelete}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactListItem;
