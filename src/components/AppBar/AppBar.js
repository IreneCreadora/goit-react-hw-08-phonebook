import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import { AiOutlineUserAdd } from 'react-icons/ai';

import { Header, Logo, Nav } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Logo>
        <AiOutlineUserAdd size="20px" color="#9f40ff" />
        MY CONTACTS
      </Logo>
      <Nav>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Nav>
    </Header>
  );
};
