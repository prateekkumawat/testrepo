import { Row } from 'antd';
import styled from 'styled-components';

export const HistoryBodyWrapper = styled('div')`
  display: flex;
  width: 100%;
  justify-content: start;
  padding: 10px 20px;
  height: 100%;
  .history-content {
    align-content: start;
    height: 100%;
    overflow: scroll;
    width: 100%;
    .history-content-container {
      width: 100%;
      .history-content-heading-data {
        display: flex;
        flex-direction: column;
        border-bottom: 2px solid #972587;
        .history-content-heading {
          /* width: 100%; */
          display: flex;
          flex-direction: row;
          padding: 10px 20px;
          .heading {
            width: 97%;
            font-size: 1.5em;
            font-weight: 600;
          }
          .icon {
            width: 3%;
            font-size: 2em;
            font-weight: 400;
            cursor: pointer;
          }
        }
      }

      .history-content-data {
        font-size: 1.2em;
        padding: 10px 0;
        border-bottom: 2px solid lightgray;
        margin-bottom: 10%;
        .medical-pro {
          padding: 5px 20px;
          display: flex;
          align-items: center;
          .medical-pro-name {
            width: 80%;
          }
          .medical-pro-content {
            display: flex;
            width: 19%;
            .status-tag {
              border: 1px solid green;
              color: green;
              padding: 5px;
              text-align: center;
              border-radius: 20px;
              width: 70%;
            }
            .icon {
              font-size: 1.5em;
              color: grey;
              margin-left: 10px;
              cursor: pointer;
            }
          }
        }
        .data-rows {
          padding: 5px 20px;
        }
      }
    }
  }
`;
