import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const WelcomeContainer = styled.div`
  margin: 30px auto 20px auto;
  width: 680px;
  height: auto;
  text-align: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`;

export const Header = styled.h1`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.33;
`;
export const LinkStyled = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #9f40ff;
  &:hover,
  &:focus {
    color: #45baff;
  }
`;
