import { Row } from 'antd';
import styled from 'styled-components';

export const VisitsHeaderWrapper = styled('div')`
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
  .visits-title {
    width: 46%;
    padding: 10px 0 !important;
    font-size: 1.2em;
  }
  .visits-title-items {
    margin-top: 2px;
    display: flex;
    flex-direction: row;
    min-width: 50%;
    justify-content: end;
    cursor: pointer;
  }
  .icon {
    font-size: 1.2em;
    align-items: center;
    margin-left: 5%;
    margin-top: 2%;
  }
`;

export const VisitsWrapper = styled('div')`
  min-height: 100%;
  width: 40vw;
  border: 1px solid grey;
  border-radius: 20px;
  height: 60vh;
`;

export const VisitsBodyWrapper = styled(Row)`
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  .visit-body-heading {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
  .visits-body-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* height: 60vh; */
    height: 80%;
    overflow: scroll;
    margin-bottom: 10%;
  }
  .get-visits-loader {
    padding: 48%; 
  }
  .visit-row {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid grey;
    .row-detail {
      display: flex;
      flex-direction: column;
      width: 70%;
      gap: 10px;
      .first-line {
        display: flex;
        flex-direction: row;
        gap: 5%;
        .visit-date {
          color: grey;
        }
      }
      .second-line {
        display: flex;
        flex-direction: row;
        gap: 5%;
        color: grey;
      }
    }
    .row-status {
      display: flex;
      gap: 10px;
      align-items: center;
      max-width: 30%;
      &.confirmed {
      }
      &.cancelled {
        color: red;
      }
      &.completed {
        color: green;
      }
      &.upcoming,
      &.upcomming {
        color: ${(props) => props.theme.primary.main};
      }
      .visits-body-tag {
        border: 1px solid lightgrey;
        padding: 10px;
        display: grid;
        place-content: center;
        align-items: center;
        border-radius: 20px;
      }
    }
  }
`;
