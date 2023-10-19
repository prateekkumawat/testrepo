import { Row } from 'antd';
import { styled } from 'styled-components';

export const OTPVerificationWrapper = styled(Row)`
  display: block;
  align-items: center;

  .form-label {
    margin: 20px 0;
    text-align: start;
    font-size: 1.2em;
  }
  .otp {
    gap: 2%;
    .otp_input_box {
      width: 15%;
      row-gap: 1%;
    }
  }
  form {
    padding: 30px;
    margin: 20px;
  }
  .above-text {
    margin: 10px 80px;
    font-size: 1.2em;
    font-weight: 600;
  }
  h1 {
    font-size: 2.5em;
    font-weight: 700;
  }
  .bottom-text {
    margin: 30px;
    font-size: 1em;
    font-weight: 600;
    a {
      color: ${(props) => props.theme.primary.main};
    }
  }
  .login-buttons {
    width: 100%;
    height: 45px;
    font-size: 1.2em;
    font-weight: 600;
  }
  :where(.css-dev-only-do-not-override-4lo48e).ant-input {
    text-align: center;
    font-size: 1.2em;
  }
`;
