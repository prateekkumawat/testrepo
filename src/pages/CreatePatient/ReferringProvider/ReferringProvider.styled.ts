import { Row } from 'antd';
import { styled } from 'styled-components';

export const ReferringProviderWrapper = styled(Row)`
  width: 100%;
  .copied-input {
    display: flex;
    border: 1px solid grey;
    border-radius: 7px;
    width: 100%;
    justify-content: space-between;
    max-height: 32px;
    overflow: hidden;
    white-space: nowrap;
    // align-items: center;
    padding: 5px;
    .provider-text {
      width: 85%;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .open-popup-icon {
      cursor: pointer;
      display: flex;
      float: right;
      font-size: 1.5em;
    }
  }
  &.disabled-input {
    .copied-input {
      cursor: not-allowed;
      background-color: rgba(0, 0, 0, 0.04);
      color: rgba(0, 0, 0, 0.25);
      border-color: #d9d9d9;
    }
    .open-popup-icon {
      cursor: not-allowed;
    }
  }
`;
