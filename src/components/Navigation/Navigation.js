import { useAuth } from '../../hooks/useAuth';
import { NavBox, NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavBox>
      <NavLinkStyled to="/">HOME</NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="/contacts">CONTACTS</NavLinkStyled>}
    </NavBox>
  );
};
