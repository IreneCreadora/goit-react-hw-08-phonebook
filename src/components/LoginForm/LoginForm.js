import { AiFillHome } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { FormStyled, Icon, Input, Label, Button } from './LoginForm.styled';

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
      <Icon>
        {' '}
        <AiFillHome size="80px" color="#9f40ff" />
      </Icon>

      <Label>Email</Label>
      <Input type="email" name="email" />
      <Label>Password</Label>
      <Input type="password" name="password" />
      <Button type="submit" loading={authIsLoading}>
        Log In
      </Button>
    </FormStyled>
  );
};
