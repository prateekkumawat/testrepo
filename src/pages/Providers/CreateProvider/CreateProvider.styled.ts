import styled from 'styled-components';

export const CreateProviderWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .full-border {
    .border-bottom {
      width: 100%;
    }
  }
`;

export const BtnTabsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: -20px;
  .ant-tabs-nav-wrap {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  .ant-tabs-nav {
    margin: 0;
  }
  .selected-border {
    border: 1px solid ${(props) => props.theme.primary.main};
    position: relative;
    width: 40px;
  }
  .flex-end {
    display: flex;
    justify-content: flex-end;
  }
  .flex-start {
    display: flex;
    justify-content: flex-start;
  }
  .ant-tabs-tab {
    display: flex;
    width: 170px;
    padding: 10px 45px !important;
    margin: 10px !important;
    pointer-events: none;
    span {
      color: #000;
      text-align: center;
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: capitalize;
    }
  }
  .ant-tabs-tab-active {
    display: flex;
    width: 170px;
    background-color: ${(props) => props.theme.secondary.main};
    padding: 10px 45px !important;
    margin: 10px !important;
    span {
      color: ${(props) => props.theme.secondary.contrastTextColor};
      text-align: center;
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: capitalize;
    }
  }
  .ant-tabs-ink-bar {
    height: 4px !important;
  }
`;
