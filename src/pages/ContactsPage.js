import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/contacts/contactsSelectors.js';
import { fetchContacts } from '../redux/contacts/contactsOperations';

import ContactForm from '../components/ContactForm/ContactForm.js';
import Notification from '../components/Notification/Notification.js';
import Filter from '../components/Filter/Filter.js';
import ContactList from '../components/ContactList/ContactList.js';

import { Container, Phonebook, Contacts, Section } from './ContactsPage.styled';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  return (
    <Container>
      <Helmet>
        <Phonebook>Phonebook</Phonebook>
      </Helmet>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <Contacts>Contacts</Contacts>
      {contacts.length === 0 ? (
        <Notification message="Your contact book is empty, add your first contact!" />
      ) : (
        <Section>
          <Filter />
          <ContactList />
        </Section>
      )}
    </Container>
  );
}
