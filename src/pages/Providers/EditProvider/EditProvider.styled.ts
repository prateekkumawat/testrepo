import { Card } from 'antd';
import styled from 'styled-components';

export const EditProviderCard = styled(Card)`
  /* width: 80%; */
  display: flex;
  margin: auto;
  background-color: ${(props) => props.theme.common.grey};
  justify-content: space-between;
  .ant-card-body {
    width: 100%;
    padding-top: 10px;
  }
  .section {
    width: 33%;
    .ant-form-item {
      padding: 5px 0 !important;
      .ant-form-item-label {
        min-width: 30%;
        white-space: normal;
        max-width: 30%;
        max-height: 45px;
      }
    }
    .inputs-side {
      .ant-form-item-control-input-content {
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        justify-content: space-between !important;
        gap: 10px;
        .ant-picker {
          width: 100%;
        }
      }
    }
    .dates-form-item {
      .ant-form-item-row {
        max-height: 45px;
      }
    }
    .speciality-text {
      height: 45px;
      align-items: center;
      display: flex;
      text-align: center;
      margin-left: 30%;
    }
    .edit-btns {
      display: flex;
      gap: 10px;
      justify-content: flex-end;
      width: 100%;
    }
  }
  .last-col {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .popup-header {
    border-bottom: 3px solid ${(props) => props.theme.secondary.main};
    justify-content: space-between;
    display: flex;
    padding: 5px 0;
    .name-wrapper {
      display: flex;
      width: 100%;
      align-items: center;
    }
    .name {
      font-weight: bold;
    }
    .separator {
      padding: 0 3px;
    }
    .speciality {
      display: block;
      width: max-content;
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .status {
    width: 10px;
    height: 10px;
    padding-right: 5px;
    margin-right: 5px;
    background: ${(prop) => prop.theme.warning.main};
    border-radius: 50%;
  }
  .status.active {
    background: ${(prop) => prop.theme.success.main};
  }
  .status.inactive {
    background: ${(prop) => prop.theme.danger.main};
  }
  .status.pending {
    background: ${(prop) => prop.theme.warning.main};
  }

  /* making disabled color pop */
  .ant-input[disabled] {
    background-color: #ffffff;
    color: black;
  }
  .ant-select-disabled {
    .ant-select-selection-item {
      color: black;
    }
  }
`;
