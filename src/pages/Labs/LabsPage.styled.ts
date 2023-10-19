import { Row } from 'antd';
import styled from 'styled-components';

export const LabsHeaderWrapper = styled('div')`
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
  .labs-title {
    width: 40%;
    padding: 10px 0 !important;
  }
  .labs-title-items {
    margin-top: 2px;
    display: flex;
    flex-direction: row;
    width: 60%;
    justify-content: end;
    cursor: pointer;
    .labs-item-tabs {
      padding: 10px 20px;
      height: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      min-width: 25%;
      text-align: center;
      &.active {
        background-color: ${(prop) => prop.theme.common.white} !important;
        color:  ${(prop) => prop.theme.primary.main} !important;
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

export const LabsWrapper = styled('div')`
  min-height: 100%;
  width: 40vw;
  border: 1px solid grey;
  border-radius: 20px;
`;
