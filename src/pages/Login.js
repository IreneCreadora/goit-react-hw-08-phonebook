import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Container } from './ContactsPage.styled';

export default function Login() {
  return (
    <Container>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Container>
  );
}
