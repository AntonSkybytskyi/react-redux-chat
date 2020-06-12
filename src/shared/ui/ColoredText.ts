import styled from "styled-components";

interface ColoredTextProps {
  success?: boolean;
  danger?: boolean;
}

const ColoredText = styled.span<ColoredTextProps>`
  color: ${props => props.success ? props.theme.green : props.danger ? props.theme.danger : props.theme.grey };
`;

export default ColoredText;
