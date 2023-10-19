import { Row } from "antd";
import { styled } from "styled-components";

export const PcpWrapper = styled(Row) `
  margin: 15px 0;
  width: 100%;
  .pcp-input {
    border-radius: 6px;
    padding: auto;
    width: 100%;
    border: 1px solid ${(prop) => prop.theme.common.black};
    background-color: ${(prop) => prop.theme.common.white};
    height: 30px;
    .text {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .select-dropdown {
    width: 100%;
    position: relative;
    z-index: 9;
    background-color: ${(prop) => prop.theme.common.white};
    margin: 0;
    .ant-card-body {
      padding: 0;
    }
  }
  .open-dropdown {
    display: block;
  }
  .hide-dropdown {
    display: none;
  }
  &.disabled-input {
    .pcp-input {
      cursor: not-allowed !important;
      background-color: rgba(0, 0, 0, 0.04) !important;
      color: rgba(0, 0, 0, 0.25) !important;
      border-color: #d9d9d9 !important;
      .placeholder {
        color: rgba(0, 0, 0, 0.25) !important;
        padding-left: 10px;
        line-height: 30px;
      }
    }
  }
`