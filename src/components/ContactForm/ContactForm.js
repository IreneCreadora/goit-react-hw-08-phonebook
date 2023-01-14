import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/contactsSelectors';

import { Formik } from 'formik';
import { FormStyled, Label, Input, Button } from './ContactForm.styled';

import FormError from '../FormikComponents/ErrorMessageFormik';

import { initialValues } from './initialValuesData';
import { validationSchema } from './yup-validation';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    if (!values) return;

    const isInContact = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isInContact) {
      alert(`${values.name} is already in contact`);
      return false;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormStyled autoComplete="off">
        <div>
          <Label htmlFor="name">Full name</Label>
          <div>
            <Input name="name" type="text" placeholder="Full name" />
            <FormError name="name" />
          </div>
        </div>
        <div>
          <Label htmlFor="number">Phone number</Label>
          <div>
            <Input name="number" type="text" placeholder="Phone number" />
            <FormError name="number" />
          </div>
        </div>
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};

export default ContactForm;
