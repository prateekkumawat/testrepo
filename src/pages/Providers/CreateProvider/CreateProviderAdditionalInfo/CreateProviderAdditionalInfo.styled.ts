import styled from 'styled-components';

export const CreateProviderAddiitonalInfoStyled = styled('div')`
  width: 100%;
  form {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .small-card {
    width: 39%;
    background: ${(prop) => prop.theme.common.white};
    box-shadow: 0px 4px 20px 0pxrgba (0, 0, 0, 0.2);
  }
  .large-card {
    width: 59%;
    background: ${(prop) => prop.theme.common.white};
    box-shadow: 0px 4px 20px 0pxrgba (0, 0, 0, 0.2);
  }
  .card-wrapper {
    border-radius: 0;
    .ant-form-item {
      margin-bottom: 20px !important;
    }
  }
  .hide {
    display: none;
  }
  .ant-checkbox-wrapper {
    &:hover {
      .hide {
        display: block;
        color: #000;
      }
    }
  }
  ${(props) => props.theme.mediaQueries.desktop1440} {
    .input-field1 {
      width: 65%;
    }
    .input-field2 {
      width: 32%;
    }
    .ant-select-selection-placeholder {
      color: #000;
      font-family: Montserrat;
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .ant-picker {
      .ant-picker-input > input::placeholder {
        color: #000;
        font-family: Montserrat;
        font-size: 13px;
        font-weight: 500;
        line-height: normal;
      }
    }
    ::-webkit-input-placeholder {
      color: #000;
      font-family: Montserrat;
      font-size: 13px !important;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
  ${(props) => props.theme.mediaQueries.desktop1920} {
    .input-field1 {
      width: 65%;
    }
    .input-field2 {
      width: 32%;
    }
    .ant-select-selection-placeholder {
      color: #000;
      font-family: Montserrat;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .ant-picker {
      .ant-picker-input > input::placeholder {
        color: #000;
        font-family: Montserrat;
        font-size: 15px;
        font-weight: 500;
        line-height: normal;
      }
    }
    ::-webkit-input-placeholder {
      color: #000;
      font-family: Montserrat;
      font-size: 15px !important;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;
