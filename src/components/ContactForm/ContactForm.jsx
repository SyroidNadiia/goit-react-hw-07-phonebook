import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import sharedStyles from 'components/sharedStyles.module.css';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);


  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.number.value;
    const newContact = { name, phone };
  
    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact(newContact));
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={sharedStyles.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={sharedStyles.input}
        />
      </label>

      <label className={sharedStyles.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={sharedStyles.input}
        />
      </label>

      <button className={sharedStyles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
