import { AiFillEdit, AiFillHome } from 'react-icons/ai';
import { Wrapper, NavLinkStyled, Text } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <NavLinkStyled to="/register">
        <Text>REGISTER </Text> <AiFillEdit size="18px" color="#1d3cfb" />
      </NavLinkStyled>
      <NavLinkStyled to="/login">
        <Text>LOG IN </Text>
        <AiFillHome size="18px" color="#1d3cfb" />
      </NavLinkStyled>
    </Wrapper>
  );
};
