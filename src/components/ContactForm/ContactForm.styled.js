import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 5px 40px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.33;
  color: white;
`;

export const Input = styled(Field)`
  width: 100%;
  background-color: inherit;
  outline: none;
  border-radius: 4px;
  padding: 8px;
  height: 28px;
  font-size: 16px;
  color: antiquewhite;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 12px 4px 4px 8px;
`;

export const Button = styled.button`
  display: block;
  margin: 20px auto 0 auto;
  padding: 8px;
  font-size: 12px;
  color: #e0dede;
  min-width: 100px;
  border: 1px solid gray;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
  text-shadow: 0 0 5px #000;
  &:hover,
  &:focus {
    color: #45baff;
    border: 1px solid black;
  }
`;
