import { Row } from 'antd';
import styled from 'styled-components';

export const ImagingWrapper = styled(Row)`
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  .imaging-body-heading {
    font-size: 1.2em;
    width: 100%;
    font-weight: 800;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    .form-items {
      width: 50%;
    }
  }
  .imaging-body-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 60vh;
    overflow: scroll;
  }
  .imaging-row {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid grey;
    .row-detail {
      display: flex;
      flex-direction: column;
      width: 100%;
      .first-line {
        display: flex;
        flex-direction: row;
        font-size: 1.2em;
        gap: 5%;
        font-weight: 600;
      }
      .second-line {
        display: flex;
        flex-direction: row;
        gap: 2%;
        color: grey;
        align-items: center;
        .imaging-body-tag {
          border: 1px solid green;
          padding: 5px 10px;
          display: grid;
          place-content: center;
          align-items: center;
          border-radius: 20px;
          color: green;
        }
      }
    }
    .row-status {
      width: 20%;
      display: flex;
      gap: 10%;
      color: green;
      font-weight: 600;
      .row-status-data {
        width: 80%;
      }
      .icon-edit {
        font-size: 1.5em;
        width: 19%;
        color: black;
      }

      .icon-attach {
        font-size: 1.5em;
        width: 19%;
        color: ${(prop) => prop.theme.primary.main};
      }
    }
  }
  .buttn {
    background-color: ${(prop) => prop.theme.secondary.main};
    color: ${(prop) => prop.theme.common.white};
    padding: 0 30px;
    height: 45px;
    font-size: 1.2em;
    font-weight: 600;
    margin: 30px 40%;
  }
`;
