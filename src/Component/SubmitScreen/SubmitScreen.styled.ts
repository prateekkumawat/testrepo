import styled from 'styled-components';

export const SubmitWrapper = styled('div')`
  .banner {
    background: ${(props) => props.theme.primary.main};
    box-shadow: 0px 4px 30px 0px ${(props) => props.theme.grey.main};
    display: grid;
    flex-direction: column;
    place-content: center;
    padding: 50px;
    width: 100%;
  }
  .tick-ion {
    text-align: center;
    width: 100%;
    font-size: 4.5em;
    fill: ${(props) => props.theme.common.white};
    padding-bottom: 10px;
  }
  .title1 {
    color: #fff;
    text-align: center;
    font-size: 2.3em;
  }
  .title2 {
    color: #fff;
    text-align: center;
    font-size: 2em;
  }
  .mini-banner {
    width: 60vw;
    padding: 10px;
    background-color: ${(props) => props.theme.common.white};
    margin: auto;
    margin-top: -40px;
    .ant-card-body {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .info-text {
      padding: 10px;
      color: ${(props) => props.theme.common.black};
      font-family: ${(props) => props.theme.font.family};
      font-size: 19px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: capitalize;
    }
    .nav-buttons {
      gap: 15px;
      display: flex;
    }
  }
`;
