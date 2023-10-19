import styled from 'styled-components';

export const StyledTabDetail = styled('div')`
  .hub-title {
    font-size: 2em;
    font-weight: bold;
    margin: 20px 0;
    padding: 0 10px;
  }
  .hub-sub-title {
    font-size: 1.5em;
    font-weight: bold;
    margin: 15px 0;
    padding: 0 10px;
  }
  .card-section {
  }
  .tab-names {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 30px;
    .tab-name {
      font-size: 1.5em;
      padding: 0 10px;
      font-weight: 500;
      color: black;
      border-bottom: 5px solid transparent;
      &.active1 {
        display: flex;
        flex-direction: column;
      }
      .active {
        /* width: 10px;
        height: 10px; */
        width: 30%;
        border-bottom: 5px solid ${(props) => props.theme.primary.main};
      }
    }
    .separator {
      padding: 0 10px;
      color: black;
      font-size: 2em;
    }
  }
  .tab-details-card {
    .ant-card-body {
      padding: 0;
    }
  }
`;
