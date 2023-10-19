import { Row } from 'antd';
import styled from 'styled-components';

export const MainContainer = styled(Row)`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .footer-support-bttns {
    background-color: ${(props) => props.theme.secondary.main};
    height: 45px;
    width: 45px;
    border-radius: 23px;
    border-style: solid;
    border-color: white;
    margin: 0 30px 30px 30px;
    .icon-support {
      color: #fff;
      font-size: 1.5em;
      font-weight: 600;
      padding: 0;
    }
  }
`;

export const Container1 = styled(Row)`
  background-color: ${(props) => props.theme.primary.main};
  height: 30vh;
  max-height: 250px;
  width: 100vw;
  color: white;
  padding: 10px;
  padding-left: 120px;
  font-weight: 1em;
`;

export const Text = styled.div`
  padding: 40px;
  padding-left: 120px;
  width: 38%;
  height: auto;
`;

export const Container2 = styled(Row)`
  padding: 0 20px;
  height: 60vh;
  max-height: 500px;
`;
export const Container4 = styled(Row)`
  font-weight: bold;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 24px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #000000;
  align-items: center;
  text-align: center;
  height: fit-content;
  width: 40vw;
  max-width: 500px;
  margin-top: -20vh;
  margin-left: 20vw;
  :where(.css-dev-only-do-not-override-4lo48e).ant-card {
    border-radius: 24px;
  }
`;
export const Container3 = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;
