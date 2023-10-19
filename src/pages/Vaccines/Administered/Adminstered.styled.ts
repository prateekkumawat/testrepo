import styled from 'styled-components';

export const AdministeredWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  .add-vaccine-column-1 {
    display: flex;
    flex-direction: column;
    width: 64%;
    border-right: 2px solid ${(prop) => prop.theme.primary.main};
    padding: 0 10px;
    .add-vaccine-rows {
      display: flex;
      flex-direction: row;
      width: 100%;
      padding: 10px 0;
      .add-vaccine-rows-1 {
        width: 50%;
        display: flex;
        .checkbox-label {
          margin-left: 10px;
          margin-top: 10px;
        }
        .saperator {
          padding: 10px;
          margin: 5px 0;
          border-right: 2px solid darkgray;
        }
      }
      .add-vaccine-rows-2 {
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
  .add-vaccine-column-2 {
    display: flex;
    width: 35%;
    flex-direction: column;
    .add-vaccine-rows {
      display: flex;
      flex-direction: row;
      width: 100%;
      padding-left: 20px;
      padding: 10px 0;
      .patial-administered-flag {
        margin: 0 10% 0 15%;
      }
    }
    .add-vaccine-rows-1 {
      display: flex;
      flex-direction: row;
      width: 100%;
      padding-left: 5px;
    }
    .add-vaccine-rows-3 {
      display: flex;
      padding-right: 8%;
      justify-content: end;
      .text {
        padding-left: 10px;
      }
    }
    .add-vaccine-rows-2 {
      display: flex;
      flex-direction: row;
      width: 100%;
      padding-left: 5px;
      /* padding-bottom: 4%; */
      /* gap: 5%; */
      .or {
        display: flex;
        width: 50%;
        margin: 0 20% 0 30%;
        .or-side {
          width: 45%;
          border-bottom: 2px solid black;
          height: 50%;
        }
      }
    }
  }
  .add-vaccine-column-1
    .add-vaccine-rows
    :where(.css-dev-only-do-not-override-4lo48e).ant-form-item
    .ant-form-item-label {
    text-align: end;
    width: 150px;
  }
  .add-vaccine-column-1
    .add-vaccine-rows
    .add-vaccine-rows-2
    :where(.css-dev-only-do-not-override-4lo48e).ant-form-item
    .ant-form-item-label {
    text-align: end;
    width: 100px !important;
  }
  .add-vaccine-column-2
    .add-vaccine-rows
    :where(.css-dev-only-do-not-override-4lo48e).ant-form-item
    .ant-form-item-label {
    text-align: end;
    width: 100px;
  }
  .ant-form-item-label > label {
    padding-top: 0 !important;
  }
`;
