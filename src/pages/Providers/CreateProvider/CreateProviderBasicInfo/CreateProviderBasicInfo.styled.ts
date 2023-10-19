import styled from 'styled-components';

export const CreateProviderBasicInfoStyled = styled('div')`
  width: 100%;
  .ant-picker {
    .ant-picker-input > input::placeholder {
      color: ${(props) => props.theme.dark.main};
      font-family: ${(props) => props.theme.font.primary.family};
      font-size: ${(props) => props.theme.font.primary.size15};
      font-weight: ${(props) => props.theme.font.primary.fontWeight500};
    }
  }
  .input-field1 {
    width: ${(props) => props.theme.mediaQueries.inputField1Width};
  }
  .input-field2 {
    width: ${(props) => props.theme.mediaQueries.inputField2Width};
  }
  form {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .small-card {
    width: 39%;
    background: ${(props) => props.theme.submitwrapper.hexwhite};
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
  }
  .large-card {
    width: 59%;
    background: ${(props) => props.theme.submitwrapper.hexwhite};
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
  }
  .card-wrapper {
    border-radius: 0;
    .ant-form-item {
      margin-bottom: 24px !important;
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
      color: ${(props) => props.theme.dark.main};
      font-family: ${(props) => props.theme.font.primary.family};
      font-size: ${(props) => props.theme.font.primary.size13};
      font-weight: ${(props) => props.theme.font.primary.fontWeight500};
    }
    .ant-picker {
      .ant-picker-input > input::placeholder {
        color: ${(props) => props.theme.dark.main};
        font-family: ${(props) => props.theme.font.primary.family};
        font-size: ${(props) => props.theme.font.primary.size13};
        font-weight: ${(props) => props.theme.font.primary.fontWeight500};
      }
    }
    ::-webkit-input-placeholder {
      color: ${(props) => props.theme.dark.main};
      font-family: ${(props) => props.theme.font.primary.family};
      font-size: ${(props) => props.theme.font.primary.size13};
      font-weight: ${(props) => props.theme.font.primary.fontWeight500};
    }
  }
  ${(props) => props.theme.mediaQueries.desktop1920} {
    .input-field1 {
      width: ${(props) => props.theme.mediaQueries.inputField1Width};
    }
    .input-field2 {
      width: ${(props) => props.theme.mediaQueries.inputField2Width};
    }
    .ant-select-selection-placeholder {
      color: ${(props) => props.theme.dark.main};
      font-family: ${(props) => props.theme.font.primary.family};
      font-size: ${(props) => props.theme.font.primary.size15};
      font-weight: ${(props) => props.theme.font.primary.fontWeight500};
    }
    .ant-picker {
      .ant-picker-input > input::placeholder {
        color: ${(props) => props.theme.dark.main};
        font-family: ${(props) => props.theme.font.primary.family};
        font-size: ${(props) => props.theme.font.primary.size15};
        font-weight: ${(props) => props.theme.font.primary.fontWeight500};
      }
    }
    ::-webkit-input-placeholder {
      color: ${(props) => props.theme.dark.main};
      font-family: ${(props) => props.theme.font.primary.family};
      font-size: ${(props) => props.theme.font.primary.size15};
      font-weight: ${(props) => props.theme.font.primary.fontWeight500};
    }
  }
`;
