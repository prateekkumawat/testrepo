import styled from 'styled-components';
import { ShadowedCard } from '../../../Component/Card/Card';

export const VarCompWrapper = styled('div')`
  /* width: 25%;
  height: 60vh;
  border: 1px solid lightgray;
  padding: 0 !important;
  border-radius: 20px; */
  /* .container {
    display: flex;
    width: 100%;
    height: 35vh;
    flex-direction: column;
    flex-wrap: wrap;
    &:last-child {
      .var-title {
        border-top-right-radius: 0px;
        border-top-left-radius: 0px;
      }
    }
  }
  .container-2 {
    display: flex;
    width: 100%;
    height: 25vh;
    flex-direction: column;
    flex-wrap: wrap;
    &:last-child {
      .var-title {
        border-top-right-radius: 0px;
        border-top-left-radius: 0px;
      }
    }
  } */
  .var-title {
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 10px;
    width: 100%;
    background-color: lightgray;
    color: black;
    font-size: 1.2em;
    font-weight: 600;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    .icons {
      font-size: 1.2em;
      margin-left: 30%;
    }
  }
  .container-body {
    display: flex;
    flex-wrap: wrap;
  }
  .var-title-2 {
    text-align: center;
    padding: 10px;
    width: 100%;
    background-color: lightgray;
    color: black;
    font-size: 1.2em;
    font-weight: 600;
    .icons {
      font-size: 1.2em;
      margin-left: 30%;
    }
  }
  .container-body {
    display: flex;
    flex-wrap: wrap;
  }
`;
