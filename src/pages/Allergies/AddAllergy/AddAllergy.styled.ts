import { Form, Input, Row } from 'antd';
import { styled } from 'styled-components';

export const AddAllergyWrapper = styled(Row)`
  min-width: 100%;
  .ant-row {
    display: block;
  }

  .form {
    width: 100%;
    padding: 0 20px 20px 20px;
    .items {
      
  font-weight: 600;
      border-bottom: 1px solid black;
      padding: 20px 0;
      font-size: 1.2em;
      margin-bottom: 20px;
    }
    .form-items {
      /* margin: 10px 0 !important; */
      .form-inputs {
        margin-top: 5px;
      }
      .form-checkbox {
        padding: 0 10px;
      }
    }
    label {
      font-size: 1em;
      font-weight: 500;
      margin: 0;
      padding: 0;
    }
    .allergies-bttns{
      display: flex;
      margin: 20px;
      justify-content: center;
      gap: 20px;
      .allergies-bttns-cancel{
        padding: 10px 40px;
      height: 45px;
      
      font-weight: 600;
      }
      .allergies-bttns-submit{
        
      font-weight: 600;
      height: 45px;
        padding: 10px 40px;
        background-color: ${props => props.theme.primary.main};
        color: ${props => props.theme.common.white};
      }
    }
  }
`;

