import { Checkbox, Row } from 'antd';
import styled from 'styled-components';

export const SignInContainer = styled('div')`
  /* font-weight: bold;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 36px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #000000;
  align-items: center;
  text-align: center;
  height: fit-content;
  width: 40vw;
  max-width: 500px;
  margin-top: -20vh;
  margin-left: 20vw; */

  h1 {
    font-size: 3em;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2em;
    margin: 0 20px;
  }

  form {
    padding: 20px;
    margin: 20px;
  }

  .form-label {
    margin: 20px 0;
    font-size: 1.2em;
    font-weight: 600;
    text-align: start;
  }
  .input_box {
    margin-top: 20px 0 !important;
  }

  ::placeholder {
    color: lightgray;
  }

  .icon {
    margin-left: 5px;
    height: 20px;
    width: 20px;
    color: purple;
  }
  .icon-pass {
    height: 30px;
    width: 30px;
    color: purple;
  }

  .password-icon {
    position: absolute;
    color: purple;
    top: 50%;
    height: 20px;
    width: 20px;
    right: 0.625em;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .forgot-password {
    margin-top: -1em;
    margin-bottom: 1.2em;
    text-align: end;
    color: black !important;
  }

  .login-buttons {
    margin-top: 20px;
    background-color: ${(props) => props.theme.primary.main};
    color: #fff !important;
    border: none;
    border-radius: 10px;
    padding: 0.625em;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
    height: 45px;
    width: 100%;
    font-size: 1.2em;
  }

  .signup-link {
    text-align: center;
    margin-top: 0.9375em;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px !important;
  }

  @media screen and (min-width: 1204px) {
    font-size: 14px !important;
  }

  @media screen and (min-width: 320px) {
    font-size: 8px;
  }
`;

export const Captcha = styled('div')`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: fit-content;
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
    margin: 20px 0;
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
