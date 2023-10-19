import { Row } from 'antd';
import styled from 'styled-components';

export const AddVitalsWrapper = styled(Row)`
  padding: 20px 10px;
  min-width: 100%;

  .date-container {
    padding: 0 10px;
  }

  .date-items {
    font-size: 1.2em;
    font-weight: 600;
    color: gray;
    display: flex;
    justify-content: end;
    min-width: 100%;
    border-bottom: 1px solid black;
  }

  .form {
    min-width: 100%;
    :where(.css-dev-only-do-not-override-4lo48e).ant-card .ant-card-body {
      padding: 10px;
      border-radius: 0 0 12px 12px;
    }
    .gqCzNg {
      border-radius: 10px;
      background-color: white;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      margin: 10px 10px;
      border-top: none;
    }
  }

  .form_items {
    display: flex;
    flex-direction: row;
  }

  .form-item-group-1 {
    display: flex;
    flex-direction: row;
    width: 60%;
  }

  .form-item-group-2 {
    display: flex;
    flex-direction: row;
    width: 60%;
  }

  .vitals_input {
    height: 45px;
    width: 5vw;
  }

  .input-unit {
    margin-left: 1em;
    padding: 10px 0;
  }

  .form_item_container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .form_items_heading {
    font-size: 1.2em;
    font-weight: 500;
  }

  .form-items-sidelabel {
    font-size: 1em;
    color: gray;
    padding: 10px;
  }
  .form-items-sidelabel-bold {
    font-size: 1em;
    color: black;
    padding: 10px;
    font-weight: 500;
  }
  .vitals-buttons {
    display: flex;
    margin: 20px;
    justify-content: center;
    gap: 20px;
    .vitals-buttons-cancel {
      padding: 10px 40px;
      height: 45px;
      font-weight: 600;
    }
    .vitals-buttons-submit {
      font-weight: 600;
      height: 45px;
      padding: 10px 40px;
      background-color: ${(props) => props.theme.primary.main};
      color: ${(props) => props.theme.common.white};
    }
  }
  .ant-form-item-label {
    width: 6vw;
    display: flex;
    align-items: start;
  }
`;
