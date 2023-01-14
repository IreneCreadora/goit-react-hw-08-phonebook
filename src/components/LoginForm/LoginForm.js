import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { FormStyled, Input, Label, Button } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { authIsLoading } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit" loading={authIsLoading}>
        Log In
      </Button>
    </FormStyled>
  );
};
