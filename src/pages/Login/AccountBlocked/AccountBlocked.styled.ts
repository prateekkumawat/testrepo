import { Row } from 'antd';
import { styled } from 'styled-components';

export const AccountBlockedWrapper = styled(Row)`
  display: block;
  align-items: center;

  padding: 50px 30px 30px 30px;
  h2 {
    padding: 2% 0;
    font-size: 2.5em;
    font-weight: 700;
  }
  p {
    font-weight: 500;
    color: red;
  }
  .login-buttons {
    margin: 20vh 0 10px 0 !important;
  }
`;
