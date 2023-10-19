import { Row } from 'antd';
import { styled } from 'styled-components';

export const ViewPatientWrapper = styled(Row)`
  .input-card {
    display: flex;
    width: 100%;

    .ant-card-body {
      width: 100%;
    }
    .view-patient {
      font-weight: bold;
      font-size: 16px;
    }
    .form-wrapper {
      width: 100%;
      display: flex;
      flex-direction: row;
      padding-top: 20px;
      .ant-form {
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
        button {
          color: #fff;
          background-color: #972587;
          height: 40px;
          width: 100px;
          span {
            color: #fff;
            text-align: center;
            font-family: Montserrat;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }
        }
        input {
          width: 20vw;
        }
      }
    }
  }
`;
