import { Row } from 'antd';
import { styled } from 'styled-components';

export const AllergiesHeaderWrapper = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* gap: 20px; */
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${(prop) => prop?.theme?.secondary?.main};
  height: fit-content;
  min-width: 100%;
  font-size: 1em;
  color: ${(prop) => prop?.theme?.common?.white};
  padding: 0 20px !important;
  font-weight: 600;
  .allergies-title {
    width: 46%;
    padding: 10px 0 !important;
  }
  .allergies-title-items {
    margin-top: 2px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    /* gap: 30px; */
    min-width: 50%;
    justify-content: end;
    .allergies-item-tabs {
      padding: 10px 20px;
      height: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      &.active {
        background-color: ${(prop) => prop.theme.common.white} !important;
        color: black;
      }
    }
    .icon {
      font-size: 1.2em;
      align-items: center;
      margin-left: 5%;
      margin-top: 2%;
    }
  }
`;
