import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Container } from './ContactsPage.styled';

export default function Register() {
  return (
    <Container>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Container>
  );
}
