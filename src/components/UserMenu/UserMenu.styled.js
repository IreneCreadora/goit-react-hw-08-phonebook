import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  margin: 0 8px;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.p`
  font-weight: 700;
  color: black;
`;

export const Btn = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  color: black;
  background: inherit;
  :hover {
    color: #45baff;
    background: rgba(0, 0, 0, 0.3);
  }
`;
