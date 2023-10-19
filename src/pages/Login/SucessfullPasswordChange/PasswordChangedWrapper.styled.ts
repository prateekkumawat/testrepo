import { Row } from 'antd';
import { styled } from 'styled-components';

export const PasswordChangedWrapper = styled(Row)`
  padding: 5% 0;
  display: block;
  align-items: center;
  h2 {
    padding: 2% 0;
    font-size: 2.5em;
    font-weight: 700;
  }
  p {
    padding: 0 20px;
    font-weight: 500;
  }

  form {
    padding: 30px;
    margin: 20px;
  }
  .login-buttons {
    margin-top: 30%;
    width: 100%;
  }
`;
