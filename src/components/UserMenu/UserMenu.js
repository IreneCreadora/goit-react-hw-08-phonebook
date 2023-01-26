import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { Wrapper, Title, Btn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Title>Welcome {user.name}</Title>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        LOG OUT
      </Btn>
    </Wrapper>
  );
};
