import { Button } from 'antd';
import styled from 'styled-components';

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.secondary.main};
  color: ${(props) => props.theme.secondary.contrastTextColor} !important;
`;

export const StyledButtonGroup  = styled(Button.Group)`
  button {
    border-radius: 0;
  }
  button:first-child {
    border-radius: ${(props) => props.theme.borderRadius.main} 0 0 0; 
  }
  button:last-child {
    border-radius: 0 ${(props) => props.theme.borderRadius.main} 0 0; 
  }
`;