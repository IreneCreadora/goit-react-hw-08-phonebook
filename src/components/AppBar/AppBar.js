import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import { AiOutlineIdcard } from 'react-icons/ai';

import { Header, Logo } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Logo>
        <span role="img" aria-label="logo icon">
          <AiOutlineIdcard size="30px" color="#9f40ff" />
        </span>{' '}
        MY CONTACTS
      </Logo>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
