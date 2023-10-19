import { Row } from "antd";
import { styled } from "styled-components";

export const AttorneysContactWrapper = styled(Row)`
  .attorneys-title {
    font-size: 16px;
    font-weight: 600px;
  }
  .attorneys-contact-inner-wrapper {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;

    .ant-card {
      width: 90%;
    }
    .ant-card-body {
      display: flex;
      width: 100%;
      padding: 0;
    }
    .add-btn {
      display: grid;
      place-content: center;
      .add-icon {
        font-size: 1.5rem;
      }
    }
    .attorneys-table {
      width: 100%;
    }
    .attorney-delete-icon {
      width: 30px;
      place-content: center;
      font-size: 1.3rem;
      padding: 0 !important;
    }
  }
  &.disabled-input {
    cursor: not-allowed;
    .ant-card-body {
      cursor: not-allowed !important;
      background-color: rgba(0, 0, 0, 0.04) !important;
      color: rgba(0, 0, 0, 0.25) !important;
      border-color: #d9d9d9 !important;
    }
    .add-btn {
      cursor: not-allowed !important;
      background-color: rgba(0, 0, 0, 0.04) !important;
      color: rgba(0, 0, 0, 0.25)!important;
      border-color: #d9d9d9 !important;
    }
  }
`