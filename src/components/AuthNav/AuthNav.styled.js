import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  margin-left: 4px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background: rgba(0, 0, 0, 0.3);
  }
  :hover {
    color: #45baff;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const Text = styled.span`
  margin-right: 4px;
`;
