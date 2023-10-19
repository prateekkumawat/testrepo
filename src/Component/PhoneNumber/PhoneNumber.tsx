import React, { FC } from 'react';
import { PatternFormat, PatternFormatProps } from 'react-number-format';
import styled from 'styled-components';

export const StyledPhoneNumber = styled(PatternFormat)`
  background: #fff;
  border: 1px solid #0000004d;
  border-radius: 8px;
  height: ${(prop) => prop.theme.h_md};
  box-shadow: 0px 4px 10px 0px #00000012;
  font-family: ${(props) => props.theme.font_m};
  font-size: 14px;
  padding: 6px 10px;
  width: 100%;
  &::placeholder {
    font-size: 14px;
    color: #00000080;
    font-family: ${(props) => props.theme.font_m};
  }
  &:focus {
    border-color: ${(prop) => prop.theme.primary.main};
    box-shadow: 0px 4px 10px 0px #00000012;
    outline: none;
  }
  &.input-error {
    border-color: ${(props) => props.theme.primary.main} !important;
    outline: ${(props) => props.theme.primary.main} !important;
  }
`;
export const PhoneNumber: FC<
  { className?: string; error?: string } & Partial<PatternFormatProps>
> = ({
  error,
  className,
  format,
  defaultValue,
  onValueChange,
  ...PatternFormatPrpos
}) => {
  return (
    <StyledPhoneNumber
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      allowEmptyFormatting
      mask="_"
      format={format ?? '(###) #### ###'}
      className={`format-phone ${error ? 'input-error' : ''} ${className}`}
    />
  );
};

export const SimplePhoneNumber = styled(PhoneNumber)`
  height: 45px !important;
`;
