import { AiFillEdit } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { FormStyled, Icon, Label, Input, Button } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { authIsLoading } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <Icon>
        <AiFillEdit size="80px" color="#9f40ff" />
      </Icon>

      <Label>Username</Label>
      <Input type="text" name="name" />
      <Label>Email</Label>
      <Input type="email" name="email" />
      <Label>Password</Label>
      <Input type="password" name="password" />
      <Button type="submit" loading={authIsLoading}>
        Register
      </Button>
    </FormStyled>
  );
};
