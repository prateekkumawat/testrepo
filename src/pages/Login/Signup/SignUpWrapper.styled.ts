import { Checkbox, Row } from 'antd';
import styled from 'styled-components';

export const SignUpContainer = styled('div')`
  display: block;
  align-items: center;

  .labels {
    margin: 20px 0;
    text-align: start;
    font-size: 1.2em;
  }
  .input_box {
    margin: 10px 0;
  }
  h2 {
    font-size: 2.5em;
    font-weight: 700;
  }
  p {
    font-weight: 600;
    a {
      color: ${(props) => props.theme.primary.main};
    }
  }
  .login-buttons {
    width: 100%;
    margin: 20px 0;
  }
  form{
    margin: 0;
  }

  .captcha {
    height: 10vh;
    width: 100%;
    background-color: whitesmoke;
    margin: 10px 0;
  }
`;

export const Captcha = styled('div')`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  height: 10vh;
  width: 100%;
  background-color: white;
  margin: 10px 0;
  .left-captcha {
    margin-left: 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    gap: 20px;
    font-weight: 500;
    font-size: 1.2em;
  }
  img {
    margin-left: 25%;
  }
  .spinner {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top: 4px solid #007bff;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
    margin: 0 auto;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
