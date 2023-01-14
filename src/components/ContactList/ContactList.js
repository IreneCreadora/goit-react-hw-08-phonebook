import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/contactsSelectors';
import ContactItem from './ContactItem';
import { ContactListStyled } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            contact={{
              id,
              name,
              number,
            }}
            key={id}
          />
        );
      })}
    </ContactListStyled>
  );
};

export default ContactList;
