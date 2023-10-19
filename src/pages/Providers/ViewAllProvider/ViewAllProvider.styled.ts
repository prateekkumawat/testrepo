import { styled } from 'styled-components';

export const ViewAllProviderWrapper = styled('div')`
  /* margin-top: -90px; */
  .ant-card {
    margin: 0 !important;
  }
  .ant-table-thead {
    .ant-table-cell {
      background-color: ${(props) => props.theme.secondary.main};
      color: ${(props) => props.theme.secondary.contrastTextColor};
    }
  }
  .search-fields {
    padding: 10px;
    .ant-form {
      display: flex;
      align-items: center;
      width: 80%;
      margin: auto;
    }
  }
  .status {
    width: 15px;
    height: 15px;
    background: ${(prop) => prop.theme.warning.main};
    border-radius: 50%;
    margin: auto;
  }
  .status.active {
    background: ${(prop) => prop.theme.success.main};
  }
  .status.inactive {
    background: ${(prop) => prop.theme.danger.main};
  }
  .status.pending {
    background: ${(prop) => prop.theme.warning.main};
  }
  .input-field-with-addonAfter {
    .ant-input {
      border: 0;
      height: 43px;
      box-shadow: none;
    }
    .ant-input:hover,
    .ant-input:focus {
      border: 0;
      height: 43px;
      box-shadow: none;
    }
    .ant-input-group-addon {
      background: transparent;
      height: 45px;
      border: 0;
    }
  }
`;
