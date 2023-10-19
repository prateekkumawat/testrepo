import { Row } from 'antd';
import styled from 'styled-components';

export const ViewVitalsWrapper = styled(Row)`
  padding: 20px;
  min-width: 100%;
  display: inline-block;
  .tab-scroll {
    overflow-x: scroll;
    width: 80%;
    display: -webkit-inline-box;
    gap: 5%;
    align-items: center;
    &::-webkit-scrollbar {
      display: none;
    }
    .view-vitals-link {
      margin: auto;
      display: block;
      &.active {
        background: ${(props) => props.theme.primary.main};
        padding: 10px;
        color: white;
        border-radius: ${(props) => props.theme.borderRadius.main};
      }
    }
    &:hover {
      cursor: pointer;
      scroll-behavior: smooth;
    }
  }
  .navbar {
    min-width: 100%;
    display: flex;
    flex-direction: row;
    font-size: 1.2em;
    font-weight: 500;
    gap: 5%;
    overflow: auto;
    margin: 0;
    padding: 0;
    height: 2.5rem;
  }

  .circle-button-prev-button,
  .circle-button-next-button {
    width: 30px;
    height: 30px;
    border: 0px solid ${(props) => props.theme.grey.main};
    border-bottom: 1.5px solid ${(props) => props.theme.grey.main};
    border-radius: 50%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.common.white};
    cursor: pointer;
    box-shadow: ${(props) => props.theme.boxShadow.main};
  }

  .vitals-graph {
    width: 100%;
    margin: 20px 0;
    padding: 5%;
  }

  .vitals-data {
    width: 100%;
    height: 25%;
    padding: 10px 25%;
    td {
      border-bottom: 0 !important;
      border-right: 1px solid black;
      margin: 0 10px !important;
      align-items: center;
      text-align: center;

      &:last-child {
        border-right: 0;
      }
    }
  }
`;
