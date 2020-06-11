import styled from 'styled-components';
interface ButtonProps {
  primary?: boolean;
}
export const Button = styled.button<ButtonProps>`
  background-color: ${props => props.primary ? props.theme.green : props.theme.grey};
  border-radius: 15px;
  border: none;
  padding: 10px 20px;
  color: ${props => props.theme.white};
  letter-spacing: 1px;
  cursor: pointer;
  
  &:focus {
    outline: 0;
  }
  &:disabled {
    background-color: ${props => props.theme.grey};
  }
`;
