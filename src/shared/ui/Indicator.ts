import styled from 'styled-components';
interface IndicatorProps {
  unread?: boolean;
}
export const Indicator = styled.i<IndicatorProps>`
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: ${props => props.unread ? props.theme.green : props.theme.grey };
  margin-right: 4px;
`;
