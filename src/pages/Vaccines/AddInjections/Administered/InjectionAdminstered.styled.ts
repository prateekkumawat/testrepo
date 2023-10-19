import styled from 'styled-components';

export const InjectionAdministeredWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  height: 54vh;
  .add-injection-column-1 {
    display: flex;
    flex-direction: column;
    width: 64%;
    border-right: 2px solid ${(prop) => prop.theme.primary.main};
    padding: 0 10px;
    .add-injection-rows {
      display: flex;
      flex-direction: row;
      width: 100%;
      padding: 10px 0;
      margin-right: 10px;
      .add-injection-rows-1 {
        width: 50%;
        display: flex;
        .checkbox-label {
          margin-left: 10px;
          margin-top: 10px;
        }
        .saperator {
          padding: 5px;
          margin: 5px 0;
          border-right: 2px solid darkgray;
        }
      }
      .add-injection-rows-2 {
        width: 50%;
        display: flex;
        .checkbox-label {
          margin-left: 10px;
          margin-top: 10px;
        }
        .saperator {
          margin: 5px 0;
          border-right: 2px solid darkgray;
        }
      }
    }
  }
  .add-injection-column-2 {
    display: flex;
    width: 35%;
    flex-direction: column;
    padding-left: 10px;
    .add-injection-rows {
      display: flex;
      flex-direction: row;
      width: 100%;
      padding-left: 20px;
      padding: 10px 0;
      .patial-administered-flag {
        margin: 0 10% 0 15%;
      }
      .add-injection-labels {
        width: 100%;
      }
    }
  }
  .add-injection-column-1
    .add-injection-rows
    :where(.css-dev-only-do-not-override-4lo48e).ant-form-item
    .ant-form-item-label {
    text-align: end;
    width: 150px;
  }
  .add-injection-column-1
    .add-injection-rows
    .add-injection-rows-2
    :where(.css-dev-only-do-not-override-4lo48e).ant-form-item
    .ant-form-item-label {
    text-align: end;
    width: 100px !important;
  }
  .add-injection-column-2
    .add-injection-rows
    :where(.css-dev-only-do-not-override-4lo48e).ant-form-item
    .ant-form-item-label {
    text-align: end;
    width: 100px;
  }
  .ant-form-item-label > label {
    padding-top: 0 !important;
    font-size: 1em !important;
  }
`;
