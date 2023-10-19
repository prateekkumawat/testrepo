import { Card } from 'antd';
import { styled } from 'styled-components';

export const TabCardWrapper = styled('div')`
  /* margin: ${(props) => props.theme.margin.main}; */
  width: 250px;
  height: 150px;
  .icon {
    background-color: ${(props) => props.theme.primary.main};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    padding: 5px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: grid;
    place-content: center;
    margin-bottom: 10px;
    svg {
      fill: ${(props) => props.theme.common.white};
      stroke: ${(props) => props.theme.common.white};
      width: 20px;
      height: 20px;
    }
  }
  article {
    color: #000;
    text-align: center;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
  }
  &.active {
    background: ${(props) => props.theme.secondary.main};
    .icon {
      border: 1px solid ${(props) => props.theme.common.white};
      background-color: transparent !important;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    article {
      color: ${(props) => props.theme.common.white};
    }
    .title {
      color: #fff;
    }
  }
`;
