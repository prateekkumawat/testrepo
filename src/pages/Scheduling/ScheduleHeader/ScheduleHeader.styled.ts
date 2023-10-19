import styled, { css } from 'styled-components';
import { Row, Typography } from 'antd';

export const StyledHeaderText = styled(Typography)`
  font-size: 1.5em;
  color: #000;
  font-weight: 600;
`;

export const DateHandlerButton = styled.div`
  width: 45px;
  height: 45px;
  border: 0px solid ${(props) => props.theme.grey.main};
  border-bottom: 1.5px solid ${(props) => props.theme.grey.main};
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.common.white};
  cursor: pointer;
  box-shadow: ${(props) => props.theme.boxShadow.main};
`;

export const PrevButton = styled(DateHandlerButton)`
  margin-right: 10px;
`;

export const NextButton = styled(DateHandlerButton)`
  margin-left: 10px;
`;

export const DatePickerWrapper = styled.div`
  box-shadow: ${(props) => props.theme.boxShadow.main};
`;
