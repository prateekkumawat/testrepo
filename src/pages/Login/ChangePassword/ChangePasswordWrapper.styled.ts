import { Row } from 'antd';
import { styled } from 'styled-components';

export const ChangePasswordWrapper = styled(Row)`
  display: block;
  align-items: center;

  .labels {
    /* margin: 20px 0; */
    text-align: start;
    font-size: 1.2em;
    .input_box{
      margin: 10px 0;
    }
  }
  form {
    /* padding: 50px 30px 30px 30px; */
    margin: 0 20px;
    .icon{
      font-size: 1.5em;
      color: ${(props) => props.theme.primary.main};
    }
  }
  h1 {
    font-size: 2.5em;
    font-weight: 700;
  }
  p {
    font-size: 1.2em;
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
    margin: 30px 0 !important;
    background-color: ${(props) => props.theme.primary.main};
    color: white;
  }
`;
