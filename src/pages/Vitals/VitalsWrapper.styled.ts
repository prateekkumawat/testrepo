import { Row } from 'antd';
import styled from 'styled-components';

export const VitalsHeaderWrapper = styled(Row)`
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
  padding: 0 20px !important;
  .vitals-title {
    width: 46%;
    padding: 10px 0 !important;
  }
  .vitals-title-items {
    margin-top: 2px;
    display: flex;
    flex-direction: row;
    min-width: 50%;
    justify-content: end;
    cursor: pointer;
    .vitals-item-tabs {
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

export const VitalsWrapper = styled(Row)`
  min-height: auto;
  width: 40vw;
  border: 1px solid grey;
  border-radius: 20px;
`;
