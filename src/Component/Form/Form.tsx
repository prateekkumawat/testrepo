import React from 'react';
import { Checkbox, DatePicker, Form, Input, Radio, Select } from 'antd';
import styled from 'styled-components';

export const StyledInput = styled(Input)`
  border-radius: ${(prop) => prop.theme.borderRadius.secondary};
  border: 1px solid rgba(0, 0, 0, 0.3);

  border-radius: 10px;
  background: ${(props) => props.theme.common.white};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.07);
  :focus {
    border-color: unset !important;
  }
`;

/********************************************************/
export const StyledFormItem = styled(Form.Item)`
  margin-bottom: 16px;
  .ant-form-item-label {
    margin-bottom: 8px;
    padding: 0;
    > label {
      font-size: 14px;
      color: ${(prop) => prop.theme.text_dark};
      font-family: ${(prop) => prop.theme.font_m};
    }
  }
  &.inline {
    .ant-form-item-label {
      margin-bottom: 0;
    }
  }
  /* ${(prop) => prop.theme.mediaQueries.desktop1440} {
    border-radius: ${(prop) => prop.theme.borderRadius.secondary};
    .ant-form-item-label {
      padding-bottom: 0px;
      > label {
        padding-top: 15px;
        font-size: 15px !important;
        color: #000;
        font-weight: 500;
      }
    }
  } */
`;
/********************************************************/
export const StyledSimpleInput = styled(Input)`
  background: #fff;
  border: 1px solid #0000004d;
  border-radius: 8px;
  height: ${(prop) => prop.theme.h_md};
  box-shadow: 0px 4px 10px 0px #00000012;
  font-family: ${(props) => props.theme.font_m};
  font-size: 14px;
  padding: 6px 10px;
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
`;
/********************************************************/
export const StyledSimpleDatePicker = styled(DatePicker)`
  background: #fff;
  border: 1px solid #0000004d;
  border-radius: 8px;
  height: ${(prop) => prop.theme.h_md};
  box-shadow: 0px 4px 10px 0px #00000012;
  font-family: ${(props) => props.theme.font_m};
  font-size: 14px;
  padding: 6px 10px;
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

  .ant-picker-panel-container {
    border-radius: 10px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.07);
  }
`;
/********************************************************/
export const StyledSimpleSelect = styled(Select)`
  background: #fff;
  border: 1px solid #0000004d;
  border-radius: 8px;
  height: ${(prop) => prop.theme.h_md};
  box-shadow: 0px 4px 10px 0px #00000012;
  font-family: ${(props) => props.theme.font_m};
  font-size: 14px;
  /* padding: 6px 10px; */
  .ant-select-selector {
    border: none !important;
    background-color: transparent !important;
    box-shadow: none !important;
    height: 100% !important;
  }
  .ant-select-selection-placeholder,
  .ant-select-selection-item {
    display: flex !important;
    align-items: center !important;
    font-size: 1em;
  }

  .ant-select-focused {
    border: none !important;
  }
  :focus {
    border-color: unset !important;
  }
  &.ant-select-focused {
    box-shadow: unset !important;
  }
`;
/********************************************************/

export const StyledSelect = styled(Select)`
  border-radius: ${(prop) => prop.theme.borderRadius.secondary};
  border: 1px solid rgba(0, 0, 0, 0.3) !important;
  background: ${(props) => props.theme.common.white};
  border-radius: 10px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.07);
  .ant-select-selector {
    border: none !important;
    height: 40px !important;
    .ant-select-selection-placeholder {
      padding: 0;
      line-height: 40px !important;
      transition: all 0.3s, visibility 0s;
    }
  }
  .ant-select-focused {
    border: none !important;
  }
  :focus {
    border-color: unset !important;
  }
  &.ant-select-focused {
    box-shadow: unset !important;
  }
  /* .ant-select-focused:where(.css-dev-only-do-not-override-4lo48e).ant-select:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer) .ant-select-selector */
`;

export const StyledTextArea = styled(Input.TextArea)`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background: ${(props) => props.theme.common.white};
  font-size: 1em;
  color: #000;
  padding: 8px 12px;
  transition: border-color 0.3s;
  width: 100%;

  &::placeholder {
    color: #000;
    font-size: 1em;
  }

  :focus {
    border-color: unset !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;

export const StyledCheckBox = styled(Checkbox)``;

export const StyledRadioButton = styled(Radio)``;

// export const InputStyle = styled('div')`
//   @mixin inputstyles {
//     height: ${(props) => props.theme.h_md};
//     border-radius: 7px;
//     box-shadow: 0px 4px 10px 0px #00000012;
//     border: 1px solid #0000004d;
//     background: #fff;
//     color: ${(props) => props.theme.text_dark};
//     font-family: ${(props) => props.theme.font_m};
//     font-size: 1rem;
//   }
//   .input {
//     margin-bottom: 1rem;
//     label {
//       font-size: 14px;
//       color: ${(props) => props.theme.text_dark};
//       font-family: ${(props) => props.theme.font_m};
//       margin-bottom: 5px;
//     }
//     .form-control {
//       @include inputstyles;
//       &::placeholder {
//         color: #00000080;
//         font-family: ${(props) => props.theme.font_r};
//         font-size: 14px;
//       }
//       &:focus {
//         box-shadow: none;
//         border-color: $primary;
//       }
//       &.lg {
//         height: ${(props) => props.theme.h_lg};
//       }
//       &.sm {
//         height: ${(props) => props.theme.h_sm};
//       }
//     }
//     textarea {
//       height: auto !important;
//       resize: none;
//     }
//     /* .form-check {
//       margin-bottom: 0;
//       .form-check-input {
//         &:focus {
//           box-shadow: none;
//         }
//       }
//       .form-check-label,
//       label {
//         margin-bottom: 0;
//       }
//       .form-check-input[type='checkbox'] {
//         width: 20px;
//         height: 20px;
//         border-radius: 4px;
//       }
//       .form-check-input[type='checkbox']:checked {
//         background-color: $primary;
//         border-color: $primary;
//       }
//       .form-check-input[type='radio'] {
//         width: 20px;
//         height: 20px;
//         border-radius: 50px;
//       }
//       .form-check-input[type='radio']:checked {
//         background-color: $primary;
//         border-color: $primary;
//       }
//     } */
//   }
// `;

// ant-select
// ant-select-in-form-item
// sc-eYakRx
// jmbETy
// css-dev-only-do-not-override-4lo48e
// ant-select-single
// ant-select-show-arrow
// ant-select-open
// ant-select-focused
