import styled from '@emotion/styled';

export const ContactListStyled = styled.ul`
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const ContactItemStyled = styled.li`
  display: block;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 4px 0;
  padding: 5px 10px;
  border-radius: 5%;
  border: 1px solid gray;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.33;
  color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteBtn = styled.button`
  display: block;
  padding: 8px;
  font-size: 12px;
  color: #e0dede;
  width: 60px;
  border: 1px solid gray;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
  text-shadow: 0 0 5px #000;
`;
