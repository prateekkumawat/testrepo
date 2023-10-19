import { Row } from 'antd';
import styled from 'styled-components';

export const VaccinesHeaderWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${(prop) => prop.theme.secondary.main};
  height: fit-content;
  min-width: 100%;
  font-size: 1em;
  color: ${(prop) => prop.theme.common.white};
  font-weight: 600;
  padding-left: 20px !important;
  .vaccines-title {
    width: 46%;
    padding: 10px 0 !important;
    font-size: 1.2em;
    font-weight: 500;
  }
  .vaccines-title-items {
    margin-top: 2px;
    display: flex;
    flex-direction: row;
    min-width: 50%;
    justify-content: end;
    cursor: pointer;
    .vaccines-item-tabs {
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

export const VaccinesPageWrapper = styled('div')`
  min-height: 100%;
  width: 40vw;
  border: 1px solid grey;
  border-radius: 20px;
`;
