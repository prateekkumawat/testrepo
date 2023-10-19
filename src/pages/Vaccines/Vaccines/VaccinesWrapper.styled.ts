import { Row } from 'antd';
import styled from 'styled-components';

export const VaccinesWrapper = styled('div')`
  width: 100%;
  justify-content: start;
  padding: 20px;
  font-family: Montserrat;
  .icon {
    color: black;
    font-size: 1.8em;
  }
  .icon-dropdown {
    display: none;
  }
  :where(.css-dev-only-do-not-override-4lo48e).ant-select .ant-select-arrow {
    color: rgba(255, 255, 255, 0.25);
  }
  .search-bar {
    width: 100%;
  }
  .get-vaccine-loader {
    padding: 48%; 
  }
  .history-heading {
    font-size: 1.2em;
    padding: 20px;
    font-weight: 600;
    border-bottom: 2px solid ${(prop) => prop.theme.primary.main};
  }
  .vaccines-row {
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
        font-size: 1em;
        gap: 5%;
        font-weight: 600;
        .syringe {
          height: 1.5em;
          color: green;
        }
      }
      .second-line {
        display: flex;
        flex-direction: row;
        gap: 2%;
        color: grey;
        align-items: center;
        font-size: 0.8em;
      }
    }
  }
  .row-status {
    width: 20%;
    display: flex;
    gap: 10%;
    font-weight: 600;
    justify-content: end;
    cursor: pointer;
    .row-status-data {
      width: 80%;
    }
    .icon {
      font-size: 1.8em;
      color: grey;
      cursor: pointer;
    }
    .icon-add {
      color: #5cfe5c;
      font-size: 2em;
      cursor: pointer;
    }
  }
  .buttn {
    background-color: ${(prop) => prop.theme.primary.main};
    color: ${(prop) => prop.theme.common.white};
    padding: 0 28px;
    height: 45px;
    font-size: 1.2em;
    font-weight: 600;
    margin: 30px 37%;
    cursor: pointer;
  }
`;
