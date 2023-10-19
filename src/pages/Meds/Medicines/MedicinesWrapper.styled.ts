import { Row } from 'antd';
import styled from 'styled-components';

export const TableMedicine = styled('span')`
  background-color: '#273C91';
`;

export const MedicinesWrapper = styled('div')`
  width: 100%;
  justify-content: start;
  padding: 20px;
  height: 60vh;
  .icon {
    color: black;
    font-size: 1.2em;
    margin-right: 10px;
  }
  .icon-dropdown {
    display: none;
  }
  .get-meds-loader {
    padding: 48%;
  }
  .search-bar {
    width: 100%;
    gap: 2%;
    .add-med {
      width: 80%;
      :where(.css-dev-only-do-not-override-4lo48e).ant-select
        .ant-select-arrow {
        color: rgba(255, 255, 255, 0.25);
      }
      :where(.css-dev-only-do-not-override-4lo48e).ant-select-single
        .ant-select-selector
        .ant-select-selection-item,
      :where(.css-dev-only-do-not-override-4lo48e).ant-select-single
        .ant-select-selector
        .ant-select-selection-placeholder {
        padding: 2px;
        line-height: 5px;
      }
      .ant-select-selection-placeholder {
        color: black;
      }
    }
    .med-status {
      width: 18%;
      :where(.css-dev-only-do-not-override-4lo48e).ant-select
        .ant-select-arrow {
        color: black;
      }
    }
  }
  .meds-content {
    display: flex;
    align-content: start;
    padding: 10px 0;
    height: 60vh;
    overflow: scroll;
    .meds-content-container {
      width: 100%;
      .separator {
        border-top: 2px solid ${(props) => props.theme.primary.main};
        width: 50%;
        margin: 10px 0;
      }
      .meds-content-data {
        border-bottom: 1px solid grey;
        &:last-child {
          border-bottom: 0;
          margin-bottom: 10px;
        }
        &:first-child {
          margin-top: 10px;
        }
        display: flex;
        flex-direction: row;
        align-content: center;
        width: 100%;
        padding: 10px;
        .meds-details {
          flex-direction: column;
          width: 82%;
          /* display: flex; */
          /* align-items: center; */
          .second-line {
            color: grey;
          }
          .meds-details-rows {
            .vaccine-name {
            }
            display: flex;
            gap: 2%;
            align-items: center;
            .meds-tag {
              display: flex;
              flex-direction: column;
              align-content: center;
              border: 1px solid grey;
              border-radius: 40px;
              padding: 5px;
              height: 30px;
              width: 120px;
              &.stopped {
                color: red;
                border: 1px solid red;
              }
              &.prescribed {
                color: black;
                border: 1px solid black;
              }
              &.added {
                color: yellow;
                border: 1px solid yellow;
              }
            }
          }
        }
        .meds-icons {
          display: flex;
          align-items: center;
          width: 18%;
          height: 100%;
          gap: 5%;
          justify-content: end;
          .printer-icons {
            font-size: 1.7em;
          }
          .stop-icons {
            font-size: 1.7em;
            color: #d56868;
          }
          .renew-icons {
            font-size: 1.7em;
            color: lightgreen;
          }
        }
      }
    }
  }
`;
