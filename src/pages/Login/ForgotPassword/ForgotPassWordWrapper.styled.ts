import { Row } from 'antd';
import { styled } from 'styled-components';

export const ForgotPasswordWrapper = styled(Row)`
  display: block;
  align-items: center;

  .form-label {
    margin: 20px 0;
    text-align: start;
    font-size: 1.2em;
    .input_box{
      margin-top: 2%;
    }
    .icon {
      font-size: 1.5em;
      color: ${(props) => props.theme.primary.main};
    }
  }
  form {
    padding: 30px;
  }
  .above-text {
    margin-bottom: 30px;
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
    margin: 5% 0;
    /* border: 2px solid white; */
  }
`;
