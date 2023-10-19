import { Row } from 'antd';
import styled from 'styled-components';

export const MedsHeaderWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${(prop) => prop.theme.secondary.main};
  height: fit-content;
  min-width: 100%;
  color: ${(prop) => prop.theme.common.white};
  font-weight: 600;
  padding-left: 20px !important;
  font-family: ${(prop) => prop.theme.font.family} !important;
  .meds-title {
    width: 46%;
    padding: 10px 0 !important;
    font-size: 1.2em;
  }
  .meds-title-items {
    margin-top: 2px;
    display: flex;
    flex-direction: row;
    min-width: 50%;
    justify-content: end;
    cursor: pointer;
    font-size: 1em !important;
    .meds-item-tabs {
      padding: 10px 20px;
      height: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      &.active {
        background-color: ${(prop) => prop.theme.common.white} !important;
        color: black;
      }
    }
  }
  .icon {
    font-size: 1.2em;
    align-items: center;
    margin-left: 5%;
    margin-top: 2%;
  }
`;

export const MedsWrapper = styled('div')`
  min-height: 100%;
  width: 40vw;
  border: 1px solid grey;
  border-radius: 20px;
  .ant-modal-header {
    background-color: transparent;
    color: #ffffff;
    height: 40px;
    display: 'grid';
    align-items: 'center';
  }
`;

export const AddMedicineFormWrapper = styled(Row)`
  display: flex;
  flex-direction: row;
  font-size: 1.2em;
  font-weight: 600;
  gap: 5%;
  padding: 20px;
  form {
    width: 100%;
  }
  .add-medicine-column-1 {
    width: 40%;
    flex-direction: column;
    row-gap: 20px;
    .add-medicine-types {
      flex-direction: row;
      gap: 5%;
      height: 60px;
      .types {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #ebebeb;
        padding: 10px;
        min-width: 20%;
        height: 45px;
        border-radius: 12px;
      }
    }
    .add-medicine-dosage {
      font-size: 1.2em;
      border-bottom: 1px solid lightgray;
      padding: 10px 0;
      margin-bottom: 10px;
    }
    .dosage-content {
      flex-direction: column;
      row-gap: 20px;
      .add-medicine-labels {
        width: 100%;
        .add-medicine-input-box {
          width: 120px;
          height: 45px;
          margin: 0 10px 10px 0;
        }
      }
    }
  }
  .add-medicine-column-2 {
    width: 55%;
    row-gap: 20px;
    flex-direction: column;
    .add-medicine-labels {
      width: 100%;
      .add-medicine-input-box {
        width: 100%;
        height: 45px;
        margin: 0 10px 10px 0;
      }
    }
  }
  :where(.css-dev-only-do-not-override-4lo48e).ant-btn {
    font-size: 1.2em;
    height: 45px;
    width: 100px;
  }
  :where(.css-dev-only-do-not-override-4lo48e).ant-form-item
    .ant-form-item-label {
    text-align: start;
    width: 35%;
  }
`;

export const AddMedicineFormWrapper2 = styled(Row)`
  display: flex;
  flex-direction: row;
  font-size: 1.2em;
  font-weight: 600;
  gap: 2%;
  padding: 20px;
  .add-medicine-column-1 {
    width: 40%;
    flex-direction: column;
    row-gap: 20px;
    .dosage-content {
      flex-direction: column;
      row-gap: 20px;
      .add-medicine-labels {
        width: 100%;
        .add-medicine-input-box {
          width: 120px;
          height: 45px;
          margin: 0 10px 10px 0;
        }
        .ant-form-item-label {
          text-align: start;
          width: 35%;
        }
      }
    }
  }
  .add-medicine-column-2 {
    width: 58%;
    row-gap: 20px;
    flex-direction: column;
    .add-medicine-labels {
      width: 100%;
      .add-medicine-input-box {
        height: 45px;
        width: '100%';
        margin: 0 10px 10px 0;
      }
      .ant-form-item-label {
        text-align: start;
        width: 45%;
      }
    }
    :where(.css-dev-only-do-not-override-4lo48e).ant-btn {
      font-size: 1.2em;
      height: 45px;
      width: 100px;
    }
  }
`;
