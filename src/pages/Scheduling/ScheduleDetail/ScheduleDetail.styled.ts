import React from 'react';
import { Checkbox, DatePicker, Form, Input, Select } from 'antd';
import { styled } from 'styled-components';

export const ScheduleDetailWrapper = styled('div')`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.common.white};
  border-radius: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .header {
    display: flex;
    gap: 10px;
    border: 1px solid ${(props) => props.theme.grey.main};
    border-radius: ${(props) => props.theme.borderRadius.main};
    padding: 15px;
    align-items: center;
  }
  .detail-body-wrapper {
    border: 1px solid ${(props) => props.theme.grey.main};
    border-radius: ${(props) => props.theme.borderRadius.main};
    height: inherit;
    .edit-wrapper {
      font-size: 1.5em;
      display: flex;
      justify-content: flex-end;
      width: 100%;
      padding: 15px 15px 0 0;
    }
    .detail-body {
      padding: 15px 15px 15px 0;
      display: flex;
      justify-content: space-between;

      .left-border {
        width: 2%;
        height: 100%;
        border-radius: ${(props) => props.theme.borderRadius.main};
        background-color: ${(props) => props.theme.primary.main};
      }
      .content-wrapper {
        width: 95%;
      }
      .content {
        padding: 10px 0 5px 0;
        border-bottom: 1px solid ${(props) => props.theme.grey.main};
        background-color: #fff;
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 100%;
        .icon {
          width: 25px;
          height: 25px;
        }
      }
      .plus-icon {
        width: 35px;
        height: 35px;
        font-size: 1.5em;
        padding:0 5px;
        font-weight: 500;
      }
    }
  }
  .detail-title {
    font-weight: 500;
    font-size: 1em;
  }
  .reason {
    border: 1px solid ${(props) => props.theme.grey.main};
    border-radius: ${(props) => props.theme.borderRadius.main};
    margin: 5px 0;
    height: 20vh;
    width: 100%;
  }

  .Schedule-simple-input-edit-visit {
    width: '8%';
    display: flex;
    gap: 15px;
    align-items: center;
    .key-name {
      color: #000;
      font-family: Montserrat;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px;
      text-transform: capitalize;
    }
    .value {
      color: #000;
      font-family: Montserrat;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;
    }
  }
`;

export const KeyValWrapper = styled('div')`
  display: flex;
  gap: 15px;
  align-items: center;
  .key-name {
    color: #000;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    text-transform: capitalize;
  }
  .value {
    color: #000;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
  }
`;

export const ScheduleInput = styled(Input)`
  background: ${(props) => props.theme.common.white};
`;

export const ScheduleSimpleInput = styled(Input)`
  background: ${(props) => props.theme.common.white};
  height: 35px;
`;

export const ScheduleSimpleSelect = styled(Select)`
  background: ${(props) => props.theme.common.white};
  height: 35px !important;
  .ant-select-selection-placeholder,
  .ant-select-selection-item {
    display: flex !important;
    align-items: center !important;
    font-size: 1em;
  }
  .ant-select-selector {
    height: 35px !important;
    background-color: transparent !important;
  }
`;

export const ScheduleSimpleDatePicker = styled(DatePicker)`
  height: 35px;
  input {
    color: ${(props) => props.theme.grey.main};
    font-size: 1em;
    color: #000;
    padding: 8px 12px;
    width: 100%;
  }
`;

export const ScheduleFormItem = styled(Form.Item)`
  border-radius: ${(prop) => prop.theme.borderRadius.secondary};
  .ant-form-item-label {
    padding-bottom: 0px;
    > label {
      padding-top: 20px;
      font-size: 1.2em !important;
      color: #000;
      font-weight: 500;
    }
  }
  margin-bottom: 5px;
`;

export const ScheduleTextArea = styled(Input.TextArea)`
  background: ${(props) => props.theme.common.white};
  font-size: 1em;
  color: #000;
  padding: 8px 12px;
  width: 100%;
  margin-top: 5px;
  &::placeholder {
    color: #000;
    font-size: 1em;
  }
`;
