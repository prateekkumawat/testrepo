import { Row } from 'antd';
import styled from 'styled-components';

export const AddInjectionFormWrapper = styled('div')`
  display: flex;
  gap: 2%;
  .add-injection-top-bar {
    padding-bottom: 20px;
    border-bottom: 2px solid ${(prop) => prop.theme.primary.main};
    border-bottom-width: 50%;
    display: flex;
    gap: 10%;
    margin-bottom: 2%;
    .checkbox-row {
      width: 40%;
      display: flex;
      /* gap: 5%; */
      justify-content: end;
      .checkbox-label {
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
  form {
    width: 100%;
  }

  .bttn-container {
    border-top: 1px solid grey;
    margin-top: 2%;
    padding-top: 2%;
    font-size: 1em;
    font-weight: 800;
    .bttns-cancel {
      height: 45%;
      width: 120px;
      padding: 10px 20px;
    }
    .bttns-save {
      height: 45%;
      background-color: ${(prop) => prop.theme.secondary.main};
      color: white;
      width: 120px;
      padding: 10px 20px;
      margin-left: 80% ;
    }
  }

  :where(.css-dev-only-do-not-override-4lo48e).ant-btn {
    font-size: 1.2em;
    height: 45px;
    width: 100px;
  }
  :where(.css-dev-only-do-not-override-4lo48e).ant-form-item
    .ant-form-item-label {
    text-align: end;
  }
  .ant-form-item-label > label {
    font-size: 1em !important;
    color: #000;
    font-weight: 500;
  }
  :where(.css-dev-only-do-not-override-4lo48e).ant-row {
    height: 45px;
    align-items: center;
  }
`;
